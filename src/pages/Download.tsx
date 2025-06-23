
import { Download as DownloadIcon, Monitor, Apple, Laptop } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Download = () => {
  const downloads = [
    {
      icon: <Monitor className="h-8 w-8" />,
      platform: "Windows",
      version: "4.6.0",
      description: "Compatible with Windows 10 and 11",
      downloadUrl: "#",
      requirements: "Windows 10/11, 4GB RAM, 2GB disk space"
    },
    {
      icon: <Apple className="h-8 w-8" />,
      platform: "macOS",
      version: "4.6.0",
      description: "Compatible with macOS 10.15 and later",
      downloadUrl: "#",
      requirements: "macOS 10.15+, 4GB RAM, 2GB disk space"
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      platform: "Linux",
      version: "4.6.0",
      description: "Ubuntu, CentOS, and other distributions",
      downloadUrl: "#",
      requirements: "Ubuntu 18.04+, 4GB RAM, 2GB disk space"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Download CompuCell3D</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Get the latest version of CompuCell3D for your operating system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {downloads.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 text-green-600">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">{item.platform}</h3>
                <p className="text-green-600 mb-4">{item.description}</p>
                <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Version {item.version}
                </span>
              </div>
              
              <div className="space-y-4">
                <a 
                  href={item.downloadUrl}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <DownloadIcon className="h-5 w-5" />
                  Download
                </a>
                
                <div className="text-sm text-green-600">
                  <p className="font-medium mb-1">System Requirements:</p>
                  <p>{item.requirements}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Installation Instructions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-4">Quick Start</h3>
              <ol className="space-y-3 text-green-700">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                  Download the appropriate installer for your operating system
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                  Run the installer and follow the setup wizard
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                  Launch CompuCell3D from your applications folder
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <a href="/manuals" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="font-medium text-green-900">Installation Manual</span>
                  <p className="text-sm text-green-600">Detailed installation guide</p>
                </a>
                <a href="/support" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="font-medium text-green-900">Support Forum</span>
                  <p className="text-sm text-green-600">Get help from the community</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Download;
