// File: src/pages/blog/PostPage.tsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { fetchBlogPostBySlug } from '@/services/blogService';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      if (!slug) return;
      const data = await fetchBlogPostBySlug(slug);
      if (data) {
        setPost(data);
      } else {
        navigate('/blog');
      }
      setLoading(false);
    }
    loadPost();
  }, [slug, navigate]);

  if (loading || !post) {
    return (
      <div className="min-h-screen bg-background-50 flex items-center justify-center">
        <i className="ri-loader-4-line animate-spin text-4xl text-primary-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <div className="h-16 md:h-20" />

      <section className="relative overflow-hidden bg-black py-32 md:py-48">
        <div className="absolute inset-0 overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-black/50 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full backdrop-blur-md">
              {post.category}
            </span>
            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
              {post.date}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 md:text-white mb-6 tracking-tight leading-[1.15] drop-shadow-lg">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute -top-32 left-4 md:left-0 z-20">
            <button onClick={() => navigate('/blog')} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white border border-white/20 flex items-center justify-center text-white hover:text-foreground-950 backdrop-blur-md transition-all shadow-lg group">
              <i className="ri-arrow-left-line text-xl group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="prose prose-lg md:prose-xl max-w-none text-foreground-600 font-light leading-relaxed prose-headings:font-heading prose-headings:font-bold prose-headings:text-foreground-950 prose-a:text-primary-600">
            <p className="text-xl md:text-2xl text-foreground-800 leading-relaxed font-medium mb-12">
              <span className="float-left text-7xl font-heading font-bold text-primary-500 leading-[0.8] pr-4 pt-2">
                {post.excerpt.charAt(0)}
              </span>
              {post.excerpt.slice(1)}
            </p>

            {post.content ? (
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }} 
                className="[&>h1]:text-4xl [&>h1]:font-heading [&>h1]:font-bold [&>h1]:mt-10 [&>h1]:mb-6 [&>h2]:text-3xl [&>h2]:font-heading [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:mb-8"
              />
            ) : (
              <p>Content unavailable.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}