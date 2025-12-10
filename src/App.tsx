import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // Import Navigate
import Home from "./pages/Home";
import CrmManagement from "./pages/CrmManagement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopStrip from "./components/TopStrip";
import DigitalCommerce from "./pages/DigitalCommerce";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/products/commerce" element={<DigitalCommerce />} />
        <Route path="/products/analytics" element={<Analytics />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
