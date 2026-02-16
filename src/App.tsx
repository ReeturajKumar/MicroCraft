import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import CustomizedCRM from "./pages/platform/CustomizedCRM";
import POSInventory from "./pages/platform/POSInventory";
import AccountingCompliance from "./pages/platform/AccountingCompliance";
import BusinessDashboards from "./pages/platform/BusinessDashboards";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AIAutomation from "./pages/platform/AIAutomation";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/platform/customized-crm" element={<CustomizedCRM />} />
        <Route path="/platform/ai-automation" element={<AIAutomation />} />
        <Route path="/platform/pos-inventory" element={<POSInventory />} />
        <Route path="/platform/accounting-compliance" element={<AccountingCompliance />} />
        <Route path="/platform/business-dashboards" element={<BusinessDashboards />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
