import { Layout } from '../../components/Layout';
import { ArrowRight } from 'lucide-react';
import analyticsImage from '../../assets/data-analytics.jpg'; // You'll need to add this image
import { useNavigate } from 'react-router-dom';

export const DataAnalytics = () => {
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
                  src={analyticsImage} 
                  alt="Data Analytics" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-8 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Data Analytics
                </h1>
                <p className="text-theme-light text-lg mb-6">
                  Unlock insights from your data with advanced analytics and machine learning algorithms.
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
                      <h3 className="text-white font-semibold mb-1">Data-Driven Decisions</h3>
                      <p className="text-theme-light">Make informed decisions based on comprehensive data analysis.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-theme-mint/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-theme-mint"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-semibold mb-1">Predictive Insights</h3>
                      <p className="text-theme-light">Anticipate trends and future outcomes with predictive analytics.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-theme-mint/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-theme-mint"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-semibold mb-1">Performance Optimization</h3>
                      <p className="text-theme-light">Optimize business performance through data-driven insights.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
                <div className="grid gap-6">
                  <div className="bg-theme-forest/30 p-6 rounded-xl border border-theme-mint/20">
                    <h3 className="text-white font-semibold mb-2">Advanced Analytics</h3>
                    <p className="text-theme-light">Sophisticated analytics tools for deep data insights.</p>
                  </div>
                  <div className="bg-theme-forest/30 p-6 rounded-xl border border-theme-mint/20">
                    <h3 className="text-white font-semibold mb-2">Predictive Modeling</h3>
                    <p className="text-theme-light">Machine learning models for accurate predictions.</p>
                  </div>
                  <div className="bg-theme-forest/30 p-6 rounded-xl border border-theme-mint/20">
                    <h3 className="text-white font-semibold mb-2">Real-time Analytics</h3>
                    <p className="text-theme-light">Live data analysis for immediate insights.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="mt-16 space-y-8">
              <div className="bg-theme-forest/30 p-8 rounded-xl border border-theme-mint/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  24/7 AI-Powered Phone Call Agent and Lead Response
                </h3>
                <p className="text-theme-light">
                  Always-on AI agents to handle real time support, customer questions, appointment booking, lead responses, and basic support.
                </p>
              </div>

              <div className="bg-theme-forest/30 p-8 rounded-xl border border-theme-mint/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Automated Appointment Scheduling
                </h3>
                <p className="text-theme-light">
                  Seamless integration with calendars to book, reschedule, and manage customer appointments without human intervention.
                </p>
              </div>

              <div className="bg-theme-forest/30 p-8 rounded-xl border border-theme-mint/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Enhanced Customer Experience
                </h3>
                <p className="text-theme-light">
                  Personalized and context-aware interactions to improve customer satisfaction and loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 