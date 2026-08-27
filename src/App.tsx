// File: src/App.tsx
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import ScrollToTop from "./components/base/ScrollToTop";
import FloatingWhatsApp from "./components/feature/FloatingWhatsApp"; // <-- Import the new component

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <ScrollToTop />
        <AppRoutes />
        {/* Render the floating button globally */}
        <FloatingWhatsApp />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;