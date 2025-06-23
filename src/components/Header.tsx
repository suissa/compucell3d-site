import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 rounded-md text-lg font-medium text-green-700 hover:bg-green-50 hover:text-green-900 flex items-center"
      >
        {title} <ChevronDown className="ml-1 w-4 h-4" />
      </button>
      {open && (
        <div className="absolute bg-white shadow-md rounded-md mt-2 w-48 z-50">
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const groupedItems = {
    docs: [
      { name: "Source Code", path: "/source-code" },
      { name: "Developer Zone", path: "/developer-zone" },
      { name: "Manuals", path: "/manuals" },
      { name: "Support", path: "/support" },
    ],
    media: [
      { name: "Quick Models", path: "/quick-models" },
      { name: "Movies", path: "/movies" },
      { name: "Screenshots", path: "/screenshots" },
    ],
  };

  const mainNav = [
    { name: "Home", path: "/" },
    { name: "Download", path: "/download" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Models", path: "/models" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-0">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/globinho.png" alt="CompuCell3D" className="h-20" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 items-center">
            {mainNav.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "bg-green-100 text-green-900"
                    : "text-green-700 hover:bg-green-50 hover:text-green-900"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Dropdown title="Docs" items={groupedItems.docs} />
            <Dropdown title="Media" items={groupedItems.media} />
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-green-700 hover:bg-green-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-green-100 py-4">
            <nav className="flex flex-col space-y-2">
              {[...mainNav, ...groupedItems.docs, ...groupedItems.media].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-green-100 text-green-900"
                      : "text-green-700 hover:bg-green-50 hover:text-green-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
