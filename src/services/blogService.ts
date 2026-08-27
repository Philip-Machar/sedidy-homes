// File: src/services/blogService.ts
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, query, orderBy, where, serverTimestamp, increment } from 'firebase/firestore';
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
    views: 0, // Initialize real view counter
    createdAt: serverTimestamp(),
    timestamp: Date.now(),
  });
  return docRef.id;
}

export async function updateBlogPost(id: string, blogData: any): Promise<void> {
  const docRef = doc(db, BLOGS_COLLECTION, id);
  await updateDoc(docRef, {
    ...blogData,
    updatedAt: serverTimestamp(),
  });
}

export async function incrementBlogView(id: string): Promise<void> {
  // Only increment real Firebase documents, not the hardcoded mock data
  if (!id.startsWith('b')) {
    const docRef = doc(db, BLOGS_COLLECTION, id);
    await updateDoc(docRef, { views: increment(1) });
  }
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

    const formattedMocks = initialMockBlogs.map(mock => ({ ...mock, status: 'published', timestamp: new Date(mock.date).getTime(), views: 0 }));
    
    return [...firestoreBlogs, ...formattedMocks].sort((a, b) => b.timestamp - a.timestamp);
  } catch (error) {
    console.error('Error fetching blogs from Firebase:', error);
    return initialMockBlogs.map(mock => ({ ...mock, status: 'published', timestamp: new Date(mock.date).getTime(), views: 0 }));
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
  return initialMockBlogs.find((p) => p.slug === slug) || null;
}

export async function fetchBlogPostById(id: string): Promise<any | null> {
  try {
    const docSnap = await getDoc(doc(db, BLOGS_COLLECTION, id));
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
  }
  return initialMockBlogs.find((p) => p.id === id) || null;
}

export async function deleteBlogPost(id: string): Promise<void> {
  if (!id.startsWith('b')) {
    const docRef = doc(db, BLOGS_COLLECTION, id);
    await deleteDoc(docRef);
  }
}