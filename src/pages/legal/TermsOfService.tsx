import { Layout } from '../../components/Layout';

export const TermsOfService = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-emerald-900 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-emerald max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">1. Introduction</h2>
              <p className="text-emerald-700">
                Welcome to ARCINTEL AI. These Terms of Service govern your access to and use of our website and services. 
                By accessing or using our Services, you agree to be bound by these Terms, including any additional terms and conditions that may apply. 
                If you do not agree with these Terms, please do not use our Services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">2. Services Provided</h2>
              <p className="text-emerald-700">
                ARCINTEL AI provides autonomous agent development, enterprise consulting, chatbot development, and AI integration services. 
                These Services are subject to the Terms outlined in this document.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">3. Changes to Terms</h2>
              <p className="text-emerald-700">
                We reserve the right to update or modify these Terms at any time. Any changes to these Terms will be posted on this page, 
                and we will update the "Last Revised" date at the top of this page. Your continued use of our Services after such changes 
                constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">4. Account Registration and Use</h2>
              <p className="text-emerald-700">
                To access certain features of our Services, you may be required to create an account. You agree to provide accurate, 
                current, and complete information during the registration process and to update such information to keep it accurate, 
                current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for 
                all activities under your account.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">5. Privacy Policy</h2>
              <p className="text-emerald-700">
                Your use of our Services is also governed by our Privacy Policy, which outlines how we collect, use, and protect 
                your personal information. Please review our Privacy Policy to understand our practices. By using our Services, 
                you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">6. User Conduct</h2>
              <p className="text-emerald-700 mb-4">
                You agree to use the Services only for lawful purposes and in a manner that does not infringe the rights of others. 
                You are prohibited from using the Services to:
              </p>
              <ul className="list-disc pl-6 text-emerald-700">
                <li>Engage in any illegal, fraudulent, or harmful activities</li>
                <li>Attempt to access or disrupt our Services in an unauthorized manner</li>
                <li>Violate any intellectual property rights or engage in harassment</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">7. Intellectual Property</h2>
              <p className="text-emerald-700">
                All content and materials provided as part of the Services, including but not limited to text, images, logos, 
                and software, are the intellectual property of ARCINTEL AI or its licensors. You are granted a limited, 
                non-exclusive, non-transferable license to use the Services for personal or business purposes as outlined 
                in these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">8. Governing Law</h2>
              <p className="text-emerald-700">
                These Terms will be governed by and construed in accordance with the laws of the United States, 
                without regard to its conflict of law provisions. Any disputes arising from these Terms will be 
                resolved in the competent court to us.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">9. Changes to Service</h2>
              <p className="text-emerald-700">
                We reserve the right to modify or discontinue the Services, or any part thereof, at any time, 
                with or without notice. We are not liable for any modifications, suspension, or discontinuance 
                of the Services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">10. Contact Information</h2>
              <p className="text-emerald-700">
                If you have any questions or concerns regarding these Terms, please contact us at:
              </p>
              <p className="text-emerald-700 mt-4">
                Email: <a href="mailto:chris@arcintel.ai" className="text-emerald-600 hover:text-emerald-500">chris@arcintel.ai</a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">11. Entire Agreement</h2>
              <p className="text-emerald-700">
                These Terms, along with our Privacy Policy and any other legal notices or agreements published 
                by us on the website, constitute the entire agreement between you and ARCINTEL AI concerning 
                the use of the Services.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 