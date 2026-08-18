import { collection, addDoc, getDocs, getDoc, doc, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { exploreProperties as initialMockProperties, type Property } from '@/mocks/properties';

const PROPERTIES_COLLECTION = 'properties';

/**
 * Upload an image file to Firebase Storage and retrieve the public download URL.
 */
export async function uploadImageToStorage(file: File): Promise<string> {
  const fileExtension = file.name.split('.').pop();
  const fileName = `properties/${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExtension}`;
  const storageRef = ref(storage, fileName);
  
  const uploadResult = await uploadBytes(storageRef, file);
  return await getDownloadURL(uploadResult.ref);
}

/**
 * Save a new property listing to Firestore.
 */
export async function createProperty(propertyData: Omit<Property, 'id'>): Promise<string> {
  const docRef = await addDoc(collection(db, PROPERTIES_COLLECTION), {
    ...propertyData,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

/**
 * Fetch all properties from Firestore, falling back to mock properties if the database is empty.
 */
export async function fetchAllProperties(): Promise<Property[]> {
  try {
    const q = query(collection(db, PROPERTIES_COLLECTION), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);

    const firestoreProperties: Property[] = snapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        title: data.title,
        price: data.price,
        currency: data.currency || 'KES',
        location: data.location,
        description: data.description,
        image: data.image,
        images: data.images || [data.image],
        imageCount: data.imageCount || 1,
        type: data.type,
        status: data.status,
        beds: data.beds,
        baths: data.baths,
        sqft: data.sqft,
        yearBuilt: data.yearBuilt,
        amenities: data.amenities || [],
        tags: data.tags || [],
        hotDeal: data.hotDeal,
        fullyFurnished: data.fullyFurnished,
        underConstruction: data.underConstruction,
        constructionProgress: data.constructionProgress,
      } as Property;
    });

    // Combine Firestore properties with initial mock listings
    return [...firestoreProperties, ...initialMockProperties];
  } catch (error) {
    console.error('Error fetching properties from Firebase:', error);
    return initialMockProperties;
  }
}

/**
 * Fetch a single property by ID.
 */
export async function fetchPropertyById(id: string): Promise<Property | null> {
  try {
    const docSnap = await getDoc(doc(db, PROPERTIES_COLLECTION, id));
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
      } as Property;
    }
  } catch (error) {
    console.error('Error fetching property by ID:', error);
  }

  // Fallback to searching the initial mock data
  const fallback = initialMockProperties.find((p) => p.id === id);
  return fallback || null;
}