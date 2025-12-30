import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // Import Navigate
import Home from "./pages/Home";
import CrmManagement from "./pages/CrmManagement";
import AIAutomation from "./pages/AIAutomation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopStrip from "./components/TopStrip";
import DigitalCommerce from "./pages/DigitalCommerce";
import Analytics from "./pages/Analytics";
import CaseStudies from "./pages/CaseStudies";
import Integration from "./pages/Integration";
import Sectors from "./pages/Sectors";
import ScrollToTop from "./components/ScrollToTop";
import LoadingIndicator from "./components/LoadingIndicator";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LoadingIndicator />
      <TopStrip />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* FIX: Redirect /products to /products/crm so the link works */}
        <Route
          path="/products"
          element={<Navigate to="/products/crm" replace />}
        />

        <Route path="/products/crm" element={<CrmManagement />} />
        <Route path="/products/ai-automation" element={<AIAutomation />} />
        <Route path="/products/commerce" element={<DigitalCommerce />} />
        <Route path="/products/analytics" element={<Analytics />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/integrations" element={<Integration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
