
const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CompuCell3D</h3>
            <p className="text-green-200 text-sm leading-relaxed">
              A flexible scriptable modeling environment for rapid construction of 
              sharable Virtual Tissue simulations of multi-scale, multi-cellular problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/download" className="text-green-200 hover:text-white transition-colors">Download</a></li>
              <li><a href="/tutorials" className="text-green-200 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="/manuals" className="text-green-200 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="/support" className="text-green-200 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/models" className="text-green-200 hover:text-white transition-colors">Model Repository</a></li>
              <li><a href="/screenshots" className="text-green-200 hover:text-white transition-colors">Screenshots</a></li>
              <li><a href="/movies" className="text-green-200 hover:text-white transition-colors">Simulation Movies</a></li>
              <li><a href="/developer-zone" className="text-green-200 hover:text-white transition-colors">Developer Zone</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-green-200 text-sm">
            © 2024 CompuCell3D. All rights reserved. | 
            <a href="/source-code" className="hover:text-white ml-1">Open Source Project</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
