import { Layout } from '../../components/Layout';
import { ArrowRight } from 'lucide-react';
import aiImage from '../../assets/ai-integration.jpg'; // You'll need to add this image
import { useNavigate } from 'react-router-dom';

export const AIIntegration = () => {
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
                  src={aiImage} 
                  alt="AI Integration" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-8 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-white mb-4">
                  AI Integration
                </h1>
                <p className="text-theme-light text-lg mb-6">
                  Implement cutting-edge AI solutions to transform your business processes and decision-making.
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
                      <h3 className="text-white font-semibold mb-1">Enhanced Decision Making</h3>
                      <p className="text-theme-light">Leverage AI to make data-driven decisions with greater accuracy.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-theme-mint/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-theme-mint"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-semibold mb-1">Competitive Advantage</h3>
                      <p className="text-theme-light">Stay ahead of the competition with cutting-edge AI capabilities.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-theme-mint/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-theme-mint"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-semibold mb-1">Scalable Solutions</h3>
                      <p className="text-theme-light">Grow your AI capabilities alongside your business needs.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
                <div className="grid gap-6">
                  <div className="bg-theme-forest/30 p-6 rounded-xl border border-theme-mint/20">
                    <h3 className="text-white font-semibold mb-2">Machine Learning Models</h3>
                    <p className="text-theme-light">Custom ML models designed for your specific business needs.</p>
                  </div>
                  <div className="bg-theme-forest/30 p-6 rounded-xl border border-theme-mint/20">
                    <h3 className="text-white font-semibold mb-2">Natural Language Processing</h3>
                    <p className="text-theme-light">Advanced NLP capabilities for text analysis and understanding.</p>
                  </div>
                  <div className="bg-theme-forest/30 p-6 rounded-xl border border-theme-mint/20">
                    <h3 className="text-white font-semibold mb-2">Computer Vision</h3>
                    <p className="text-theme-light">Image and video analysis for enhanced visual processing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="mt-16 space-y-8">
              <div className="bg-theme-forest/30 p-8 rounded-xl border border-theme-mint/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Improved Sales Conversion
                </h3>
                <p className="text-theme-light">
                  AI tools for lead qualification or lead generation, follow-ups, and personalized sales pitches to boost conversion rates.
                </p>
              </div>

              <div className="bg-theme-forest/30 p-8 rounded-xl border border-theme-mint/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Workforce Optimization
                </h3>
                <p className="text-theme-light">
                  Automates repetitive tasks, allowing human resources to focus on high-value activities, improving overall productivity.
                </p>
              </div>

              <div className="bg-theme-forest/30 p-8 rounded-xl border border-theme-mint/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Scalability Without Additional Overhead
                </h3>
                <p className="text-theme-light">
                  AI solutions that grow with the business, handling increased customer interactions without proportional cost increases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 