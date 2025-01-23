import { Layout } from '../../components/Layout';
import specialist1 from '../../assets/specialist1.jpg';
import specialist2 from '../../assets/specialist2.jpg';
import specialist3 from '../../assets/specialist3.jpg';
import leadSpecialist from '../../assets/lead-specialist.jpg';

export const AISpecialists = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-20 bg-zinc-900">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Meet Our AI Specialists
          </h1>
          <p className="text-zinc-300 text-lg text-center mb-16">
            Expert team dedicated to transforming businesses through AI innovation
          </p>

          {/* Team Members Section */}
          <div className="mb-24">
            {/* Team Photos Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Specialist 1 */}
              <div className="flex flex-col items-center">
                <div className="w-full h-80 rounded-lg overflow-hidden mb-4 shadow-xl 
                              border border-zinc-700 hover:border-zinc-500 transition-colors">
                  <img 
                    src={specialist1}
                    alt="AI Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Specialist 2 */}
              <div className="flex flex-col items-center">
                <div className="w-full h-80 rounded-lg overflow-hidden mb-4 shadow-xl 
                              border border-zinc-700 hover:border-zinc-500 transition-colors">
                  <img 
                    src={specialist2}
                    alt="Michael Torres - NLP Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">Chris Capezzuto</h3>
                <p className="text-zinc-400">AI AUTOMATION DEVELOPER</p>
              </div>

              {/* Specialist 3 */}
              <div className="flex flex-col items-center">
                <div className="w-full h-80 rounded-lg overflow-hidden mb-4 shadow-xl 
                              border border-zinc-700 hover:border-zinc-500 transition-colors">
                  <img 
                    src={specialist3}
                    alt="AI Specialist"
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
              </div>
            </div>

            {/* Team Description */}
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-zinc-300 text-lg leading-relaxed">
                Led by Chris Capezzuto, a Bachelor of Science in Engineering with a deep passion 
                for AI technologies, our team specializes in developing intelligent automation solutions. 
                Chris's expertise lies in identifying and streamlining complex business workflows through 
                innovative AI implementations. His engineering background, combined with a forward-thinking 
                approach to AI integration, enables our team to deliver customized solutions that transform 
                business operations and drive efficiency.
              </p>
            </div>
          </div>

          {/* Lead Specialist Section */}
          <div className="flex flex-col items-center bg-zinc-800/50 rounded-2xl p-12">
            <div className="w-72 h-72 rounded-full overflow-hidden mb-6 shadow-xl border-4 border-zinc-600">
              <img 
                src={leadSpecialist}
                alt="Meghan - AI Assistant Specialist"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Meghan</h2>
            <p className="text-xl text-zinc-300 mb-2">
              AI Assistant Specialist
            </p>
            <p className="text-zinc-400 text-center max-w-2xl mb-6">
              Meet Meghan, our dedicated AI voice assistant, designed to provide seamless communication 
              and support throughout your project journey. Available 24/7, Meghan ensures you have 
              real-time access to project updates, milestone tracking, and instant responses to your 
              queries. Her advanced AI capabilities allow her to understand context, provide detailed 
              project insights, and maintain consistent communication between our team and yours.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-zinc-700/50 rounded-lg border border-zinc-600">
                <span className="text-zinc-300">24/7 Availability</span>
              </div>
              <div className="px-4 py-2 bg-zinc-700/50 rounded-lg border border-zinc-600">
                <span className="text-zinc-300">Real-time Updates</span>
              </div>
              <div className="px-4 py-2 bg-zinc-700/50 rounded-lg border border-zinc-600">
                <span className="text-zinc-300">Project Insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 