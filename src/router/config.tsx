// File: src/router/config.tsx
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import PropertiesPage from "../pages/properties/page";
import PropertyDetailPage from "../pages/property/page";
import AboutPage from "../pages/about/page";
import ServicesPage from "../pages/services/page";
import BlogPage from "../pages/blog/page";
import PostPage from "../pages/blog/PostPage";
import ContactPage from "../pages/contact/page";
import UploadProperty from "../pages/admin/UploadProperty";
import SubmitListingPage from "../pages/submit-listing/page";
import ReviewListings from "../pages/admin/ReviewListings";
import ManageListings from "../pages/admin/ManageListings";   
import EditProperty from "../pages/admin/EditProperty";       
import BlogDashboard from "../pages/admin/BlogDashboard";
import WriteBlogPage from "../pages/admin/WriteBlogPage";
import EditBlogPage from "../pages/admin/EditBlogPage";
import AdminDashboard from "../pages/admin/Dashboard"; // <-- Import the Hub

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/properties", element: <PropertiesPage /> },
  { path: "/properties/:id", element: <PropertyDetailPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/blog/:slug", element: <PostPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/list-with-us", element: <SubmitListingPage /> },
  
  // Admin Routes
  { path: "/admin", element: <AdminDashboard /> }, // <-- Add the Hub route here
  { path: "/admin/upload-property", element: <UploadProperty /> },
  { path: "/admin/review-listings", element: <ReviewListings /> },
  { path: "/admin/manage-listings", element: <ManageListings /> }, 
  { path: "/admin/edit-property/:id", element: <EditProperty /> }, 
  { path: "/admin/blog", element: <BlogDashboard /> },             
  { path: "/admin/write-blog", element: <WriteBlogPage /> },       
  { path: "/admin/edit-blog/:id", element: <EditBlogPage /> }, 
  
  { path: "*", element: <NotFound /> },
];

export default routes;