import { Layout } from '../../components/Layout';
import { ArrowRight } from 'lucide-react';
import automationImage from '../../assets/process-automation.jpg'; // You'll need to add this image
import { useNavigate } from 'react-router-dom';

export const ProcessAutomation = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen pt-20 bg-emerald-900/30">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-emerald-800/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="relative h-[400px]">
                <img 
                  src={automationImage} 
                  alt="Process Automation" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-8 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Process Automation
                </h1>
                <p className="text-theme-light text-lg mb-6">
                  Transform your business operations with intelligent automation solutions that reduce costs and improve efficiency.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center px-6 py-3 bg-theme-mint text-theme-dark rounded-lg font-semibold hover:bg-theme-light transition-all duration-300 w-fit"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Section */}
        <div className="bg-theme-dark py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-theme-mint/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-theme-mint"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-semibold mb-1">Increased Efficiency</h3>
                      <p className="text-theme-light">Automate repetitive tasks and workflows to save time and reduce errors.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-theme-mint/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-theme-mint"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-semibold mb-1">Cost Reduction</h3>
                      <p className="text-theme-light">Lower operational costs through streamlined processes and reduced manual intervention.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-theme-mint/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-theme-mint"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-semibold mb-1">Improved Accuracy</h3>
                      <p className="text-theme-light">Minimize human error and ensure consistent results through automated processes.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
                <div className="grid gap-6">
                  <div className="bg-theme-forest/30 p-6 rounded-xl border border-theme-mint/20">
                    <h3 className="text-white font-semibold mb-2">Workflow Automation</h3>
                    <p className="text-theme-light">Design and implement automated workflows that streamline your business processes.</p>
                  </div>
                  <div className="bg-theme-forest/30 p-6 rounded-xl border border-theme-mint/20">
                    <h3 className="text-white font-semibold mb-2">Intelligent Document Processing</h3>
                    <p className="text-theme-light">Extract and process information from documents automatically using AI.</p>
                  </div>
                  <div className="bg-theme-forest/30 p-6 rounded-xl border border-theme-mint/20">
                    <h3 className="text-white font-semibold mb-2">Process Analytics</h3>
                    <p className="text-theme-light">Gain insights into your automated processes with detailed analytics and reporting.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="mt-16 space-y-8">
              <div className="bg-theme-forest/30 p-8 rounded-xl border border-theme-mint/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Comprehensive AI Integration Process
                </h3>
                <p className="text-theme-light">
                  End-to-end support for businesses integrating AI into their workflows, including strategy development, deployment, and ongoing optimization.
                </p>
              </div>

              <div className="bg-theme-forest/30 p-8 rounded-xl border border-theme-mint/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Scalability Without Additional Overhead
                </h3>
                <p className="text-theme-light">
                  Ensures that the AI solutions implemented are scalable, adaptable, and cost-effective as the business grows.
                </p>
              </div>

              <div className="bg-theme-forest/30 p-8 rounded-xl border border-theme-mint/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Enhanced Customer Experience
                </h3>
                <p className="text-theme-light">
                  Tailored AI implementations designed to provide superior customer interactions across various touchpoints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 