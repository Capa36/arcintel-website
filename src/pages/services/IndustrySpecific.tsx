import { Layout } from '../../components/Layout';
import { ArrowRight, GraduationCap, Building, MessageSquare, Shield, Zap, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const IndustrySpecific = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education and Training",
      description: "AI-powered learning and administration",
      hoverContent: "Transform education with personalized learning experiences, automated administrative tasks, and AI-driven tutoring systems."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Small and Medium Businesses (SMBs)",
      description: "Affordable AI automation solutions",
      hoverContent: "Empower SMBs with cost-effective AI solutions for customer service, marketing automation, and operational efficiency."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Customer Support Automation",
      description: "24/7 AI-powered customer service",
      hoverContent: "Enhance customer support with AI chatbots, virtual assistants, and automated ticketing systems for improved response times."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Industry Compliance",
      description: "Built-in regulatory compliance for your sector",
      stats: "100% compliant"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Integration",
      description: "Seamless integration with existing systems",
      stats: "2x faster setup"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Performance Boost",
      description: "Significant improvement in operational efficiency",
      stats: "45% increase"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-20 bg-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-emerald-900 mb-6">
              Industry Specific Solutions
            </h1>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Tailored AI solutions designed for your industry's unique challenges
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