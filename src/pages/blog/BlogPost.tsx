import { Layout } from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BlogPost = () => {
  const navigate = useNavigate();

  // This would typically come from your backend/database
  const post = {
    title: 'The Future of AI in Business Operations',
    date: 'March 15, 2024',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <h2>The Impact of AI</h2>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2>Looking Ahead</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    `,
  };

  return (
    <Layout>
      <div className="min-h-screen pt-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center text-zinc-400 hover:text-white mb-8
                     transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </button>

          {/* Blog Post Content */}
          <article>
            <h1 className="text-4xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-zinc-400 mb-8">{post.date}</p>
            
            <div 
              className="prose prose-invert prose-zinc max-w-none
                       prose-headings:text-white prose-p:text-zinc-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </Layout>
  );
}; 