// File: src/pages/admin/WriteBlogPage.tsx
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBlogPost, uploadBlogImageToStorage } from '@/services/blogService';

export default function WriteBlogPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Market Insights');
  const [excerpt, setExcerpt] = useState('');
  const [status, setStatus] = useState('Draft');
  
  // Image state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const editorRef = useRef<HTMLDivElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const executeCommand = (command: string, arg?: string) => {
    document.execCommand(command, false, arg);
    editorRef.current?.focus();
  };

  const handleLink = () => {
    const selection = window.getSelection();
    const range = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    const url = prompt('Enter the full URL (e.g., https://google.com):');
    if (url && range) {
      selection?.removeAllRanges();
      selection?.addRange(range);
      executeCommand('createLink', url);
    }
  };

  const validatePost = () => {
    if (!title.trim()) { alert("Please provide an article title."); return false; }
    if (!excerpt.trim()) { alert("Please provide a short excerpt."); return false; }
    const content = editorRef.current?.innerHTML || '';
    if (!content.trim() || content === '<br>') { alert("Please write some content."); return false; }
    return content;
  };

  const savePostToFirebase = async (postStatus: 'draft' | 'published') => {
    const content = validatePost();
    if (!content) return;

    setStatus(postStatus === 'draft' ? 'Saving Draft...' : 'Publishing...');
    
    try {
      let imageUrl = 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=2070&auto=format&fit=crop';
      if (selectedFile) {
        imageUrl = await uploadBlogImageToStorage(selectedFile);
      }

      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

      await createBlogPost({
        slug,
        title,
        excerpt,
        category,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: '3 min read', 
        image: imageUrl,
        author: 'Peter Njoroge', // You can hook this up to your Firebase Auth later
        authorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop',
        content,
        status: postStatus
      });

      setStatus(postStatus === 'draft' ? 'Draft Saved' : 'Published');
      setTimeout(() => navigate('/admin/blog'), 1500);
    } catch (error) {
      console.error("Error saving post", error);
      setStatus('Error saving post');
      alert("Failed to save. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-background-50">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-card/80 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/admin/blog')} className="w-10 h-10 rounded-full bg-background-50 hover:bg-background-100 flex items-center justify-center transition-colors text-foreground-500">
            <i className="ri-arrow-left-line text-xl" />
          </button>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-primary-500">Admin Dashboard</span>
            <span className="block text-sm font-bold text-foreground-950">Create Editorial Post</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-foreground-400 mr-4 hidden sm:inline">{status}</span>
          <button onClick={() => savePostToFirebase('draft')} disabled={status.includes('ing...')} className="px-6 py-2.5 rounded-full bg-background-100 text-foreground-950 text-[11px] font-bold uppercase tracking-widest hover:bg-background-200 transition-colors shadow-sm disabled:opacity-50">
            Save Draft
          </button>
          <button onClick={() => savePostToFirebase('published')} disabled={status.includes('ing...')} className="px-6 py-2.5 rounded-full bg-primary-500 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-primary-600 transition-colors shadow-md disabled:opacity-50">
            Publish Post
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div onClick={() => fileInputRef.current?.click()} className="relative w-full h-64 md:h-80 rounded-[2rem] border-2 border-dashed border-black/10 dark:border-white/10 bg-white dark:bg-card flex flex-col items-center justify-center text-foreground-400 hover:bg-background-50 hover:border-primary-300 transition-all cursor-pointer group mb-10 overflow-hidden shadow-sm">
          {previewUrl ? (
            <>
              <img src={previewUrl} alt="Cover Preview" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 text-white"><i className="ri-image-edit-line text-3xl" /></div>
                <span className="text-sm font-bold text-white tracking-wide">Change Cover Image</span>
              </div>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-background-50 dark:bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:text-primary-500 transition-all"><i className="ri-image-add-line text-3xl" /></div>
              <span className="text-sm font-bold text-foreground-950">Upload Cover Image</span>
              <span className="text-xs mt-2 font-light">High resolution, landscape orientation recommended</span>
            </>
          )}
          <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2">
            <label className="block text-[11px] uppercase tracking-widest font-bold text-foreground-600 mb-2 pl-2">Article Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. The Future of Luxury Real Estate" className="w-full px-5 py-4 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-card text-foreground-950 font-heading text-xl focus:outline-none focus:ring-2 focus:ring-primary-400 shadow-sm" />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-widest font-bold text-foreground-600 mb-2 pl-2">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-5 py-4 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-card text-foreground-950 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 shadow-sm appearance-none">
              <option>Market Insights</option><option>Guides</option><option>Investment</option><option>Tips</option><option>News</option>
            </select>
          </div>
        </div>

        <div className="mb-10">
          <label className="block text-[11px] uppercase tracking-widest font-bold text-foreground-600 mb-2 pl-2">Short Excerpt</label>
          <textarea rows={3} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Write a compelling summary..." className="w-full px-5 py-4 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-card text-foreground-950 text-base font-light focus:outline-none focus:ring-2 focus:ring-primary-400 shadow-sm resize-none" />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2 mb-4 bg-white dark:bg-card p-2 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm w-max sticky top-[5.5rem] z-40">
            <button onMouseDown={(e) => { e.preventDefault(); executeCommand('bold'); }} className="w-10 h-10 rounded-xl hover:bg-background-50 flex items-center justify-center text-foreground-600 transition-colors" title="Bold"><i className="ri-bold" /></button>
            <button onMouseDown={(e) => { e.preventDefault(); executeCommand('italic'); }} className="w-10 h-10 rounded-xl hover:bg-background-50 flex items-center justify-center text-foreground-600 transition-colors" title="Italic"><i className="ri-italic" /></button>
            <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-2" />
            <button onMouseDown={(e) => { e.preventDefault(); executeCommand('formatBlock', '<h1>'); }} className="w-10 h-10 rounded-xl hover:bg-background-50 flex items-center justify-center text-foreground-600 transition-colors font-bold text-sm" title="Heading 1">H1</button>
            <button onMouseDown={(e) => { e.preventDefault(); executeCommand('formatBlock', '<h2>'); }} className="w-10 h-10 rounded-xl hover:bg-background-50 flex items-center justify-center text-foreground-600 transition-colors font-bold text-sm" title="Heading 2">H2</button>
            <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-2" />
            <button onMouseDown={(e) => { e.preventDefault(); executeCommand('insertUnorderedList'); }} className="w-10 h-10 rounded-xl hover:bg-background-50 flex items-center justify-center text-foreground-600 transition-colors" title="Bullet List"><i className="ri-list-unordered" /></button>
            <button onMouseDown={(e) => { e.preventDefault(); handleLink(); }} className="w-10 h-10 rounded-xl hover:bg-background-50 flex items-center justify-center text-foreground-600 transition-colors" title="Insert Link"><i className="ri-link" /></button>
            <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-2" />
            <button onMouseDown={(e) => { e.preventDefault(); executeCommand('removeFormat'); }} className="w-10 h-10 rounded-xl hover:bg-background-50 flex items-center justify-center text-foreground-600 transition-colors" title="Clear Formatting"><i className="ri-format-clear" /></button>
          </div>
          
          <div ref={editorRef} contentEditable suppressContentEditableWarning className="prose prose-lg md:prose-xl max-w-none w-full min-h-[400px] px-8 py-6 rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-card text-foreground-950 font-light leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary-400 shadow-sm empty:before:content-[attr(data-placeholder)] empty:before:text-foreground-300" data-placeholder="Start writing your article here..." />
        </div>
      </main>
    </div>
  );
}