
import { Play, BookOpen, Clock, User } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Tutorials = () => {
  const tutorials = [
    {
      title: "Getting Started with CompuCell3D",
      description: "Learn the basics of CompuCell3D interface and core concepts",
      duration: "30 min",
      level: "Beginner",
      topics: ["Interface Overview", "Basic Simulation", "Parameter Setting"]
    },
    {
      title: "Cell Growth and Division",
      description: "Model cellular growth patterns and division mechanisms",
      duration: "45 min",
      level: "Intermediate",
      topics: ["Growth Models", "Division Rules", "Population Dynamics"]
    },
    {
      title: "Multi-Scale Modeling",
      description: "Integrate molecular, cellular, and tissue-level processes",
      duration: "60 min",
      level: "Advanced",
      topics: ["Scale Integration", "Parameter Coupling", "Complex Systems"]
    },
    {
      title: "Angiogenesis Simulation",
      description: "Build models of blood vessel formation and growth",
      duration: "50 min",
      level: "Intermediate",
      topics: ["Vessel Networks", "Growth Factors", "Endothelial Cells"]
    },
    {
      title: "Cancer Modeling",
      description: "Simulate tumor growth and metastasis processes",
      duration: "70 min",
      level: "Advanced",
      topics: ["Tumor Growth", "Invasion", "Microenvironment"]
    },
    {
      title: "Python Scripting",
      description: "Automate simulations and analysis with Python",
      duration: "40 min",
      level: "Intermediate",
      topics: ["Python API", "Automation", "Data Analysis"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-green-100 text-green-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-cyan-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Tutorials</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Step-by-step guides to master CompuCell3D modeling techniques
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-900 mb-2">{tutorial.title}</h3>
                  <p className="text-green-700 mb-4">{tutorial.description}</p>
                </div>
                <div className="ml-4">
                  <Play className="h-8 w-8 text-green-600" />
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-green-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{tutorial.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4 text-green-600" />
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getLevelColor(tutorial.level)}`}>
                    {tutorial.level}
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-green-800 mb-2">Topics Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {tutorial.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                <BookOpen className="h-5 w-5" />
                Start Tutorial
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-green-100">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Learning Path</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-3">Foundations</h3>
              <p className="text-green-700">
                Start with basic concepts and interface familiarization
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-3">Application</h3>
              <p className="text-green-700">
                Build specific biological models and simulations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-3">Mastery</h3>
              <p className="text-green-700">
                Advanced techniques and complex system modeling
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tutorials;
