import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  serviceType: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    serviceType: 'process-automation'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-theme-dark flex items-center justify-center py-20">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get Started with AI Automation</h1>
          <p className="text-theme-light text-lg">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-theme-forest/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-theme-mint/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-theme-mint/20 text-white 
                         focus:outline-none focus:ring-2 focus:ring-theme-mint/50 focus:border-transparent
                         placeholder-white/50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-theme-mint/20 text-white 
                         focus:outline-none focus:ring-2 focus:ring-theme-mint/50 focus:border-transparent
                         placeholder-white/50"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-white font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-theme-mint/20 text-white 
                         focus:outline-none focus:ring-2 focus:ring-theme-mint/50 focus:border-transparent
                         placeholder-white/50"
                placeholder="Company Inc."
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-theme-mint/20 text-white 
                         focus:outline-none focus:ring-2 focus:ring-theme-mint/50 focus:border-transparent
                         placeholder-white/50"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-white font-medium mb-2">
              Service Type *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-theme-mint/20 text-white 
                       focus:outline-none focus:ring-2 focus:ring-theme-mint/50 focus:border-transparent
                       [&>option]:bg-theme-dark [&>option]:text-white"
            >
              <option value="process-automation" className="bg-theme-dark text-white">Process Automation</option>
              <option value="ai-integration" className="bg-theme-dark text-white">AI Integration</option>
              <option value="data-analytics" className="bg-theme-dark text-white">Data Analytics</option>
              <option value="other" className="bg-theme-dark text-white">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-theme-mint/20 text-white 
                       focus:outline-none focus:ring-2 focus:ring-theme-mint/50 focus:border-transparent
                       placeholder-white/50 resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-theme-mint text-theme-dark rounded-lg font-semibold 
                       hover:bg-theme-light transition-all duration-300 
                       flex items-center space-x-2 shadow-lg shadow-theme-mint/30"
            >
              <span>Submit</span>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 