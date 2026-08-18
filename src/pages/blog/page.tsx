import { useState, useMemo } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { blogPosts } from '@/mocks/siteData';

const categories = ['All', 'Market Insights', 'Guides', 'Investment', 'Tips', 'News'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = useMemo(() => {
    let result = [...blogPosts];

    if (activeCategory !== 'All') {
      result = result.filter((post) => post.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const visible = rest.slice(0, visibleCount);
  const hasMore = visibleCount < rest.length;

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: blogPosts.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = blogPosts.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <div className="h-16 md:h-20" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-500 py-20 md:py-28">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/90 text-[11px] font-medium rounded-full mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
              Insights &amp; Real Estate News
            </h1>
            <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Stay informed with the latest market trends, expert tips, and industry news from Kenya&apos;s leading real estate professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featured && (
        <section className="py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-foreground-950 mb-6 flex items-center gap-2">
              <i className="ri-fire-line text-accent-500" />
              Featured Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* First featured */}
              <a
                href={`/blog/${featured.slug}`}
                className="block group bg-card rounded-2xl overflow-hidden border border-background-200 hover:border-background-200/80 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden bg-background-100">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary-500 text-white text-[11px] font-semibold rounded-full uppercase tracking-wide">
                    Featured
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-medium text-primary-600 bg-primary-100 px-2 py-0.5 rounded">
                      {featured.category}
                    </span>
                    <span className="text-[11px] text-foreground-400 flex items-center gap-1">
                      <i className="ri-calendar-line" />
                      {featured.date}
                    </span>
                    <span className="text-[11px] text-foreground-400 flex items-center gap-1">
                      <i className="ri-time-line" />
                      {featured.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground-950 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {featured.title}
                  </h3>
                  <p className="text-sm text-foreground-500 leading-relaxed line-clamp-2 mb-4">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={featured.authorAvatar}
                        alt={featured.author}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span className="text-[11px] text-foreground-500">{featured.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-foreground-500 group-hover:text-primary-600 transition-colors text-sm font-medium">
                      <span>Read More</span>
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Second featured */}
              {rest[0] && (
                <a
                  href={`/blog/${rest[0].slug}`}
                  className="block group bg-card rounded-2xl overflow-hidden border border-background-200 hover:border-background-200/80 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden bg-background-100">
                    <img
                      src={rest[0].image}
                      alt={rest[0].title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary-500 text-white text-[11px] font-semibold rounded-full uppercase tracking-wide">
                      Featured
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-medium text-primary-600 bg-primary-100 px-2 py-0.5 rounded">
                        {rest[0].category}
                      </span>
                      <span className="text-[11px] text-foreground-400 flex items-center gap-1">
                        <i className="ri-calendar-line" />
                        {rest[0].date}
                      </span>
                      <span className="text-[11px] text-foreground-400 flex items-center gap-1">
                        <i className="ri-time-line" />
                        {rest[0].readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground-950 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {rest[0].title}
                    </h3>
                    <p className="text-sm text-foreground-500 leading-relaxed line-clamp-2 mb-4">
                      {rest[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={rest[0].authorAvatar}
                          alt={rest[0].author}
                          className="w-7 h-7 rounded-full object-cover"
                        />
                        <span className="text-[11px] text-foreground-500">{rest[0].author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-foreground-500 group-hover:text-primary-600 transition-colors text-sm font-medium">
                        <span>Read More</span>
                        <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Search & Filters */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-5">
            <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-foreground-400 text-sm" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-background-200 bg-card text-foreground-950 placeholder:text-foreground-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white'
                    : 'bg-background-100 text-foreground-500 hover:text-foreground-950 hover:bg-background-200 border border-background-200'
                }`}
              >
                {cat} {cat !== 'All' && <span className="opacity-70">({categoryCounts[cat] || 0})</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-6 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block group bg-card rounded-2xl overflow-hidden border border-background-200 hover:border-background-200/80 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-background-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-medium text-primary-600 bg-primary-100 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-foreground-400 flex items-center gap-1">
                      <i className="ri-time-line" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground-950 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors text-[15px] leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-foreground-500 leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-background-200/50">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-[11px] text-foreground-500">{post.author}</span>
                    </div>
                    <span className="text-[11px] text-foreground-400">{post.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((c) => c + 3)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-background-200 text-foreground-700 font-semibold text-sm hover:bg-background-100 transition-colors"
              >
                Load More Articles
                <i className="ri-arrow-down-line" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-primary-500 px-8 py-12 md:px-16 md:py-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-white/70 mb-6 text-sm md:text-base">
                Get the latest real estate insights, market updates, and exclusive content delivered directly to your inbox.
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-white text-primary-700 font-semibold text-sm hover:bg-background-50 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}