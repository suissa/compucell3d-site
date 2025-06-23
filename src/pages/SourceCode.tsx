
import { Code, GitBranch, Users, Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SourceCode = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Source Code</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            CompuCell3D is open source software. Access the code, contribute, and collaborate with the community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold text-green-900">GitHub Repository</h2>
            </div>
            
            <p className="text-green-700 mb-6">
              The complete CompuCell3D source code is available on GitHub. Fork, clone, 
              and contribute to the project development.
            </p>
            
            <div className="space-y-4">
              <a 
                href="https://github.com/CompuCell3D/CompuCell3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <GitBranch className="h-5 w-5" />
                View on GitHub
              </a>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-green-50 rounded-lg">
                  <Star className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-900">Stars</p>
                  <p className="text-xl font-bold text-green-600">150+</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-900">Contributors</p>
                  <p className="text-xl font-bold text-green-600">25+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-green-900 mb-6">Build Instructions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">Prerequisites</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• CMake (3.10 or higher)</li>
                  <li>• C++ compiler (GCC 7.0+ or Visual Studio 2017+)</li>
                  <li>• Python 3.7+</li>
                  <li>• Qt5 development libraries</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">Quick Build</h3>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <p>git clone https://github.com/CompuCell3D/CompuCell3D.git</p>
                  <p>cd CompuCell3D</p>
                  <p>mkdir build && cd build</p>
                  <p>cmake ..</p>
                  <p>make -j4</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Contributing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GitBranch className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-3">Fork & Branch</h3>
              <p className="text-green-700">
                Create your own fork and work on feature branches
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-3">Code & Test</h3>
              <p className="text-green-700">
                Write clean code and include appropriate tests
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-3">Pull Request</h3>
              <p className="text-green-700">
                Submit your changes for review and integration
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SourceCode;
