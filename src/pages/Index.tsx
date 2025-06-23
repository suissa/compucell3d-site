import { Download, Code, BookOpen, Users, Play, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  const features = [
    {
      icon: <Download className="h-8 w-8 text-green-600" />,
      title: "Easy Installation",
      description: "Download pre-compiled binaries for Windows, macOS, and Linux",
      link: "/download"
    },
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      title: "Open Source",
      description: "Full source code available with active development community",
      link: "/source-code"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Comprehensive Docs",
      description: "Detailed manuals, tutorials, and examples to get you started",
      link: "/manuals"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Active Community",
      description: "Join developers and researchers using CompuCell3D worldwide",
      link: "/support"
    }
  ];

  const showcaseItems = [
    {
      icon: <Play className="h-6 w-6" />,
      title: "Simulation Movies",
      description: "Watch dynamic simulations in action",
      link: "/movies",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: <ImageIcon className="h-6 w-6" />,
      title: "Screenshots",
      description: "Visual gallery of simulation results",
      link: "/screenshots",
      bgColor: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Model Repository",
      description: "Browse pre-built simulation models",
      link: "/models",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-cyan-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center flex flex-col items-center">
          <h1 className="pt-16 text-4xl md:text-5xl font-bold bg-gradient-to-b from-green-900 to-green-400 bg-clip-text text-transparent">
            Welcome to</h1>
              
          <img 
              src="/logo-verde-conthrax.png" 
              alt="CompuCell3D Logo" 
              className="w-[90vw] md:w-[60vw] w-auto mx-auto"
            />
            <div>
              <p className="mt-16 text-4xl md:text-6xl font-bold bg-gradient-to-b from-green-900 via-green-400 to-green-900 bg-clip-text text-transparent pb-8">Multi-Scale Modeling Platform</p>
            </div>
            <p className="mt-8 text-xl md:text-2xl text-green-700 mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
              A flexible scriptable modeling environment for rapid construction of 
              sharable Virtual Tissue simulations of multi-scale, multi-cellular problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/download" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Download Now
              </Link>
              <Link 
                to="/tutorials" 
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-l from-green-200 to-transparent"></div>
        </div>
      </section>

      {/* Summer School & Hackathon Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    2025 Multicell Virtual Tissue Modeling
                </h1>
                <h2 className="inline-block text-3xl md:text-4xl font-semibold text-gray-700 border-b-4 border-green-500 pb-1 mt-4">
                    Online Summer School & Hackathon
                </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {/* Left Box: Summer School */}
                <div className="border border-blue-200 rounded-xl p-8 bg-blue-50/40 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <h3 className="text-3xl font-bold text-blue-700 text-center">Virtual Tissue Summer School</h3>
                    <p className="mt-4 text-lg text-blue-600 text-center">Learn the basics of Virtual Tissue modeling with CompuCell3D</p>
                    <div className="mt-8 space-y-4 text-center text-gray-700 text-lg flex-grow flex flex-col justify-center">
                        <p><span className="font-bold text-blue-800">Basic CC3D:</span> Mon, July 28 – Fri, Aug 1</p>
                        <p><span className="font-bold text-blue-800">Advanced CC3D:</span> Mon, Aug 4 – Wed, Aug 6</p>
                    </div>
                </div>

                {/* Right Box: Hackathon */}
                <div className="border border-green-200 rounded-xl p-8 bg-green-50/40 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <h3 className="text-3xl font-bold text-green-700 text-center">Virtual Tissue Modeling Hackathon</h3>
                    <p className="mt-4 text-lg text-green-600 text-center">Build the foundation of your model with expert guidance</p>
                     <div className="mt-8 space-y-4 text-center text-gray-700 text-lg flex-grow flex flex-col justify-center">
                        <p>Fri, Aug 8 – Sun, Aug 10</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 max-w-6xl mx-auto text-center text-gray-600">
                <p className="text-xl">
                  Tutorials with live support (zoom) & daily group discussions (zoom)
                </p>
                <p className="text-2xl font-bold text-blue-800 mt-6">
                  ALL experience levels welcome!
                </p>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-lg">
                    <a href="mailto:compucell3d.iu@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline">compucell3d.iu@gmail.com</a>
                    <a href="http://compucell3d.org/Workshop25" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">compucell3d.org/Workshop25</a>
                    <div className="font-bold">
                        <span className="text-gray-800">Apply: </span>
                        <a href="https://tinyurl.com/CC3D2025" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 hover:underline">https://tinyurl.com/CC3D2025</a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 mb-4">
              Why Choose CompuCell3D?
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Powerful tools for modeling complex biological systems with ease and precision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={index}
                to={feature.link}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-green-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 mb-4">
              Research Applications
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              CompuCell3D has been used to model diverse biological phenomena
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Angiogenesis", "Bacterial Colonies", "Cancer Research", "Developmental Biology",
              "Evolution Studies", "Immune System", "Toxicology", "Tissue Engineering"
            ].map((application, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-green-900 text-center">
                  {application}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore & Discover
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              See CompuCell3D in action through our gallery and model repository
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcaseItems.map((item, index) => (
              <Link 
                key={index}
                to={item.link}
                className={`${item.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-white group hover:scale-105`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-green-50">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
