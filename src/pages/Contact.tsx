import { Layout } from '../components/Layout';
import { useState, ChangeEvent } from 'react';
import { supabase } from '../lib/supabaseClient';

const BUDGET_RANGES = [
  'Select budget range',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
  'Other'
];

const services = [
  {
    id: 'industry-specific',
    name: 'Industry Specific',
    description: 'Tailored AI solutions for your specific industry'
  },
  {
    id: 'workflow-optimization',
    name: 'Workflow Optimization',
    description: 'Streamline and automate your business processes'
  },
  {
    id: 'customer-engagement',
    name: 'Customer Engagement Systems',
    description: 'AI-powered solutions to enhance customer interactions'
  },
  {
    id: 'other',
    name: 'Other',
    description: 'Custom solutions for your unique needs'
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: 'Select budget range',
    services: 'Select service',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            budget: formData.budget,
            services: formData.services,
            message: formData.message,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      setFormData({ 
        name: '', 
        email: '', 
        budget: 'Select budget range', 
        services: 'Select service', 
        message: '' 
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen pt-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Contact Us
          </h1>
          <p className="text-zinc-300 text-lg text-center mb-12">
            Get in touch with our team of AI specialists
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-zinc-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 
                         text-white focus:outline-none focus:border-theme-mint
                         transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 
                         text-white focus:outline-none focus:border-theme-mint
                         transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-zinc-300 mb-2">
                What is your budget?
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 
                         text-white focus:outline-none focus:border-theme-mint
                         transition-colors"
              >
                {BUDGET_RANGES.map((range) => (
                  <option 
                    key={range} 
                    value={range}
                    disabled={range === 'Select budget range'}
                    className={range === 'Select budget range' ? 'text-zinc-500' : 'text-white'}
                  >
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="services" className="block text-zinc-300 mb-2">
                What services are you interested in?
              </label>
              <select
                id="services"
                name="services"
                value={formData.services}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 
                         text-white focus:outline-none focus:border-theme-mint
                         transition-colors"
              >
                {services.map((service) => (
                  <option 
                    key={service.id} 
                    value={service.id}
                    className="text-white"
                  >
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-zinc-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 
                         text-white focus:outline-none focus:border-theme-mint
                         transition-colors resize-none"
                placeholder="Tell us more about your project..."
              />
            </div>

            {submitStatus.type && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-900/50 border border-green-500 text-green-200'
                  : 'bg-red-900/50 border border-red-500 text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 bg-theme-mint text-zinc-900 rounded-lg font-semibold
                       hover:bg-theme-mint/90 transition-colors
                       disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}; 