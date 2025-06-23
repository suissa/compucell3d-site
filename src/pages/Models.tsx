
import { Code2, Download, Eye, Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Models = () => {
  const models = [
    {
      name: "Basic Cell Growth",
      description: "Simple model demonstrating cell division and growth mechanics",
      category: "Educational",
      downloads: 245,
      rating: 4.5
    },
    {
      name: "Angiogenesis Network",
      description: "Complex vascular network formation simulation",
      category: "Vascular Biology",
      downloads: 189,
      rating: 4.8
    },
    {
      name: "Tumor Invasion",
      description: "Cancer cell invasion and metastasis modeling",
      category: "Cancer Research",
      downloads: 156,
      rating: 4.7
    },
    {
      name: "Wound Healing",
      description: "Tissue repair and regeneration simulation",
      category: "Regenerative Medicine",
      downloads: 132,
      rating: 4.6
    },
    {
      name: "Bacterial Colony",
      description: "Microbial growth patterns and colony formation",
      category: "Microbiology",
      downloads: 98,
      rating: 4.3
    },
    {
      name: "Immune Response",
      description: "T-cell and B-cell interaction modeling",
      category: "Immunology",
      downloads: 87,
      rating: 4.4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Model Repository</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Download and explore pre-built CompuCell3D models for various biological systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-900 mb-2">{model.name}</h3>
                  <p className="text-green-700 text-sm mb-3">{model.description}</p>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    {model.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-sm text-green-600">
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    <span>{model.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span>{model.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </button>
                <button className="px-4 py-2 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-green-100">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Submit Your Model</h2>
          <p className="text-green-700 mb-6">
            Share your CompuCell3D models with the community. Help others learn and build upon your work.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            Submit Model
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Models;
