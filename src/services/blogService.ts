// File: src/services/blogService.ts
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, query, orderBy, where, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { blogPosts as initialMockBlogs } from '@/mocks/siteData';

const BLOGS_COLLECTION = 'blogPosts';

export async function uploadBlogImageToStorage(file: File): Promise<string> {
  const fileExtension = file.name.split('.').pop();
  const fileName = `blogs/${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExtension}`;
  const storageRef = ref(storage, fileName);
  
  const uploadResult = await uploadBytes(storageRef, file);
  return await getDownloadURL(uploadResult.ref);
}

export async function createBlogPost(blogData: any): Promise<string> {
  const docRef = await addDoc(collection(db, BLOGS_COLLECTION), {
    ...blogData,
    createdAt: serverTimestamp(),
    timestamp: Date.now(), // Fallback for reliable client-side sorting
  });
  return docRef.id;
}

export async function fetchAllBlogPosts(status: 'published' | 'draft' | 'all' = 'all'): Promise<any[]> {
  try {
    const q = query(collection(db, BLOGS_COLLECTION), orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);

    let firestoreBlogs = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));

    if (status !== 'all') {
      firestoreBlogs = firestoreBlogs.filter((p: any) => p.status === status);
    }

    // Append mock data for UI completeness if needed, but mark them as published
    const formattedMocks = initialMockBlogs.map(mock => ({ ...mock, status: 'published', timestamp: new Date(mock.date).getTime() }));
    
    return [...firestoreBlogs, ...formattedMocks].sort((a, b) => b.timestamp - a.timestamp);
  } catch (error) {
    console.error('Error fetching blogs from Firebase:', error);
    return initialMockBlogs.map(mock => ({ ...mock, status: 'published', timestamp: new Date(mock.date).getTime() }));
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<any | null> {
  try {
    const q = query(collection(db, BLOGS_COLLECTION), where('slug', '==', slug));
    const snapshot = await getDocs(q);
    
    if (!snapshot.empty) {
      const docSnap = snapshot.docs[0];
      return { id: docSnap.id, ...docSnap.data() };
    }
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
  }

  // Fallback to mock data
  const fallback = initialMockBlogs.find((p) => p.slug === slug);
  return fallback || null;
}

export async function deleteBlogPost(id: string): Promise<void> {
  // If it's a mock data ID (e.g. 'b1'), we can't delete it from Firestore
  if (!id.startsWith('b')) {
    const docRef = doc(db, BLOGS_COLLECTION, id);
    await deleteDoc(docRef);
  }
}