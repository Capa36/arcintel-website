import { Layout } from '../../components/Layout';

export const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-emerald-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-emerald max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">1. Information We Collect</h2>
              <p className="text-emerald-700">
                At ARCINTEL AI, we collect information to provide better services to our users. The types of information we collect include:
              </p>
              <ul className="list-disc pl-6 text-emerald-700 mt-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Business information (company name, industry, size)</li>
                <li>Usage data (how you interact with our services)</li>
                <li>Technical data (IP address, browser type, device information)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-emerald-700">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-emerald-700 mt-4">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">3. Data Security</h2>
              <p className="text-emerald-700">
                The security of your data is important to us. We implement appropriate security measures to protect 
                against unauthorized access, alteration, disclosure, or destruction of your personal information. 
                However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">4. Third-Party Services</h2>
              <p className="text-emerald-700">
                We may employ third-party companies and individuals to facilitate our services, provide services 
                on our behalf, perform service-related tasks, or assist us in analyzing how our services are used. 
                These third parties have access to your personal information only to perform these tasks on our 
                behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">5. Your Rights</h2>
              <p className="text-emerald-700">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-emerald-700 mt-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">6. Contact Us</h2>
              <p className="text-emerald-700">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-emerald-700 mt-4">
                Email: <a href="mailto:chris@arcintel.ai" className="text-emerald-600 hover:text-emerald-500">chris@arcintel.ai</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 