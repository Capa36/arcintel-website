import { Layout } from '../../components/Layout';
import { ArrowRight, Users, MessageSquare, BarChart, Brain, Zap, LineChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const CustomerEngagement = () => {
  const navigate = useNavigate();
  const { elementRef, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "24/7 Intelligent Support",
      description: "AI-powered chatbots that learn and improve with each interaction",
      hoverContent: "Our AI assistants handle customer inquiries round the clock, learning from each interaction to provide increasingly accurate and helpful responses."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart Personalization",
      description: "Tailored customer experiences based on AI insights",
      hoverContent: "Leverage machine learning to understand customer preferences and behavior patterns, delivering personalized recommendations and interactions."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Real-time insights into customer engagement metrics",
      hoverContent: "Monitor customer satisfaction, response times, and engagement patterns through our comprehensive analytics dashboard."
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Enhanced Customer Experience",
      description: "Deliver seamless, personalized interactions across all channels",
      stats: "95% satisfaction rate"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Increased Efficiency",
      description: "Automate routine tasks while maintaining a personal touch",
      stats: "60% faster response time"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Data-Driven Growth",
      description: "Make informed decisions based on customer insights",
      stats: "40% increase in engagement"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-20 bg-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-emerald-900 mb-6">
              Customer Engagement Systems
            </h1>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Transform your customer interactions with AI-powered engagement solutions
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-emerald-50 to-white 
                         rounded-xl p-6 border-2 border-emerald-200
                         hover:shadow-xl hover:shadow-emerald-200/50 
                         transition-all duration-300"
              >
                <div className="text-emerald-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">{feature.title}</h3>
                <p className="text-emerald-700">{feature.description}</p>
                
                {/* Hover Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-700 
                              rounded-xl p-6 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center 
                              justify-center text-white text-center">
                  {feature.hoverContent}
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-8
                         border-2 border-emerald-200 
                         transform hover:-translate-y-1 transition-all duration-300
                         hover:shadow-xl hover:shadow-emerald-200/50"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                    {benefit.icon}
                  </div>
                  <div className="text-2xl font-bold text-emerald-600">{benefit.stats}</div>
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">{benefit.title}</h3>
                <p className="text-emerald-700">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold text-lg
                       hover:bg-emerald-600 transition-all duration-300 
                       shadow-lg hover:shadow-emerald-200/50
                       transform hover:-translate-y-1"
            >
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 