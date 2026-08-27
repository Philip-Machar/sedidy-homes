import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import PropertiesPage from "../pages/properties/page";
import PropertyDetailPage from "../pages/property/page";
import AboutPage from "../pages/about/page";
import ServicesPage from "../pages/services/page";
import BlogPage from "../pages/blog/page";
import PostPage from "../pages/blog/PostPage";                  // <-- New import for single blog post
import ContactPage from "../pages/contact/page";
import UploadProperty from "../pages/admin/UploadProperty";
import SubmitListingPage from "../pages/submit-listing/page";
import ReviewListings from "../pages/admin/ReviewListings";
import ManageListings from "../pages/admin/ManageListings";   
import EditProperty from "../pages/admin/EditProperty";       
import BlogDashboard from "../pages/admin/BlogDashboard";       // <-- New import for blog admin
import WriteBlogPage from "../pages/admin/WriteBlogPage";       // <-- New import for writing blogs

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/properties", element: <PropertiesPage /> },
  { path: "/properties/:id", element: <PropertyDetailPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/blog/:slug", element: <PostPage /> },                  // <-- Single article route
  { path: "/contact", element: <ContactPage /> },
  { path: "/list-with-us", element: <SubmitListingPage /> },
  
  // Admin Routes
  { path: "/admin/upload-property", element: <UploadProperty /> },
  { path: "/admin/review-listings", element: <ReviewListings /> },
  { path: "/admin/manage-listings", element: <ManageListings /> }, 
  { path: "/admin/edit-property/:id", element: <EditProperty /> }, 
  { path: "/admin/blog", element: <BlogDashboard /> },             // <-- Blog Dashboard route
  { path: "/admin/write-blog", element: <WriteBlogPage /> },       // <-- Write Blog route
  
  { path: "*", element: <NotFound /> },
];

export default routes;