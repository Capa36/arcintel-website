import { Layout } from '../../components/Layout';
import { ArrowRight, Workflow, Settings, Clock, Target, BarChart, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const WorkflowOptimization = () => {
  const navigate = useNavigate();
  const { elementRef, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Smart Workflow Design",
      description: "Intelligent process mapping and optimization",
      hoverContent: "Our AI analyzes your existing workflows and suggests optimizations based on efficiency metrics and industry best practices."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Real-time workflow monitoring",
      hoverContent: "Track and analyze workflow performance with comprehensive dashboards and actionable insights."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Processes",
      description: "Streamline repetitive tasks with AI",
      hoverContent: "Implement intelligent automation for routine tasks, reducing manual effort while maintaining accuracy and consistency."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Savings",
      description: "Reduce manual processing time significantly",
      stats: "70% time saved"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Improved Accuracy",
      description: "Minimize errors with automated validation",
      stats: "99.9% accuracy"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Enhanced Efficiency",
      description: "Streamline operations with intelligent automation",
      stats: "85% efficiency gain"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-20 bg-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-emerald-900 mb-6">
              Workflow Optimization
            </h1>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Transform your business processes with AI-powered workflow optimization
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-emerald-50 to-white rounded-xl p-8
                         border-2 border-emerald-200 hover:border-emerald-300
                         transform hover:-translate-y-1 transition-all duration-300
                         hover:shadow-xl hover:shadow-emerald-200/50"
              >
                <div className="text-emerald-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">{feature.title}</h3>
                <p className="text-emerald-700">{feature.description}</p>
                
                {/* Hover Content */}
                <div className="absolute inset-0 bg-emerald-900/95 rounded-xl p-6 opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  <p className="text-white">{feature.hoverContent}</p>
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