export interface Property {
  id: string;
  title: string;
  price: string;
  currency: string;
  location: string;
  description: string;
  image: string;
  images?: string[];
  imageCount: number;
  type: string;
  status?: 'sale' | 'rent';
  beds?: number;
  baths?: number;
  sqft?: string;
  yearBuilt?: number;
  amenities?: string[];
  badges?: string[];
  tags: string[];
  constructionProgress?: number;
  featured?: boolean;
  hotDeal?: boolean;
  fullyFurnished?: boolean;
  underConstruction?: boolean;
}

export const exploreProperties: Property[] = [
  {
    id: '1',
    title: 'Fully Furnished 3-Bedroom House for Sale in Watamu @Ksh. 28M',
    price: '28,000,000',
    currency: 'KES',
    location: 'Watamu, Watamu, Kenya',
    description: 'Discover this beautiful fully furnished 3-bedroom home set on a spacious ¼-acre freehold plot in the sought-after coastal town of Watamu. The property is just minutes from the pristine white sandy beaches and renowned marine parks, making it an excellent choice for a private residence, a holiday home, or a lucrative Airbnb investment.\n\nThe house features a modern open-plan living area with large sliding doors that open to a lush tropical garden and private swimming pool. The master bedroom includes an en-suite bathroom with a walk-in closet, while the two guest bedrooms share a spacious family bathroom. A fully equipped kitchen with granite countertops and a separate laundry room add to the convenience.\n\nAdditional features include a covered carport for two vehicles, a borehole with a water storage tank, solar water heating, and a secure perimeter wall with an electric fence. The property is located within a well-maintained estate with 24/7 security patrols.',
    image: 'https://readdy.ai/api/search-image?query=Fully%20furnished%203%20bedroom%20coastal%20house%20exterior%20in%20Watamu%20Kenya%20modern%20open%20plan%20living%20with%20large%20sliding%20doors%20opening%20to%20lush%20tropical%20garden%20and%20private%20swimming%20pool%20white%20walls%20covered%20carport%20secure%20perimeter%20wall%20warm%20golden%20hour%20sunlight%20editorial%20real%20estate%20photography&width=800&height=600&seq=card-prop-1&orientation=landscape',
    images: [
      'https://readdy.ai/api/search-image?query=Fully%20furnished%203%20bedroom%20coastal%20house%20exterior%20in%20Watamu%20Kenya%20modern%20open%20plan%20living%20with%20large%20sliding%20doors%20opening%20to%20lush%20tropical%20garden%20and%20private%20swimming%20pool%20white%20walls%20covered%20carport%20secure%20perimeter%20wall%20warm%20golden%20hour%20sunlight%20editorial%20real%20estate%20photography&width=1200&height=800&seq=prop-1-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Spacious%20coastal%20house%20living%20room%20in%20Watamu%20Kenya%20with%20sliding%20glass%20doors%20opening%20to%20lush%20tropical%20garden%20and%20private%20pool%20warm%20natural%20light%20elegant%20wooden%20furniture%20white%20walls%20ceiling%20fan%20editorial%20real%20estate%20photography%20residential%20interior&width=1200&height=800&seq=prop-1-2&orientation=landscape&nocache=true',
      'https://readdy.ai/api/search-image?query=Coastal%20bedroom%20master%20suite%20in%20Watamu%20Kenya%20featuring%20king%20size%20bed%20with%20white%20linens%20walk%20in%20closet%20ensuite%20bathroom%20large%20window%20with%20tropical%20garden%20view%20warm%20sunlight%20wooden%20floor%20ceiling%20fan%20editorial%20real%20estate%20photography%20residential%20interior&width=1200&height=800&seq=prop-1-3&orientation=landscape&nocache=true',
    ],
    imageCount: 7,
    type: 'house',
    status: 'sale',
    beds: 3,
    baths: 2,
    sqft: '2,400',
    yearBuilt: 2019,
    amenities: ['Swimming Pool', 'Garden', 'Parking', 'Solar Water Heating', 'Borehole', 'Security Fence', 'Furnished', 'Laundry Room', 'Walk-in Closet'],
    tags: ['Maids Quarter', 'Parking', 'Large Garden'],
  },
  {
    id: '2',
    title: '8-Bedroom All-En Suite House for Sale in Watamu @Ksh. 48M',
    price: '48,000,000',
    currency: 'KES',
    location: 'Watamu, Watamu, Kenya',
    description: 'Discover an exceptional investment opportunity with this 8-bedroom all en-suite house located in Watamu, one of Kenya\'s most sought-after coastal destinations. Perfect as a luxury family home, boutique hotel, Airbnb, holiday villa, or rental investment.\n\nEach of the eight bedrooms features its own private bathroom, ensuring maximum comfort and privacy for guests. The expansive living areas include a grand reception hall, formal dining room, and multiple lounge spaces opening onto wrap-around verandas with panoramic garden views.\n\nThe property sits on a generous 1-acre plot with mature landscaping, a large swimming pool, and ample parking for up to 10 vehicles. A separate staff quarters with kitchen and bathrooms is included. The property is fully secured with perimeter wall, electric fence, and CCTV surveillance.',
    image: 'https://readdy.ai/api/search-image?query=Grand%208%20bedroom%20all%20en%20suite%20luxury%20mansion%20exterior%20in%20Watamu%20Kenya%20expansive%20one%20acre%20plot%20large%20swimming%20pool%20mature%20palm%20trees%20wrap%20around%20verandas%20white%20walls%20terracotta%20roof%20warm%20golden%20hour%20sunlight%20editorial%20real%20estate%20photography%20coastal%20estate&width=800&height=600&seq=card-prop-2&orientation=landscape',
    images: [
      'https://readdy.ai/api/search-image?query=Grand%208%20bedroom%20all%20en%20suite%20luxury%20mansion%20exterior%20in%20Watamu%20Kenya%20expansive%20one%20acre%20plot%20large%20swimming%20pool%20mature%20palm%20trees%20wrap%20around%20verandas%20white%20walls%20terracotta%20roof%20warm%20golden%20hour%20sunlight%20editorial%20real%20estate%20photography%20coastal%20estate&width=1200&height=800&seq=prop-2-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Grand%20eight%20bedroom%20luxury%20mansion%20exterior%20in%20Watamu%20Kenya%20with%20large%20swimming%20pool%20surrounded%20by%20mature%20palm%20trees%20and%20tropical%20gardens%20multiple%20wrap%20around%20verandas%20white%20walls%20terracotta%20roof%20warm%20golden%20hour%20sunlight%20editorial%20real%20estate%20photography%20coastal%20estate&width=1200&height=800&seq=prop-2-2&orientation=landscape&nocache=true',
      'https://readdy.ai/api/search-image?query=Spacious%20all%20en%20suite%20guest%20bedroom%20in%20Watamu%20Kenya%20luxury%20mansion%20king%20size%20bed%20white%20linens%20private%20bathroom%20large%20window%20overlooking%20tropical%20garden%20minimalist%20coastal%20decor%20natural%20daylight%20editorial%20real%20estate%20photography%20residential%20interior&width=1200&height=800&seq=prop-2-3&orientation=landscape&nocache=true',
    ],
    imageCount: 9,
    type: 'house',
    status: 'sale',
    beds: 8,
    baths: 8,
    sqft: '6,500',
    yearBuilt: 2017,
    amenities: ['Swimming Pool', 'Garden', 'Parking', 'Staff Quarters', 'CCTV', 'Electric Fence', 'Wrap-around Verandas', 'Multiple Lounges'],
    tags: ['Beach Access'],
  },
  {
    id: '3',
    title: '6-Bedroom Luxury Beach Villa for Sale in Watamu @KES 78M',
    price: '78,000,000',
    currency: 'KES',
    location: 'Watamu, Watamu, Kenya',
    description: 'Luxury 6-Bedroom Beach Villa for Sale in Watamu – Fully Furnished | KES 78 Million. Own a stunning 6-bedroom fully furnished villa for sale in Watamu, set on 1.25 acres of prime land just minutes from the world-famous Watamu Beach.\n\nThis architectural masterpiece features soaring ceilings, floor-to-ceiling glass walls, and hand-carved wooden accents throughout. The open-concept living space flows seamlessly into an infinity pool deck overlooking the Indian Ocean. Each bedroom suite includes a private balcony and spa-inspired bathroom with rain showers.\n\nThe gourmet kitchen is equipped with top-of-the-line appliances and a large island perfect for entertaining. A dedicated entertainment wing includes a home theater, game room, and wine cellar. The property is fully serviced with backup generator, borehole, and smart home automation.',
    image: 'https://readdy.ai/api/search-image?query=Luxury%206%20bedroom%20beachfront%20villa%20exterior%20in%20Watamu%20Kenya%20floor%20to%20ceiling%20glass%20walls%20infinity%20pool%20overlooking%20Indian%20Ocean%20palm%20trees%20hand%20carved%20wooden%20accents%20modern%20tropical%20architecture%20golden%20sunset%20light%20editorial%20real%20estate%20photography&width=800&height=600&seq=card-prop-3&orientation=landscape',
    images: [
      'https://readdy.ai/api/search-image?query=Luxury%206%20bedroom%20beachfront%20villa%20exterior%20in%20Watamu%20Kenya%20floor%20to%20ceiling%20glass%20walls%20infinity%20pool%20overlooking%20Indian%20Ocean%20palm%20trees%20hand%20carved%20wooden%20accents%20modern%20tropical%20architecture%20golden%20sunset%20light%20editorial%20real%20estate%20photography&width=1200&height=800&seq=prop-3-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Luxury%20beachfront%20villa%20in%20Watamu%20Kenya%20with%20dramatic%20infinity%20pool%20deck%20overlooking%20Indian%20Ocean%20turquoise%20water%20palm%20trees%20swaying%20outdoor%20sun%20loungers%20modern%20tropical%20architecture%20floor%20to%20ceiling%20glass%20golden%20hour%20sunset%20lighting%20editorial%20real%20estate%20photography&width=1200&height=800&seq=prop-3-2&orientation=landscape&nocache=true',
      'https://readdy.ai/api/search-image?query=Beach%20villa%20master%20bedroom%20suite%20Watamu%20Kenya%20private%20balcony%20with%20Indian%20Ocean%20view%20spa%20inspired%20ensuite%20bathroom%20rain%20shower%20freestanding%20bathtub%20natural%20stone%20warm%20sand%20tones%20hand%20carved%20wooden%20furniture%20ceiling%20fan%20editorial%20real%20estate%20photography%20luxury%20coastal%20interior&width=1200&height=800&seq=prop-3-3&orientation=landscape&nocache=true',
    ],
    imageCount: 12,
    type: 'villa',
    status: 'sale',
    beds: 6,
    baths: 6,
    sqft: '8,200',
    yearBuilt: 2021,
    amenities: ['Infinity Pool', 'Ocean View', 'Home Theater', 'Wine Cellar', 'Smart Home', 'Backup Generator', 'Borehole', 'Fully Furnished', 'Gourmet Kitchen'],
    tags: ['Beach Access', 'Large Garden'],
  },
  {
    id: '4',
    title: 'Luxury 4-Bedroom Villa for Sale in Garoda, Watamu @Ksh. 95M',
    price: '95,000,000',
    currency: 'KES',
    location: 'Garoda Area, Watamu, Watamu, Kenya',
    description: 'LUXURY 4-BEDROOM VILLA FOR SALE – WATAMU, KENYA. Own an exceptional coastal retreat in one of Kenya\'s most exclusive beach destinations. This beautifully fully furnished 4-bedroom villa sits on a 2-acre private estate, offering luxury, privacy, and an outstanding investment opportunity.\n\nThe villa features a grand double-height entrance hall, formal and informal living rooms, a dedicated dining pavilion, and a state-of-the-art kitchen with butler\'s pantry. The master suite occupies an entire wing with a private terrace, dressing room, and en-suite spa bathroom. Three additional guest suites each have private verandas and en-suite bathrooms.\n\nOutdoor amenities include a 20-meter swimming pool with a swim-up bar, a private tennis court, a rooftop observation deck, and direct beach access via a private path. The estate includes a three-car garage, staff accommodation for 4, and comprehensive security systems.',
    image: 'https://readdy.ai/api/search-image?query=Luxury%204%20bedroom%20private%20estate%20villa%20exterior%20in%20Garoda%20Watamu%20Kenya%202%20acre%20property%2020%20meter%20swimming%20pool%20with%20swim%20up%20bar%20tennis%20court%20mature%20tropical%20gardens%20palm%20trees%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20coastal%20luxury&width=800&height=600&seq=card-prop-4&orientation=landscape',
    images: [
      'https://readdy.ai/api/search-image?query=Luxury%204%20bedroom%20private%20estate%20villa%20exterior%20in%20Garoda%20Watamu%20Kenya%202%20acre%20property%2020%20meter%20swimming%20pool%20with%20swim%20up%20bar%20tennis%20court%20mature%20tropical%20gardens%20palm%20trees%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20coastal%20luxury&width=1200&height=800&seq=prop-4-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Private%20luxury%20estate%20in%20Garoda%20Watamu%20Kenya%20featuring%2020%20meter%20swimming%20pool%20with%20swim%20up%20bar%20tennis%20court%20mature%20palm%20gardens%20gated%20property%20rooftop%20observation%20deck%20warm%20afternoon%20sunlight%20coastal%20greenery%20editorial%20real%20estate%20photography&width=1200&height=800&seq=prop-4-2&orientation=landscape&nocache=true',
      'https://readdy.ai/api/search-image?query=Impressive%20double%20height%20grand%20entrance%20hall%20in%20luxury%20Watamu%20Kenya%20villa%20soaring%20ceiling%20elegant%20chandelier%20marble%20flooring%20sweeping%20staircase%20hand%20carved%20wooden%20details%20cream%20walls%20natural%20daylight%20coastal%20tropical%20architecture%20editorial%20real%20estate%20photography%20interior&width=1200&height=800&seq=prop-4-3&orientation=landscape&nocache=true',
    ],
    imageCount: 13,
    type: 'villa',
    status: 'sale',
    beds: 4,
    baths: 4,
    sqft: '7,800',
    yearBuilt: 2020,
    amenities: ['Swimming Pool', 'Tennis Court', 'Beach Access', 'Rooftop Deck', 'Staff Quarters', 'Garage', 'Private Estate', 'Fully Furnished', 'Butler\'s Pantry'],
    tags: [],
  },
  {
    id: '5',
    title: 'Luxury Villas for Sale in Galu Kinondo, Diani from @Ksh. 19.5M',
    price: '19,500,000',
    currency: 'KES',
    location: 'Galu Kinondo, Diani, Kenya',
    description: 'MAZARI VILLAS – LUXURY VILLAS FOR SALE IN DIANI, KENYA. Own a Private Coastal Paradise on Kenya\'s Award-Winning South Coast. Discover Mazari Villas, an exclusive gated community of just 13 luxury villas set on 2.7 acres in the tranquil neighborhood of Galu Kinondo, Diani.\n\nEach villa offers 3 spacious bedrooms with en-suite bathrooms, an open-plan living and dining area with modern kitchen, and a private garden with a plunge pool. The architecture blends contemporary design with coastal Swahili influences, featuring whitewashed walls, thatched roof accents, and hand-carved wooden details.\n\nThe gated community includes 24/7 security, a shared clubhouse with gym and restaurant, landscaped communal gardens, and a dedicated beach shuttle. Each villa comes with a private parking bay and is fully connected to utilities with backup systems.',
    image: 'https://readdy.ai/api/search-image?query=Mazari%20Villas%20modern%20coastal%20villa%20exterior%20in%20Galu%20Kinondo%20Diani%20Kenya%20white%20walls%20thatched%20roof%20accents%20Swahili%20architecture%20private%20plunge%20pool%20tropical%20garden%20gated%20community%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20luxury%20residential&width=800&height=600&seq=card-prop-5&orientation=landscape',
    images: [
      'https://readdy.ai/api/search-image?query=Mazari%20Villas%20modern%20coastal%20villa%20exterior%20in%20Galu%20Kinondo%20Diani%20Kenya%20white%20walls%20thatched%20roof%20accents%20Swahili%20architecture%20private%20plunge%20pool%20tropical%20garden%20gated%20community%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20luxury%20residential&width=1200&height=800&seq=prop-5-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Modern%20coastal%20villa%20in%20Diani%20Kenya%20gated%20community%20exterior%20private%20plunge%20pool%20tropical%20garden%20white%20walls%20thatched%20roof%20accents%20Swahili%20architecture%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20Mazari%20Villas%20residential&width=1200&height=800&seq=prop-5-2&orientation=landscape&nocache=true',
      'https://readdy.ai/api/search-image?query=Modern%20coastal%20villa%20open%20plan%20living%20dining%20and%20kitchen%20in%20Diani%20Kenya%20high%20ceilings%20white%20walls%20thatched%20ceiling%20accents%20contemporary%20furniture%20warm%20natural%20daylight%20large%20sliding%20doors%20to%20private%20garden%20and%20plunge%20pool%20editorial%20real%20estate%20photography%20tropical%20interior%20design&width=1200&height=800&seq=prop-5-3&orientation=landscape&nocache=true',
    ],
    imageCount: 7,
    type: 'villa',
    status: 'sale',
    beds: 3,
    baths: 3,
    sqft: '2,800',
    yearBuilt: 2024,
    amenities: ['Plunge Pool', 'Garden', '24/7 Security', 'Clubhouse', 'Gym', 'Beach Shuttle', 'Parking', 'Backup Systems'],
    tags: ['Pool', '24/7 Security', 'Parking', '+10'],
    constructionProgress: 91,
    underConstruction: true,
  },
  {
    id: '6',
    title: '4-Bedroom All Ensuite Apartment for Sale in Kilimani @Ksh. 40.2M',
    price: '40,200,000',
    currency: 'KES',
    location: 'Kilimani, Nairobi, Kenya',
    description: 'This exquisite 4-bedroom all ensuite apartment offers a luxurious lifestyle in the heart of Kilimani. Every bedroom is a private sanctuary with its own bathroom, providing ultimate comfort and convenience for residents and guests alike.\n\nThe development features a heated rooftop infinity pool with panoramic city views, a fully equipped fitness center with boxing studio and yoga zone, a private cinema room, and indoor and outdoor children\'s play areas. A 24-hour concierge and butler service ensures residents enjoy five-star hotel living at home.\n\nSmart home automation, biometric and Face ID security, high-speed internet, and private cloud servers come standard. The building includes double lift access, backup generator, and borehole water supply for uninterrupted living. A 1,500-square-meter landscaped atrium with coffee shop, minimart, and barbershop creates a vibrant community hub.',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20high%20rise%20apartment%20building%20exterior%20in%20Kilimani%20Nairobi%20Kenya%20heated%20rooftop%20infinity%20pool%20modern%20glass%20architecture%20city%20skyline%20backdrop%20palm%20trees%20warm%20golden%20evening%20light%20editorial%20real%20estate%20photography%20premium%20residential%20development&width=800&height=600&seq=card-prop-6&orientation=landscape',
    images: [
      'https://readdy.ai/api/search-image?query=Luxury%20high%20rise%20apartment%20building%20exterior%20in%20Kilimani%20Nairobi%20Kenya%20heated%20rooftop%20infinity%20pool%20modern%20glass%20architecture%20city%20skyline%20backdrop%20palm%20trees%20warm%20golden%20evening%20light%20editorial%20real%20estate%20photography%20premium%20residential%20development&width=1200&height=800&seq=prop-6-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Rooftop%20infinity%20pool%20at%20luxury%20apartment%20building%20in%20Kilimani%20Nairobi%20panoramic%20city%20skyline%20view%20heated%20water%20modern%20architecture%20sun%20loungers%20warm%20golden%20evening%20light%20editorial%20real%20estate%20photography%20premium%20residential&width=1200&height=800&seq=prop-6-2&orientation=landscape&nocache=true',
      'https://readdy.ai/api/search-image?query=Spacious%20modern%20apartment%20living%20room%20in%20Kilimani%20Nairobi%20with%20floor%20to%20ceiling%20windows%20overlooking%20city%20skyline%20contemporary%20furniture%20hardwood%20floors%20warm%20natural%20daylight%20neutral%20tones%20smart%20home%20features%20editorial%20real%20estate%20photography%20luxury%20residential%20interior&width=1200&height=800&seq=prop-6-3&orientation=landscape&nocache=true',
    ],
    imageCount: 14,
    type: 'apartment',
    status: 'sale',
    beds: 4,
    baths: 4,
    sqft: '3,200',
    yearBuilt: 2023,
    amenities: ['Infinity Pool', 'Fitness Center', 'Boxing Studio', 'Yoga Zone', 'Cinema Room', 'Children\'s Play Areas', 'Concierge', 'Butler Service', 'Smart Home', 'Biometric Security', 'Backup Generator', 'Borehole', 'Coffee Shop', 'Minimart'],
    tags: ['Gym', 'Infinity Pool', 'Heated Pool', '+10'],
  },
  {
    id: '7',
    title: '3-Bedroom Furnished Apartments for Rent in Kilimani @Ksh. 200K',
    price: '200,000',
    currency: 'KES',
    location: 'Kilimani, Nairobi, Kenya',
    description: 'These sophisticated three-bedroom apartments offer a blend of modern comfort and resort-style living in the sought-after Kilimani neighborhood. The units are tastefully furnished and feature fully equipped kitchenettes.\n\nResidents enjoy exclusive access to an outdoor swimming pool with a separate children\'s pool, landscaped tropical gardens with a terrace and picnic area, and an on-site bar and à la carte restaurant. A 24-hour front desk, concierge services, daily housekeeping, and 24-hour room service ensure a truly premium living experience.\n\nAdditional conveniences include laundry and self-serve laundry facilities, flat-screen Smart TVs with streaming services, free high-speed Wi-Fi, in-room safety boxes, and complimentary private parking. The property is wheelchair accessible and offers paid airport shuttle services.',
    image: 'https://readdy.ai/api/search-image?query=Resort%20style%20apartment%20complex%20exterior%20Natural%20Oak%20Kilimani%20Nairobi%20Kenya%20outdoor%20swimming%20pool%20children%20pool%20tropical%20landscaped%20gardens%20terrace%20sun%20loungers%20palm%20trees%20modern%20building%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20luxury%20serviced%20apartments&width=800&height=600&seq=card-prop-7&orientation=landscape',
    images: [
      'https://readdy.ai/api/search-image?query=Resort%20style%20apartment%20complex%20exterior%20Natural%20Oak%20Kilimani%20Nairobi%20Kenya%20outdoor%20swimming%20pool%20children%20pool%20tropical%20landscaped%20gardens%20terrace%20sun%20loungers%20palm%20trees%20modern%20building%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20luxury%20serviced%20apartments&width=1200&height=800&seq=prop-7-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Resort%20style%20apartment%20complex%20Natural%20Oak%20Kilimani%20Nairobi%20outdoor%20swimming%20pool%20tropical%20landscaped%20gardens%20sun%20loungers%20palm%20trees%20children%20pool%20modern%20building%20exterior%20warm%20afternoon%20light%20editorial%20real%20estate%20photography%20luxury%20residential&width=1200&height=800&seq=prop-7-2&orientation=landscape&nocache=true',
      'https://readdy.ai/api/search-image?query=Fully%20furnished%20serviced%20apartment%20living%20area%20in%20Kilimani%20Nairobi%20modern%20sofa%20and%20furniture%20flatscreen%20smart%20TV%20open%20kitchenette%20large%20windows%20warm%20natural%20daylight%20neutral%20cream%20tones%20comfortable%20resort%20style%20living%20editorial%20real%20estate%20photography%20interior&width=1200&height=800&seq=prop-7-3&orientation=landscape&nocache=true',
    ],
    imageCount: 9,
    type: 'apartment',
    status: 'rent',
    beds: 3,
    baths: 2,
    sqft: '1,800',
    yearBuilt: 2022,
    amenities: ['Swimming Pool', 'Children\'s Pool', 'Tropical Gardens', 'On-site Bar', 'Restaurant', '24/7 Concierge', 'Daily Housekeeping', 'Room Service', 'Laundry', 'Smart TV', 'Free Wi-Fi', 'Parking', 'Airport Shuttle'],
    tags: ['Pool', '24/7 Security', 'Parking', '+3'],
  },
  {
    id: '8',
    title: '5-Bedroom Townhouse for Rent in Kilimani @Ksh. 160K',
    price: '160,000',
    currency: 'KES',
    location: 'Kilimani, Nairobi, Kenya',
    description: 'This spacious five-bedroom townhouse presents a fantastic opportunity in the highly sought-after Kilimani neighborhood. Designed for comfortable family living or elegant entertaining, the property offers a blend of modern convenience and secure, serene surroundings.\n\nThe townhouse features a generous living room with fireplace, separate dining area, and a modern kitchen with pantry. All five bedrooms are well-proportioned, with the master suite boasting a walk-in closet and en-suite bathroom. A private balcony offers views over the manicured garden.\n\nThe property includes a dedicated garden space, ample parking for multiple vehicles, and a reliable water and electricity supply. Security is comprehensive with manned gates, CCTV surveillance, and perimeter fencing. A domestic staff quarters (DSQ) is also available.',
    image: 'https://readdy.ai/api/search-image?query=Elegant%205%20bedroom%20townhouse%20exterior%20in%20Kilimani%20Nairobi%20Kenya%20Masanduku%20Villas%20style%20manicured%20front%20garden%20private%20driveway%20parking%20modern%20residential%20architecture%20secure%20gated%20community%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography&width=800&height=600&seq=card-prop-8&orientation=landscape',
    images: [
      'https://readdy.ai/api/search-image?query=Elegant%205%20bedroom%20townhouse%20exterior%20in%20Kilimani%20Nairobi%20Kenya%20Masanduku%20Villas%20style%20manicured%20front%20garden%20private%20driveway%20parking%20modern%20residential%20architecture%20secure%20gated%20community%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography&width=1200&height=800&seq=prop-8-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Elegant%20townhouse%20exterior%20in%20Kilimani%20Nairobi%20Masanduku%20Villas%20style%20manicured%20front%20garden%20driveway%20parking%20modern%20residential%20architecture%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20secure%20gated%20community&width=1200&height=800&seq=prop-8-2&orientation=landscape&nocache=true',
      'https://readdy.ai/api/search-image?query=Spacious%20townhouse%20living%20room%20in%20Kilimani%20Nairobi%20with%20elegant%20fireplace%20modern%20comfortable%20furniture%20warm%20earth%20tone%20decor%20natural%20daylight%20streaming%20through%20large%20windows%20hardwood%20floors%20family%20home%20interior%20editorial%20real%20estate%20photography&width=1200&height=800&seq=prop-8-3&orientation=landscape&nocache=true',
    ],
    imageCount: 16,
    type: 'townhouse',
    status: 'rent',
    beds: 5,
    baths: 3,
    sqft: '3,600',
    yearBuilt: 2018,
    amenities: ['Garden', 'Parking', 'Manned Gates', 'CCTV', 'Pantry', 'Private Balcony', 'DSQ', 'Fireplace', 'Walk-in Closet'],
    tags: ['Garden', 'Parking', 'Manned gates', '+2'],
  },
];

export const featuredProperties: Property[] = [
  {
    id: 'f1',
    title: '4-Bedroom Townhouse for Rent in Lavington',
    price: '450,000',
    currency: 'KES',
    location: 'Lavington, Nairobi, Kenya',
    description: 'Nestled within one of Lavington\'s most secure and prestigious gated communities, this elegant 4-bedroom all en-suite townhouse offers an exceptional living experience with premium finishes throughout.\n\nThe property features a bright and spacious living room with fireplace opening to the garden, separate dining area, and a modern kitchen with ample cabinets and storage. The master bedroom includes a walk-in closet, jacuzzi shower, and private balcony. Multiple balconies are ideal for relaxation, and a dedicated office/study area adds versatility.\n\nA private landscaped garden with its own gate, DSQ for two staff, ample parking space, and a solar water heating system complete the offering. Located in a secure gated community with quiet family-friendly surroundings, this property is ideal for diplomats, expatriates, and executive families.',
    image: 'https://readdy.ai/api/search-image?query=Elegant%204%20bedroom%20all%20en%20suite%20townhouse%20exterior%20in%20Lavington%20Nairobi%20Kenya%20private%20landscaped%20garden%20mature%20trees%20gated%20community%20warm%20afternoon%20sunlight%20luxury%20residential%20editorial%20real%20estate%20photography&width=800&height=600&seq=card-feat-1&orientation=landscape',
    images: [
      'https://readdy.ai/api/search-image?query=Elegant%204%20bedroom%20all%20en%20suite%20townhouse%20exterior%20in%20Lavington%20Nairobi%20Kenya%20private%20landscaped%20garden%20mature%20trees%20gated%20community%20warm%20afternoon%20sunlight%20luxury%20residential%20editorial%20real%20estate%20photography&width=1200&height=800&seq=prop-f1-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Elegant%20gated%20community%20townhouse%20in%20Lavington%20Nairobi%20with%20private%20landscaped%20garden%20manicured%20lawn%20mature%20trees%20exclusive%20residential%20area%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20secure%20prestigious%20neighborhood&width=1200&height=800&seq=prop-f1-2&orientation=landscape&nocache=true',
      'https://readdy.ai/api/search-image?query=Expansive%20luxury%20master%20bedroom%20suite%20in%20Lavington%20Nairobi%20townhouse%20king%20bed%20walk%20in%20closet%20jacuzzi%20ensuite%20bathroom%20private%20balcony%20overlooking%20garden%20warm%20neutral%20tones%20natural%20daylight%20elegant%20decor%20editorial%20real%20estate%20photography%20residential%20interior&width=1200&height=800&seq=prop-f1-3&orientation=landscape&nocache=true',
    ],
    imageCount: 10,
    type: 'townhouse',
    status: 'rent',
    beds: 4,
    baths: 4,
    sqft: '4,200',
    yearBuilt: 2016,
    amenities: ['Fireplace', 'Garden', 'DSQ', 'Parking', 'Solar Water Heating', 'Walk-in Closet', 'Jacuzzi', 'Private Balconies', 'Office/Study', 'Gated Community'],
    tags: ['Parking', 'Garden', 'Security Room', '+3'],
    featured: true,
  },
  {
    id: 'f2',
    title: '4-Bedroom Penthouse Apartment for Rent in Kileleshwa @Ksh. 300K',
    price: '300,000',
    currency: 'KES',
    location: 'Kileleshwa, Nairobi, Kenya',
    description: 'This exquisite 4-bedroom penthouse apartment offers a luxurious and convenient lifestyle in the sought-after Kileleshwa neighborhood. It includes a DSQ (Domestic Staff Quarters), providing ample accommodation for families and guests.\n\nResidents enjoy access to a swimming pool, fitness gym, kids\' play area and crèche, a modern lobby lounge, and spacious balconies with stunning city views. High-speed service lifts, a standby generator, and a dedicated borehole ensure uninterrupted comfort.\n\nThe building features intercom access, DSTV and telephone wiring, ready fibre internet connection, CCTV surveillance, and 24-hour security guards. Two allocated parking spaces per apartment and a wheelchair-accessible entrance add to the convenience.',
    image: 'https://readdy.ai/api/search-image?query=Luxury%204%20bedroom%20penthouse%20apartment%20building%20exterior%20in%20Kileleshwa%20Nairobi%20Kenya%20wide%20balconies%20panoramic%20city%20skyline%20view%20swimming%20pool%20modern%20glass%20architecture%20warm%20golden%20evening%20sunlight%20editorial%20real%20estate%20photography%20Shaam%20Garden&width=800&height=600&seq=card-feat-2&orientation=landscape',
    images: [
      'https://readdy.ai/api/search-image?query=Luxury%204%20bedroom%20penthouse%20apartment%20building%20exterior%20in%20Kileleshwa%20Nairobi%20Kenya%20wide%20balconies%20panoramic%20city%20skyline%20view%20swimming%20pool%20modern%20glass%20architecture%20warm%20golden%20evening%20sunlight%20editorial%20real%20estate%20photography%20Shaam%20Garden&width=1200&height=800&seq=prop-f2-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Modern%20high%20rise%20penthouse%20apartment%20building%20in%20Kileleshwa%20Nairobi%20with%20wide%20balconies%20panoramic%20city%20skyline%20view%20warm%20golden%20evening%20sunlight%20editorial%20real%20estate%20photography%20premium%20residential%20architecture%20Shaam%20Garden&width=1200&height=800&seq=prop-f2-2&orientation=landscape&nocache=true',
      'https://readdy.ai/api/search-image?query=Luxury%20penthouse%20apartment%20open%20plan%20living%20and%20dining%20in%20Kileleshwa%20Nairobi%20floor%20to%20ceiling%20windows%20panoramic%20city%20skyline%20view%20modern%20upscale%20furniture%20warm%20natural%20daylight%20polished%20floors%20editorial%20real%20estate%20photography%20premium%20residential%20interior&width=1200&height=800&seq=prop-f2-3&orientation=landscape&nocache=true',
    ],
    imageCount: 16,
    type: 'apartment',
    status: 'rent',
    beds: 4,
    baths: 4,
    sqft: '3,800',
    yearBuilt: 2021,
    amenities: ['Swimming Pool', 'Fitness Gym', 'Kids\' Play Area', 'Crèche', 'Lobby Lounge', 'City View Balconies', 'High-speed Lifts', 'Backup Generator', 'Borehole', 'CCTV', '24/7 Security', 'Fibre Internet', 'Parking'],
    tags: ['Pool', 'Gym', '24/7 Security', '+5'],
    featured: true,
    hotDeal: true,
  },
  {
    id: 'f3',
    title: 'Fully Furnished 5-Bedroom Townhouse for Rent in Lavington @ USD 2,400/Month',
    price: '2,400',
    currency: 'USD',
    location: 'Riara Road, Lavington, Nairobi, Kenya',
    description: 'Fully Furnished 5-Bedroom Townhouse for Rent – Lavington | USD 2,400/Month. Experience luxury living in this fully furnished 5-bedroom all en-suite townhouse located in the prestigious neighborhood of Lavington.\n\nThe townhouse features a grand entrance hall, formal living and dining rooms, a family lounge, and a gourmet kitchen with premium appliances. All five bedrooms are en-suite, with the master featuring a dressing area and a private study nook. The property includes a private swimming pool, lush garden, and a covered outdoor entertainment area with a barbecue station.\n\nSecurity is paramount with electric fencing, CCTV, motion sensors, and a manned gate. A generator ensures power continuity, and a borehole provides reliable water. Two-car garage and additional visitor parking are included.',
    image: 'https://readdy.ai/api/search-image?query=Fully%20furnished%205%20bedroom%20luxury%20townhouse%20exterior%20in%20Lavington%20Nairobi%20Kenya%20Riara%20Road%20private%20swimming%20pool%20lush%20tropical%20garden%20covered%20BBQ%20entertainment%20area%20gourmet%20kitchen%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20prestigious%20neighborhood&width=800&height=600&seq=card-feat-3&orientation=landscape',
    images: [
      'https://readdy.ai/api/search-image?query=Fully%20furnished%205%20bedroom%20luxury%20townhouse%20exterior%20in%20Lavington%20Nairobi%20Kenya%20Riara%20Road%20private%20swimming%20pool%20lush%20tropical%20garden%20covered%20BBQ%20entertainment%20area%20gourmet%20kitchen%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20prestigious%20neighborhood&width=1200&height=800&seq=prop-f3-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Fully%20furnished%20luxury%20townhouse%20exterior%20in%20Lavington%20Nairobi%20with%20private%20swimming%20pool%20lush%20tropical%20garden%20covered%20BBQ%20entertainment%20area%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20prestigious%20Riara%20Road%20neighborhood&width=1200&height=800&seq=prop-f3-2&orientation=landscape&nocache=true',
      'https://readdy.ai/api/search-image?query=Grand%20entrance%20hall%20in%20fully%20furnished%20five%20bedroom%20Lavington%20Nairobi%20townhouse%20elegant%20chandelier%20marble%20flooring%20formal%20living%20area%20with%20fireplace%20luxurious%20furniture%20warm%20natural%20daylight%20high%20end%20interior%20editorial%20real%20estate%20photography&width=1200&height=800&seq=prop-f3-3&orientation=landscape&nocache=true',
    ],
    imageCount: 12,
    type: 'townhouse',
    status: 'rent',
    beds: 5,
    baths: 5,
    sqft: '5,000',
    yearBuilt: 2019,
    amenities: ['Swimming Pool', 'Garden', 'BBQ Area', 'Fully Furnished', 'Garage', 'Backup Generator', 'Borehole', 'CCTV', 'Electric Fence', 'Motion Sensors', 'Manned Gate', 'Gourmet Kitchen'],
    tags: ['Pool', '24/7 Security', 'Garden', '+7'],
    featured: true,
    fullyFurnished: true,
  },
  {
    id: 'f4',
    title: '1 & 2-Bedroom Apartments for Sale in Riverside Drive, Nairobi from @Ksh. 6.8M',
    price: '6,800,000',
    currency: 'KES',
    location: 'Riverside Drive, Nairobi, Kenya',
    description: 'OXFORD HOMES APARTMENTS – RIVERSIDE, NAIROBI. Oxford Homes Apartments is a premium residential development located along the prestigious Riverside Drive, offering modern 1 and 2-bedroom apartments designed for luxury, comfort, and exceptional investment value.\n\nEach apartment features an open-plan living and dining area with floor-to-ceiling windows, a modern fitted kitchen with granite countertops, and spacious bedrooms with built-in wardrobes. The master bedroom includes an en-suite bathroom with premium fixtures.\n\nThe development includes a rooftop infinity pool with city views, a fully equipped gym, a co-working lounge, and landscaped gardens. Underground parking, high-speed lifts, backup power, and 24/7 security with biometric access ensure a premium living experience. The building is 73% complete and expected to be ready for occupation in 2026.',
    image: 'https://readdy.ai/api/search-image?query=Oxford%20Homes%20modern%20apartment%20building%20exterior%20Riverside%20Drive%20Nairobi%20Kenya%20premium%20residential%20development%20under%20construction%20scaffolding%20warm%20afternoon%20sunlight%201%20and%202%20bedroom%20units%20urban%20architecture%20editorial%20real%20estate%20photography&width=800&height=600&seq=card-feat-4&orientation=landscape',
    images: [
      'https://readdy.ai/api/search-image?query=Oxford%20Homes%20modern%20apartment%20building%20exterior%20Riverside%20Drive%20Nairobi%20Kenya%20premium%20residential%20development%20under%20construction%20scaffolding%20warm%20afternoon%20sunlight%201%20and%202%20bedroom%20units%20urban%20architecture%20editorial%20real%20estate%20photography&width=1200&height=800&seq=prop-f4-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Oxford%20Homes%20apartment%20building%20under%20construction%20along%20Riverside%20Drive%20Nairobi%20premium%20residential%20development%20scaffolding%20visible%20crane%20construction%20site%20warm%20afternoon%20sunlight%20editorial%20real%20estate%20photography%20urban%20architecture%20development%20progress&width=1200&height=800&seq=prop-f4-2&orientation=landscape&nocache=true',
      'https://readdy.ai/api/search-image?query=Show%20home%20apartment%20interior%20Oxford%20Homes%20Riverside%20Drive%20Nairobi%20open%20plan%20living%20and%20modern%20kitchen%20with%20granite%20countertops%20floor%20to%20ceiling%20windows%20city%20view%20contemporary%20furniture%20warm%20neutral%20cream%20tones%20editorial%20real%20estate%20photography%20clean%20modern%20design&width=1200&height=800&seq=prop-f4-3&orientation=landscape&nocache=true',
    ],
    imageCount: 11,
    type: 'apartment',
    status: 'sale',
    beds: 2,
    baths: 2,
    sqft: '1,200',
    yearBuilt: 2026,
    amenities: ['Rooftop Infinity Pool', 'Gym', 'Co-working Lounge', 'Landscaped Gardens', 'Underground Parking', 'High-speed Lifts', 'Backup Power', 'Biometric Access', '24/7 Security', 'Granite Countertops'],
    tags: ['Gym', 'Pool', '24/7 Security', '+6'],
    featured: true,
    underConstruction: true,
    constructionProgress: 73,
  },
];

export const propertyCategories = [
  'All',
  'House',
  'Apartment',
  'Villa',
  'Townhouse',
  'Land',
  'Office',
  'Commercial Space',
  'Studio',
  'Other',
];

export const quickFilters = ['For Sale', 'For Rent', 'Apartments', 'Villas', 'Commercial'];

export const popularLocations = ['Westlands', 'Kilimani', 'Karen', 'Lavington', 'Muthaiga'];

export const primeLocations = [
  {
    name: 'Westlands',
    propertyCount: '320+',
    description: 'Premium business district with modern architecture',
    image: 'https://readdy.ai/api/search-image?query=Modern%20Nairobi%20Westlands%20cityscape%20with%20tall%20glass%20office%20buildings%20and%20residential%20towers%20at%20golden%20hour%2C%20urban%20skyline%20with%20warm%20lighting%2C%20clean%20professional%20real%20estate%20photography%2C%20warm%20neutral%20tones&width=800&height=600&seq=westlands-loc&orientation=landscape',
  },
  {
    name: 'Kileleshwa',
    propertyCount: '215+',
    description: 'Upscale residential area with green spaces',
    image: 'https://readdy.ai/api/search-image?query=Upscale%20Nairobi%20residential%20neighborhood%20with%20mature%20trees%20and%20greenery%2C%20elegant%20apartment%20buildings%20and%20townhouses%2C%20quiet%20suburban%20street%20with%20well-maintained%20gardens%2C%20warm%20natural%20lighting%2C%20professional%20real%20estate%20photography&width=800&height=600&seq=kileleshwa-loc&orientation=landscape',
  },
  {
    name: 'Kilimani',
    propertyCount: '180+',
    description: 'Coastal paradise with beachfront luxury',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20Nairobi%20Kilimani%20neighborhood%20aerial%20view%20showing%20modern%20apartments%20and%20palm%20trees%2C%20upscale%20urban%20residential%20area%2C%20warm%20golden%20sunlight%2C%20clean%20professional%20real%20estate%20photography%2C%20tropical%20greenery&width=800&height=600&seq=kilimani-loc&orientation=landscape',
  },
  {
    name: 'Lavington',
    propertyCount: '290+',
    description: 'Exclusive residential community near conservation area',
    image: 'https://readdy.ai/api/search-image?query=Exclusive%20Nairobi%20Lavington%20gated%20community%20with%20luxury%20homes%20and%20manicured%20lawns%2C%20tree-lined%20streets%20with%20elegant%20residential%20properties%2C%20warm%20afternoon%20lighting%2C%20professional%20real%20estate%20photography%2C%20serene%20suburban%20atmosphere&width=800&height=600&seq=lavington-loc&orientation=landscape',
  },
];

export const testimonials = [
  {
    id: 't1',
    name: 'Esther Chebet',
    role: 'Property Investor',
    image: 'https://picsum.photos/60/60?random=30',
    text: 'Kenya Classics found me the perfect investment property. Their team was professional, transparent, and efficient throughout the entire process.',
  },
  {
    id: 't2',
    name: 'James Kipchoge',
    role: 'Business Owner',
    image: 'https://picsum.photos/60/60?random=31',
    text: 'Outstanding service from start to finish. They understand the market and provided valuable insights that helped me make the right decision.',
  },
  {
    id: 't3',
    name: 'Amelia Kariuki',
    role: 'First-time Buyer',
    image: 'https://picsum.photos/60/60?random=32',
    text: 'As a first-time buyer, I felt overwhelmed. The team at Kenya Classics guided me patiently and made the process smooth and enjoyable.',
  },
];

export const stats = [
  { value: '500+', label: 'Properties Listed', icon: 'ri-building-line' },
  { value: '1,500+', label: 'Happy Clients', icon: 'ri-user-smile-line' },
  { value: '9.5%', label: 'Avg. ROI', icon: 'ri-line-chart-line' },
  { value: '4+', label: 'Industry Awards', icon: 'ri-award-line' },
];

export const whyChooseFeatures = [
  {
    title: 'Verified Properties',
    description: 'Every property undergoes rigorous verification and quality checks before listing',
    icon: 'ri-shield-check-line',
  },
  {
    title: 'Lightning Fast Process',
    description: 'Complete transactions in weeks, not months with our streamlined process',
    icon: 'ri-flashlight-line',
  },
  {
    title: 'Legal Protection',
    description: 'Full legal compliance and comprehensive documentation for peace of mind',
    icon: 'ri-file-shield-line',
  },
  {
    title: 'Expert Guidance',
    description: 'Dedicated property consultants to guide you through every step',
    icon: 'ri-customer-service-2-line',
  },
];