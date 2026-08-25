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
import SubmitListingPage from "../pages/submit-listing/page";
import ReviewListings from "../pages/admin/ReviewListings";
import ManageListings from "../pages/admin/ManageListings";   // <-- New import
import EditProperty from "../pages/admin/EditProperty";       // <-- New import

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/properties", element: <PropertiesPage /> },
  { path: "/properties/:id", element: <PropertyDetailPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/list-with-us", element: <SubmitListingPage /> },
  { path: "/admin/upload-property", element: <UploadProperty /> },
  { path: "/admin/review-listings", element: <ReviewListings /> },
  { path: "/admin/manage-listings", element: <ManageListings /> }, // <-- Manage Dashboard
  { path: "/admin/edit-property/:id", element: <EditProperty /> }, // <-- Edit form
  { path: "*", element: <NotFound /> },
];

export default routes;