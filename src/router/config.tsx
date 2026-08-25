import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import PropertiesPage from "../pages/properties/page";
import PropertyDetailPage from "../pages/property/page";
import AboutPage from "../pages/about/page";
import ServicesPage from "../pages/services/page";
import BlogPage from "../pages/blog/page";
import ContactPage from "../pages/contact/page";
import UploadProperty from "../pages/admin/UploadProperty";
import SubmitListingPage from "../pages/submit-listing/page"; // <-- Import public submit page
import ReviewListings from "../pages/admin/ReviewListings";    // <-- Import admin review page

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/properties", element: <PropertiesPage /> },
  { path: "/properties/:id", element: <PropertyDetailPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/list-with-us", element: <SubmitListingPage /> },      // <-- Add public route
  { path: "/admin/upload-property", element: <UploadProperty /> },
  { path: "/admin/review-listings", element: <ReviewListings /> },  // <-- Add admin route
  { path: "*", element: <NotFound /> },
];

export default routes;