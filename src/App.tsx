import { useState } from 'react';
import { ArrowRight, Building2, ChevronRight, Brain, Cpu, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import backgroundPicture from './assets/backgroundpicture.jpg';
import { useParallax } from './hooks/useParallax';
import { TypewriterText } from './components/TypewriterText';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import picture1 from './assets/markets/picture1.jpg';
import picture2 from './assets/markets/picture2.jpg';
import picture3 from './assets/markets/picture3.jpg';
import picture4 from './assets/markets/picture4.jpg';

function App() {
  const scrollOffset = useParallax();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerView = 3; // Number of cards visible at once

  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Industry Specific",
      description: "Tailored AI solutions designed for your industry's unique challenges and requirements.",
      path: "/services/industry-specific"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Workflow Optimization",
      description: "Streamline and enhance your business processes with intelligent automation solutions.",
      path: "/services/workflow-optimization"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Customer Engagement Systems",
      description: "Transform your customer interactions with AI-powered engagement solutions.",
      path: "/services/customer-engagement"
    }
  ];

  const markets = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Education and Training",
      description: "Educational institutions and training providers can use AI to automate administrative tasks, create personalized learning experiences, or even develop AI-driven tutoring systems. Offering tailored solutions to e-learning platforms or schools could have a significant impact.",
      image: picture1
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Human Resources Automation",
      description: "Human resource departments are increasingly looking for ways to automate recruiting, payroll, onboarding, and performance management. AI solutions that automate these processes can save time, reduce human error, and improve employee experience.",
      image: picture2
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Customer Support Automation",
      description: "Offering AI-driven customer service solutions, such as chatbots, virtual assistants, and ticketing systems, can help companies of all sizes provide 24/7 support, improve response times, and reduce operational costs.",
      image: picture3
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Small and Medium Businesses (SMBs)",
      description: "Many SMBs are seeking automation to improve efficiency but may lack the resources to implement it themselves. Offering affordable, tailored AI solutions (e.g., customer service chatbots, automated marketing, inventory management, etc.) can be a huge value proposition.",
      image: picture4
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev + 1 >= markets.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? markets.length - 1 : prev - 1
    );
  };

  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Background Image with Parallax - Move it to cover whole page */}
        <div className="fixed inset-0 w-full h-full"
             style={{ 
               backgroundImage: `url(${backgroundPicture})`,
               backgroundSize: '100% auto',
               backgroundPosition: 'top center',
               backgroundRepeat: 'no-repeat',
               transform: `translateY(${scrollOffset}px) scale(1.1)`,
               transition: 'transform 0.1s ease-out',
               zIndex: -1
             }} />

        {/* Header Section */}
        <header className="relative h-screen">
          {/* Hero Section */}
          <div className="relative z-10 py-32 md:py-44">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
                <TypewriterText text="AI Is The Future." speed={100} />
                <br />
                <TypewriterText text="Don't Be Left Behind." speed={100} />
              </h1>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-theme-sage text-white border-2 border-theme-sage/30 
                         px-8 py-3 rounded-lg font-semibold 
                         hover:bg-theme-mint hover:border-transparent 
                         transition-all duration-300 
                         inline-flex items-center
                         drop-shadow-lg
                         mb-6">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <p className="text-2xl tracking-wide font-bold drop-shadow-lg">
                <span className="text-theme-sage">TRANSFORM YOUR WORKFLOWS</span>
                {" "}
                <span className="text-theme-light">WITH ADVANCED AI SOLUTIONS</span>
              </p>
            </div>
          </div>
        </header>

        {/* Introduction Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Introduction */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full 
                                bg-gradient-to-br from-emerald-100 to-emerald-200 
                                shadow-lg shadow-emerald-200/50
                                transform hover:scale-110 transition-all duration-200">
                    <div className="text-2xl">⚡</div>
                  </div>
                  <h2 className="text-4xl font-bold text-emerald-900">Leverage AI to Accelerate Your Business Growth</h2>
                </div>
                
                <p className="text-emerald-700 leading-relaxed">
                  AI is not a luxury; it's an essential tool that will give your business the competitive edge it needs. 
                  It's time to stop relying on outdated systems and leverage AI to scale faster, smarter, and more efficiently.
                </p>
                
                <div className="space-y-6">
                  <h4 className="text-xl text-emerald-600 font-semibold">Here's what AI can do for you:</h4>
                  <ul className="space-y-4 text-emerald-700">
                    <li className="flex items-start space-x-3">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>
                        <span className="font-semibold">Automate to Scale:</span>
                        <span> Stop wasting time on low-value tasks. AI frees up your resources so your team can focus on what truly moves the needle.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>
                        <span className="font-semibold">Data-Driven Strategy:</span>
                        <span> You have data. AI extracts value from that data, giving you insights that turn into actionable strategies and informed decisions.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>
                        <span className="font-semibold">Customer-Centric:</span>
                        <span> AI enables personalized experiences—whether through smart chatbots or predictive recommendations, giving your customers exactly what they need, when they need it.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>
                        <span className="font-semibold">Predict and Prepare:</span>
                        <span> AI helps you anticipate market shifts, customer behavior, and operational needs before they happen. This isn't just about reacting; it's about staying ahead.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Professional */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full 
                                bg-gradient-to-br from-emerald-100 to-emerald-200 
                                shadow-lg shadow-emerald-200/50
                                transform hover:scale-110 transition-all duration-200">
                    <div className="text-2xl">🤖</div>
                  </div>
                  <h2 className="text-4xl font-bold text-emerald-900">Supercharge Your Business with AI</h2>
                </div>
                
                <p className="text-emerald-700 leading-relaxed">
                  What if your business could run faster, more efficiently, and with greater accuracy? 
                  AI makes that a reality.
                </p>

                <div className="space-y-6">
                  <h4 className="text-xl text-emerald-600 font-semibold">Here's how it can transform your operations:</h4>
                  <ul className="space-y-4 text-emerald-700">
                    <li className="flex items-start space-x-3">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>
                        <span className="font-semibold">Streamline Operations:</span>
                        <span> AI takes care of the routine. It automates your processes, cutting down inefficiencies and boosting productivity.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>
                        <span className="font-semibold">Intelligent Marketing:</span>
                        <span> AI doesn't just help you target your audience; it predicts what they want, how they'll respond, and when they'll convert, all at scale.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>
                        <span className="font-semibold">Maximize Resources:</span>
                        <span> Optimize your supply chain, staffing, and resource allocation with AI-driven insights, ensuring you're never running on empty.</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>
                        <span className="font-semibold">Innovate Relentlessly:</span>
                        <span> AI isn't just about improving what you have—it unlocks new pathways for growth, helping you create products, services, and strategies that keep your business ahead of the curve.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Track Record Section - Centered Below Cards */}
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h4 className="text-2xl text-emerald-900 font-bold">Our Track Record</h4>
              <div className="grid grid-cols-3 gap-12">
                <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border-2 border-emerald-200 shadow-lg">
                  <div className="text-4xl font-bold text-emerald-500 mb-2">98%</div>
                  <div className="text-emerald-700 font-medium">CLIENT RETENTION</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border-2 border-emerald-200 shadow-lg">
                  <div className="text-4xl font-bold text-emerald-500 mb-2">24/7</div>
                  <div className="text-emerald-700 font-medium">SUPPORT</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border-2 border-emerald-200 shadow-lg">
                  <div className="text-4xl font-bold text-emerald-500 mb-2">500+</div>
                  <div className="text-emerald-700 font-medium">PROJECTS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section - Now with white background */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-emerald-900">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const { elementRef, isVisible } = useScrollAnimation();
                return (
                  <div 
                    key={index} 
                    ref={elementRef}
                    className={`transform transition-all duration-700 ${
                      isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-20 opacity-0'
                    }`}
                  >
                    <a href={service.path} className="block">
                      <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-xl 
                                    shadow-lg border-2 border-emerald-200
                                    hover:shadow-2xl hover:-translate-y-1 
                                    transition-all duration-300">
                        <div className="text-emerald-500 mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-emerald-900">{service.title}</h3>
                        <p className="text-emerald-700">{service.description}</p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Markets Section */}
        <div id="markets-section" className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-emerald-900 mb-16">Markets We Serve</h2>
            
            <div className="relative overflow-hidden mb-8">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)`,
                  width: `${(markets.length / cardsPerView) * 100}%`
                }}
              >
                {markets.map((market, index) => {
                  const { elementRef, isVisible } = useScrollAnimation();
                  return (
                    <div 
                      key={index}
                      className="w-full px-4"
                      style={{ flex: `0 0 ${100 / markets.length}%` }}
                    >
                      <div 
                        ref={elementRef}
                        className={`transform transition-all duration-700 ${
                          isVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-20 opacity-0'
                        }`}
                      >
                        <div className="group relative bg-gradient-to-br from-emerald-50 to-white 
                                     rounded-xl overflow-hidden shadow-lg border-2 border-emerald-200
                                     hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                          {/* Image Container */}
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={market.image} 
                              alt={market.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          
                          {/* Content Container */}
                          <div className="p-8">
                            <div className="text-emerald-500 mb-4">{market.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-emerald-900">{market.title}</h3>
                            <p className="text-emerald-700 text-sm leading-relaxed">{market.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevSlide}
                className="p-3 bg-emerald-500 text-white rounded-full
                         hover:bg-emerald-600 transition-all duration-200
                         shadow-lg shadow-emerald-200/50
                         hover:shadow-emerald-200/70 hover:-translate-y-0.5
                         group"
              >
                <ChevronRight className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform rotate-180" />
              </button>

              <button
                onClick={nextSlide}
                className="p-3 bg-emerald-500 text-white rounded-full
                         hover:bg-emerald-600 transition-all duration-200
                         shadow-lg shadow-emerald-200/50
                         hover:shadow-emerald-200/70 hover:-translate-y-0.5
                         group"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section remains white but updated with green accents */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-emerald-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-emerald-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can help you achieve your business goals.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold
                       hover:bg-emerald-600 transition-colors shadow-lg
                       hover:shadow-emerald-200/50"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;