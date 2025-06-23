
import { Eye, Download, ZoomIn } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Screenshots = () => {
  const screenshots = [
    {
      title: "Cell Division Simulation",
      description: "Visualization of cellular mitosis process",
      category: "Cell Biology"
    },
    {
      title: "Angiogenesis Network",
      description: "Blood vessel formation and branching patterns",
      category: "Vascular Biology"
    },
    {
      title: "Tumor Growth",
      description: "Cancer cell proliferation and invasion",
      category: "Oncology"
    },
    {
      title: "Wound Healing",
      description: "Tissue repair and regeneration process",
      category: "Regenerative Medicine"
    },
    {
      title: "Bacterial Colony",
      description: "Microbial growth and pattern formation",
      category: "Microbiology"
    },
    {
      title: "Immune Cell Interaction",
      description: "T-cell and antigen recognition",
      category: "Immunology"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Screenshots Gallery</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Visual showcase of CompuCell3D simulations and modeling capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center">
                    <Eye className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-green-600 p-3 rounded-full hover:bg-green-50">
                    <ZoomIn className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-green-900 mb-2">{screenshot.title}</h3>
                <p className="text-green-700 text-sm mb-3">{screenshot.description}</p>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {screenshot.category}
                </span>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                    <Eye className="h-4 w-4" />
                    View
                  </button>
                  <button className="px-4 py-2 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-green-700 mb-6">
            Want to see more examples? Check out our simulation movies for dynamic visualizations.
          </p>
          <a 
            href="/movies"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <Eye className="h-5 w-5" />
            View Simulation Movies
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Screenshots;
