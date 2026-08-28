// File: src/pages/admin/Dashboard.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const adminModules = [
    {
      category: 'Property Portfolio',
      items: [
        { title: 'Upload Property', desc: 'Add a new listing to the catalog', icon: 'ri-upload-cloud-2-line', path: '/admin/upload-property', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
        { title: 'Manage Listings', desc: 'Edit or remove active properties', icon: 'ri-building-4-line', path: '/admin/manage-listings', color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
        { title: 'Review Pending', desc: 'Approve user-submitted listings', icon: 'ri-checkbox-multiple-line', path: '/admin/review-listings', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
      ]
    },
    {
      category: 'Editorial & Content',
      items: [
        { title: 'Blog Dashboard', desc: 'Manage articles, drafts, and views', icon: 'ri-article-line', path: '/admin/blog', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10' },
        { title: 'Write Article', desc: 'Draft a new insights piece', icon: 'ri-quill-pen-line', path: '/admin/write-blog', color: 'text-fuchsia-500', bg: 'bg-fuchsia-50 dark:bg-fuchsia-500/10' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background-50 flex flex-col">
      <Navbar />
      <div className="h-16 md:h-20" />

      {/* Admin Hero */}
      <section className="relative overflow-hidden bg-primary-950 py-16 md:py-24">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3 py-1 bg-white/10 text-white/90 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full mb-4 backdrop-blur-md">
            Command Center
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Admin <span className="italic text-primary-400 font-light">Portal</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto font-light">
            Manage your high-end property portfolio and editorial content from one unified interface.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 md:py-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {adminModules.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground-950">{section.category}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => navigate(item.path)}
                      className="group flex flex-col items-start p-8 bg-white dark:bg-card rounded-[2rem] border border-black/5 dark:border-white/5 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-left"
                    >
                      <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <i className={`${item.icon} ${item.color} text-2xl`} />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground-950 mb-2 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground-500 font-light leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300">
                        Access Module <i className="ri-arrow-right-line" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}