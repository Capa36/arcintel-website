import { Layout } from '../../components/Layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogImage1 from '../../assets/blog/1/blog1.jpg';
import blogImage2 from '../../assets/blog/2/blog2.jpg';
import blogImage3 from '../../assets/blog/3/blog3.jpg';

// This would typically come from your backend/database
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business Operations',
    summary: 'Explore how artificial intelligence is transforming business operations and what it means for the future of work.',
    image: blogImage1,
    date: 'March 15, 2024',
    slug: 'future-of-ai-business-operations'
  },
  {
    id: 2,
    title: 'Machine Learning: A Game Changer for Data Analytics',
    summary: 'Discover how machine learning algorithms are revolutionizing the way businesses analyze and utilize their data.',
    image: blogImage2,
    date: 'March 10, 2024',
    slug: 'machine-learning-data-analytics'
  },
  {
    id: 3,
    title: 'Implementing AI Solutions: Best Practices',
    summary: 'Learn the key strategies and best practices for successfully implementing AI solutions in your organization.',
    image: blogImage3,
    date: 'March 5, 2024',
    slug: 'implementing-ai-solutions'
  },
  // More posts would be added here
];

export const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(3);
  const navigate = useNavigate();

  const handleShowMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  return (
    <Layout>
      <div className="min-h-screen pt-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Latest Insights
          </h1>
          <p className="text-zinc-300 text-lg text-center mb-16">
            Stay updated with the latest trends and insights in AI and automation
          </p>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(0, visiblePosts).map((post) => (
              <div 
                key={post.id}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="bg-zinc-800/50 rounded-xl overflow-hidden cursor-pointer
                         transform transition-all duration-300 hover:-translate-y-1
                         border border-zinc-700/50 hover:border-zinc-600"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300
                             hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-zinc-400 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-zinc-300">
                    {post.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {visiblePosts < blogPosts.length && (
            <div className="text-center">
              <button
                onClick={handleShowMore}
                className="px-8 py-3 bg-zinc-800 text-white rounded-lg
                         hover:bg-zinc-700 transition-colors
                         border border-zinc-700 hover:border-zinc-600"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}; 