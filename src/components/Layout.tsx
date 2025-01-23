import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Brain, ChevronDown, Mail, Phone, Menu, X } from 'lucide-react';
import backgroundPicture2 from '../assets/backgroundpicture2.jpg';

const navItemStyles = `
  relative px-4 py-2 text-white rounded-lg 
  transition-all duration-200
  after:absolute after:bottom-0 after:left-0 after:h-[2px] 
  after:w-full after:origin-bottom-right after:scale-x-0 
  after:bg-[#8A2BE2] after:transition-transform after:duration-200 
  hover:text-[#8A2BE2] hover:after:origin-bottom-left hover:after:scale-x-100
  hover:bg-[#8A2BE2]/10 hover:shadow-[0_0_15px_rgba(138,43,226,0.5)]
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToMarkets = () => {
    if (location.pathname !== '/') {
      navigate('/?scrollTo=markets');
      return;
    }
    
    const marketsSection = document.getElementById('markets-section');
    if (marketsSection) {
      marketsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = {
    services: [
      { name: 'Industry Specific', path: '/services/industry-specific' },
      { name: 'Workflow Optimization', path: '/services/workflow-optimization' },
      { name: 'Customer Engagement Systems', path: '/services/customer-engagement' }
    ],
    insights: [
      { name: 'Blog', path: '/blog' }
    ],
    team: [{ name: 'AI Specialists', path: '/team/ai-specialists' }]
  };

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-theme-dark/95 backdrop-blur-sm shadow-lg shadow-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-white hover:text-theme-mint transition-colors">
                ARCINTEL AI
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white hover:text-theme-mint transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1" ref={dropdownRef}>
              {/* Markets Button */}
              <button
                onClick={scrollToMarkets}
                className={navItemStyles}
              >
                Markets
              </button>

              {/* Rest of the navigation items */}
              {Object.entries(navItems).map(([key, items]) => (
                <div 
                  key={key} 
                  className="relative group"
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`${navItemStyles} flex items-center
                               ${activeDropdown === key ? 'text-[#8A2BE2] bg-[#8A2BE2]/10 shadow-[0_0_15px_rgba(138,43,226,0.5)]' : ''}`}
                    onMouseEnter={() => setActiveDropdown(key)}
                  >
                    <span className="font-medium">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 ml-1 transition-transform duration-200 
                                ${activeDropdown === key ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <div className="absolute w-full h-4 bg-transparent" />
                  
                  <div
                    className={`absolute left-0 w-56 rounded-xl shadow-lg 
                              bg-theme-dark/95 backdrop-blur-lg border border-[#8A2BE2]/20
                              transition-all duration-200 origin-top-left
                              ${activeDropdown === key 
                                ? 'opacity-100 translate-y-0 visible' 
                                : 'opacity-0 -translate-y-2 invisible'}`}
                  >
                    <div className="py-2">
                      {items.map((item, index) => (
                        <a
                          key={typeof item === 'string' ? item : item.name}
                          href={typeof item === 'string' ? '#' : item.path}
                          className={`
                            block px-4 py-3 text-sm text-white/90
                            hover:bg-[#8A2BE2]/20 hover:text-white
                            transition-all duration-150 
                            first:rounded-t-xl last:rounded-b-xl
                            relative
                            ${index !== 0 ? 'border-t border-[#8A2BE2]/10' : ''}
                          `}
                        >
                          <span className="relative z-10">
                            {typeof item === 'string' ? item : item.name}
                          </span>
                          <div className="absolute inset-0 hover:bg-[#8A2BE2]/20 transition-colors rounded-lg" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              <button 
                onClick={() => navigate('/contact')}
                className="ml-4 px-6 py-2 bg-[#8A2BE2] text-white rounded-lg font-medium 
                         hover:bg-[#9D4EDD] transition-all duration-200 
                         shadow-lg shadow-[#8A2BE2]/30
                         hover:shadow-[0_0_20px_rgba(138,43,226,0.6)]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="relative text-white">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-theme-dark"
             style={{ 
               backgroundImage: `url(${backgroundPicture2})`,
               backgroundSize: '100% auto',
               backgroundPosition: 'top',
               backgroundAttachment: 'fixed',
               opacity: 0.9
             }} />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <span className="text-xl font-bold">ARCINTEL AI</span>
              </div>
              <p className="text-gray-200">
                Transforming businesses through AI automation
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>chris@arcintel.ai</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>603-519-1403</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/legal/terms" className="hover:text-theme-mint transition-colors">Terms & Conditions</a></li>
                <li><a href="/legal/privacy" className="hover:text-theme-mint transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}; 