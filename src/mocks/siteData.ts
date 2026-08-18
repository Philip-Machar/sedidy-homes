export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  author: string;
  authorAvatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Office {
  city: string;
  address: string;
  phone: string;
  email: string;
  isHQ: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: '2024 Real Estate Market Trends in Kenya: What to Expect',
    excerpt: 'An in-depth analysis of the Kenyan real estate market outlook for 2024, including key trends, investment opportunities, and market predictions.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20luxury%20apartment%20building%20in%20Nairobi%20Kilimani%20neighborhood%20at%20sunset%2C%20contemporary%20architecture%20with%20glass%20balconies%20and%20warm%20lighting%2C%20clean%20urban%20photography%20style%2C%20warm%20golden%20tones&width=800&height=500&seq=blog-kilimani-01&orientation=landscape',
    category: 'Market Insights',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    slug: 'real-estate-market-trends-kenya-2024',
    author: 'James Kariuki',
    authorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20businessman%20in%20his%2030s%20wearing%20a%20dark%20suit%20with%20a%20subtle%20smile%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=100&height=100&seq=avatar-james-01&orientation=squarish',
  },
  {
    id: 'b2',
    title: 'First-Time Homebuyer\'s Guide: Everything You Need to Know',
    excerpt: 'A comprehensive guide for first-time buyers covering financing, legal requirements, and tips for finding your perfect home in Kenya.',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20tropical%20beachfront%20villa%20in%20Watamu%20Kenya%20with%20white%20sandy%20beach%20and%20turquoise%20ocean%2C%20palm%20trees%20and%20thatched%20roof%20architecture%2C%20warm%20golden%20hour%20lighting%2C%20professional%20real%20estate%20photography&width=800&height=500&seq=blog-watamu-01&orientation=landscape',
    category: 'Guides',
    date: 'Jan 10, 2024',
    readTime: '12 min read',
    slug: 'first-time-homebuyers-guide-kenya',
    author: 'Grace Wanjiku',
    authorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20businesswoman%20in%20her%2030s%20wearing%20an%20elegant%20emerald%20green%20blazer%20with%20a%20confident%20smile%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=100&height=100&seq=avatar-grace-01&orientation=squarish',
  },
  {
    id: 'b3',
    title: 'Top 5 Emerging Neighborhoods in Nairobi for Investment',
    excerpt: 'Discover the hottest upcoming areas in Nairobi that offer great potential for property investment and long-term value appreciation.',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20modern%20apartment%20rooftop%20infinity%20pool%20in%20Nairobi%20at%20dusk%20with%20city%20skyline%20views%2C%20elegant%20poolside%20lounge%20furniture%2C%20warm%20ambient%20lighting%2C%20professional%20architectural%20photography%2C%20clean%20composition&width=800&height=500&seq=blog-amenities-01&orientation=landscape',
    category: 'Investment',
    date: 'Jan 5, 2024',
    readTime: '6 min read',
    slug: 'top-emerging-neighborhoods-nairobi-investment',
    author: 'David Ochieng',
    authorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20man%20in%20his%20late%2030s%20wearing%20a%20charcoal%20gray%20suit%20and%20glasses%20with%20a%20friendly%20expression%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=100&height=100&seq=avatar-david-01&orientation=squarish',
  },
  {
    id: 'b4',
    title: 'Understanding Property Valuation in Kenya',
    excerpt: 'Learn how property valuation works, factors that affect property value, and how to get an accurate valuation for your real estate assets.',
    image: 'https://readdy.ai/api/search-image?query=Aerial%20view%20of%20Diani%20Beach%20Kenya%20with%20white%20sand%20beach%20and%20turquoise%20Indian%20Ocean%2C%20luxury%20beachfront%20resorts%20and%20villas%2C%20lush%20tropical%20coastline%2C%20warm%20natural%20lighting%2C%20professional%20drone%20photography%20style&width=800&height=500&seq=blog-diani-01&orientation=landscape',
    category: 'Guides',
    date: 'Dec 28, 2023',
    readTime: '7 min read',
    slug: 'understanding-property-valuation-kenya',
    author: 'Amina Hassan',
    authorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20businesswoman%20in%20her%20late%2020s%20wearing%20a%20warm%20burgundy%20blouse%20with%20a%20welcoming%20smile%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=100&height=100&seq=avatar-amina-01&orientation=squarish',
  },
  {
    id: 'b5',
    title: 'Rental Property Management: Best Practices for Landlords',
    excerpt: 'Essential tips for landlords on managing rental properties effectively, from tenant screening to maintenance and legal compliance.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20legal%20office%20desk%20with%20property%20documents%20deed%20and%20title%20papers%2C%20elegant%20wooden%20desk%20with%20pen%20and%20glasses%2C%20warm%20natural%20window%20lighting%2C%20clean%20minimal%20professional%20photography%20style%2C%20warm%20neutral%20tones&width=800&height=500&seq=blog-legal-01&orientation=landscape',
    category: 'Tips',
    date: 'Dec 20, 2023',
    readTime: '9 min read',
    slug: 'rental-property-management-best-practices',
    author: 'Grace Wanjiku',
    authorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20businesswoman%20in%20her%2030s%20wearing%20an%20elegant%20emerald%20green%20blazer%20with%20a%20confident%20smile%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=100&height=100&seq=avatar-grace-01&orientation=squarish',
  },
  {
    id: 'b6',
    title: 'The Rise of Affordable Housing in Kenya: New Opportunities',
    excerpt: 'Exploring the government\'s affordable housing initiative and what it means for developers, investors, and first-time homebuyers.',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20upscale%20residential%20street%20in%20Lavington%20Nairobi%20with%20luxury%20townhouses%20and%20manicured%20gardens%2C%20tree-lined%20avenue%20with%20mature%20trees%2C%20warm%20afternoon%20sunlight%20filtering%20through%20leaves%2C%20professional%20real%20estate%20photography&width=800&height=500&seq=blog-lavington-01&orientation=landscape',
    category: 'News',
    date: 'Dec 15, 2023',
    readTime: '5 min read',
    slug: 'affordable-housing-kenya-opportunities',
    author: 'James Kariuki',
    authorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20businessman%20in%20his%2030s%20wearing%20a%20dark%20suit%20with%20a%20subtle%20smile%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=100&height=100&seq=avatar-james-01&orientation=squarish',
  },
  {
    id: 'b7',
    title: 'Commercial Real Estate: Investing in Office Spaces',
    excerpt: 'A guide to commercial property investment, focusing on office spaces in Nairobi\'s growing business districts and emerging satellite towns.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20commercial%20office%20building%20exterior%20in%20Nairobi%20business%20district%20with%20glass%20facade%20and%20green%20landscaping%2C%20blue%20sky%20with%20clouds%2C%20professional%20architectural%20photography%2C%20clean%20lines%20and%20warm%20tones&width=800&height=500&seq=blog-commercial-01&orientation=landscape',
    category: 'Investment',
    date: 'Dec 10, 2023',
    readTime: '10 min read',
    slug: 'commercial-real-estate-investing-office-spaces',
    author: 'David Ochieng',
    authorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20man%20in%20his%20late%2030s%20wearing%20a%20charcoal%20gray%20suit%20and%20glasses%20with%20a%20friendly%20expression%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=100&height=100&seq=avatar-david-01&orientation=squarish',
  },
  {
    id: 'b8',
    title: 'Sustainable Home Features That Add Value',
    excerpt: 'Discover how eco-friendly features like solar panels, rainwater harvesting, and green spaces can increase your property value in Kenya.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20eco-friendly%20home%20with%20solar%20panels%20and%20green%20roof%20garden%20in%20Kenya%2C%20sustainable%20architecture%20with%20natural%20materials%2C%20warm%20sunlight%2C%20professional%20real%20estate%20photography%2C%20clean%20and%20green%20aesthetic&width=800&height=500&seq=blog-sustainable-01&orientation=landscape',
    category: 'Tips',
    date: 'Dec 5, 2023',
    readTime: '6 min read',
    slug: 'sustainable-home-features-add-value',
    author: 'Amina Hassan',
    authorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20businesswoman%20in%20her%20late%2020s%20wearing%20a%20warm%20burgundy%20blouse%20with%20a%20welcoming%20smile%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=100&height=100&seq=avatar-amina-01&orientation=squarish',
  },
  {
    id: 'b9',
    title: 'Legal Checklist: Documents You Need When Buying Property',
    excerpt: 'A complete checklist of legal documents and due diligence steps every property buyer in Kenya should follow to ensure a safe transaction.',
    image: 'https://readdy.ai/api/search-image?query=Close%20up%20of%20property%20title%20deed%20document%20with%20official%20stamp%20and%20signature%20on%20a%20wooden%20desk%2C%20warm%20natural%20lighting%2C%20professional%20legal%20document%20photography%2C%20clean%20minimal%20composition%20with%20warm%20tones&width=800&height=500&seq=blog-legal-docs-01&orientation=landscape',
    category: 'Guides',
    date: 'Nov 28, 2023',
    readTime: '8 min read',
    slug: 'legal-checklist-documents-buying-property',
    author: 'James Kariuki',
    authorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20businessman%20in%20his%2030s%20wearing%20a%20dark%20suit%20with%20a%20subtle%20smile%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=100&height=100&seq=avatar-james-01&orientation=squarish',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Peter Njoroge',
    role: 'Founder & CEO',
    image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20businessman%20in%20his%2040s%20wearing%20a%20navy%20blue%20suit%20with%20a%20subtle%20smile%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=400&height=400&seq=team-peter-01&orientation=squarish',
    bio: 'With over 15 years in Kenyan real estate, Peter founded Sedidy Homes with a vision to transform property transactions through transparency and client-first service.',
  },
  {
    id: 'tm2',
    name: 'Faith Wambui',
    role: 'Head of Sales',
    image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20businesswoman%20in%20her%2030s%20wearing%20an%20elegant%20emerald%20green%20blazer%20with%20a%20confident%20smile%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=400&height=400&seq=team-faith-01&orientation=squarish',
    bio: 'Faith leads our sales team with exceptional market knowledge and a proven track record of matching clients with their perfect properties across Nairobi and the coast.',
  },
  {
    id: 'tm3',
    name: 'Kevin Otieno',
    role: 'Property Valuation Expert',
    image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20man%20in%20his%20late%2030s%20wearing%20a%20charcoal%20gray%20suit%20and%20glasses%20with%20a%20friendly%20expression%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=400&height=400&seq=team-kevin-01&orientation=squarish',
    bio: 'A certified valuation expert, Kevin ensures every property is accurately priced using comprehensive market analysis and industry-leading valuation methodologies.',
  },
  {
    id: 'tm4',
    name: 'Jane Ndung\u2019u',
    role: 'Client Relations Manager',
    image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20an%20African%20woman%20in%20her%20early%2030s%20wearing%20a%20warm%20burgundy%20blouse%20with%20a%20welcoming%20smile%2C%20clean%20neutral%20studio%20background%2C%20soft%20professional%20lighting%2C%20corporate%20headshot%20style%2C%20warm%20skin%20tones&width=400&height=400&seq=team-jane-01&orientation=squarish',
    bio: 'Jane ensures every client receives personalized attention throughout their property journey, from initial inquiry to final handover.',
  },
];

export const services: Service[] = [
  {
    id: 's1',
    title: 'Property Sales',
    description: 'Expert assistance in buying or selling residential and commercial properties across Kenya. We handle everything from listing to closing.',
    icon: 'ri-home-5-line',
    features: [
      'Market Analysis',
      'Property Valuation',
      'Negotiation Support',
      'Legal Documentation',
    ],
  },
  {
    id: 's2',
    title: 'Property Rentals',
    description: 'Find your perfect rental property or let us manage your rental listings. We match tenants with landlords seamlessly.',
    icon: 'ri-key-2-line',
    features: [
      'Tenant Screening',
      'Lease Preparation',
      'Rent Collection',
      'Maintenance Coordination',
    ],
  },
  {
    id: 's3',
    title: 'Property Management',
    description: 'Comprehensive property management services to maximize your investment returns while minimizing your workload.',
    icon: 'ri-settings-3-line',
    features: [
      '24/7 Support',
      'Regular Inspections',
      'Financial Reporting',
      'Vendor Management',
    ],
  },
  {
    id: 's4',
    title: 'Investment Consulting',
    description: 'Strategic advice on real estate investments. We help you identify high-yield opportunities and build a profitable portfolio.',
    icon: 'ri-line-chart-line',
    features: [
      'Market Research',
      'ROI Analysis',
      'Portfolio Strategy',
      'Risk Assessment',
    ],
  },
  {
    id: 's5',
    title: 'Property Valuation',
    description: 'Accurate property valuations by certified professionals. Essential for sales, purchases, insurance, and legal purposes.',
    icon: 'ri-bar-chart-box-line',
    features: [
      'Certified Valuers',
      'Detailed Reports',
      'Market Comparisons',
      'Quick Turnaround',
    ],
  },
  {
    id: 's6',
    title: 'Legal Support',
    description: 'Navigate real estate legal requirements with confidence. We connect you with experienced property lawyers.',
    icon: 'ri-scales-3-line',
    features: [
      'Title Search',
      'Contract Review',
      'Transfer Process',
      'Dispute Resolution',
    ],
  },
];

export const aboutStats = [
  { value: '15+', label: 'Years Experience', icon: 'ri-calendar-check-line' },
  { value: '2,500+', label: 'Properties Sold', icon: 'ri-exchange-dollar-line' },
  { value: '50+', label: 'Expert Agents', icon: 'ri-team-line' },
  { value: '98%', label: 'Client Satisfaction', icon: 'ri-emotion-happy-line' },
];

export const timelineItems: TimelineItem[] = [
  {
    year: '2009',
    title: 'Founded in Nairobi',
    description: 'Sedidy Homes was established with a vision to transform the real estate experience in Kenya.',
  },
  {
    year: '2013',
    title: 'Expanded to Mombasa',
    description: 'Opened our coastal office to serve the growing demand for beachfront and vacation properties.',
  },
  {
    year: '2017',
    title: '1000th Property Sold',
    description: 'Celebrated a major milestone, proving our commitment to client satisfaction.',
  },
  {
    year: '2021',
    title: 'Digital Transformation',
    description: 'Launched our advanced online platform for seamless property browsing and transactions.',
  },
  {
    year: '2024',
    title: 'Industry Recognition',
    description: 'Awarded Best Real Estate Agency in East Africa for outstanding service and innovation.',
  },
];

export const coreValues = [
  {
    title: 'Trust & Integrity',
    description: 'We conduct business with the highest ethical standards, ensuring transparency in every transaction.',
    icon: 'ri-shield-check-line',
  },
  {
    title: 'Client-Centric',
    description: 'Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.',
    icon: 'ri-heart-3-line',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from property selection to after-sales support.',
    icon: 'ri-star-line',
  },
  {
    title: 'Innovation',
    description: 'Embracing modern technology and market trends to provide cutting-edge real estate solutions.',
    icon: 'ri-lightbulb-flash-line',
  },
];

export const contactInfo = [
  {
    label: 'Phone',
    value: '+254 796 476 637',
    href: 'tel:+254796476637',
    icon: 'ri-phone-line',
  },
  {
    label: 'Email',
    value: 'kenyaclassic@gmail.com',
    href: 'mailto:kenyaclassic@gmail.com',
    icon: 'ri-mail-line',
  },
  {
    label: 'Address',
    value: 'Riverside Drive, Nairobi, Kenya',
    href: '#',
    icon: 'ri-map-pin-line',
  },
  {
    label: 'Business Hours',
    value: 'Mon - Fri: 8:30 AM - 4:30 PM | Sat: 9:00 AM - 2:00 PM',
    href: '#',
    icon: 'ri-time-line',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'How do I schedule a property viewing?',
    answer: 'You can schedule a property viewing by contacting us via phone, email, or through our contact form. Our team will arrange a convenient time and accompany you throughout the viewing process.',
  },
  {
    question: 'What documents do I need to buy a property?',
    answer: 'Essential documents include a valid ID or passport, KRA PIN certificate, proof of income, and sale agreement. Our legal team guides you through every document required for a smooth transaction.',
  },
  {
    question: 'Do you help with property financing?',
    answer: 'Yes, we work with leading banks and financial institutions in Kenya to help you secure mortgage financing. Our consultants can advise on the best financing options for your situation.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our service fees vary depending on the type of service. For property sales, we charge a standard commission. For rentals and management, fees are competitive and clearly outlined in our agreement.',
  },
  {
    question: 'Can I list my property with Sedidy Homes?',
    answer: 'Absolutely! We welcome property listings from owners across Kenya. Contact our team to discuss your property details, and we will handle marketing, viewings, and negotiations on your behalf.',
  },
];

export const offices: Office[] = [
  {
    city: 'Nairobi',
    address: 'Riverside Drive',
    phone: '+254 796 476 637',
    email: 'info@sedidyhomes.com',
    isHQ: true,
  },
];