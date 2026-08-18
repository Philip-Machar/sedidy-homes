import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import PropertiesPage from "../pages/properties/page";
import PropertyDetailPage from "../pages/property/page";
import AboutPage from "../pages/about/page";
import ServicesPage from "../pages/services/page";
import BlogPage from "../pages/blog/page";
import ContactPage from "../pages/contact/page";
import UploadProperty from "../pages/admin/UploadProperty"; // <-- Import the new page

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/properties",
    element: <PropertiesPage />,
  },
  {
    path: "/properties/:id",
    element: <PropertyDetailPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/admin/upload-property", // <-- Add the new route here
    element: <UploadProperty />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;