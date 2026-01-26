import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopStrip from "./components/TopStrip";
import ScrollToTop from "./components/ScrollToTop";
import LoadingIndicator from "./components/LoadingIndicator";

// Platform Pages
import Overview from "./pages/Overview";
import CustomizedCrm from "./pages/CustomizedCrm";
import AIAutomation from "./pages/AIAutomation";
import PosInventory from "./pages/PosInventory";
import AccountingCompliance from "./pages/AccountingCompliance";
import BusinessDashboards from "./pages/BusinessDashboards";
import Integration from "./pages/Integration";
import SecurityDataProtection from "./pages/SecurityDataProtection";
import MobileApp from "./pages/MobileApp";

// Team Pages
import SalesTeams from "./pages/SalesTeams";
import OperationsTeams from "./pages/OperationsTeams";
import CustomerSupportTeams from "./pages/CustomerSupportTeams";
import FinanceTeams from "./pages/FinanceTeams";
import LeadershipTeams from "./pages/LeadershipTeams";

// Business Size Pages
import SmallBusinesses from "./pages/SmallBusinesses";
import GrowingMSMEs from "./pages/GrowingMSMEs";
import MultiBranchBusinesses from "./pages/MultiBranchBusinesses";
import Enterprises from "./pages/Enterprises";

// Other Pages
import CaseStudies from "./pages/CaseStudies";
import Sectors from "./pages/Sectors";
import Consultation from "./pages/Consultation";
import Resources from "./pages/Resources";
import ContactSales from "./pages/ContactSales";
import ScheduleCall from "./pages/ScheduleCall";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LoadingIndicator />
      <TopStrip />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Platform Routes */}
        <Route path="/platform/overview" element={<Overview />} />
        <Route path="/platform/customized-crm" element={<CustomizedCrm />} />
        <Route path="/platform/ai-automation" element={<AIAutomation />} />
        <Route path="/platform/pos-inventory" element={<PosInventory />} />
        <Route path="/platform/accounting-compliance" element={<AccountingCompliance />} />
        <Route path="/platform/business-dashboards" element={<BusinessDashboards />} />
        <Route path="/integrations" element={<Integration />} />
        <Route path="/platform/security-data-protection" element={<SecurityDataProtection />} />
        <Route path="/platform/mobile-app" element={<MobileApp />} />

        {/* Team Routes */}
        <Route path="/teams/sales" element={<SalesTeams />} />
        <Route path="/teams/operations" element={<OperationsTeams />} />
        <Route path="/teams/customer-support" element={<CustomerSupportTeams />} />
        <Route path="/teams/finance" element={<FinanceTeams />} />
        <Route path="/teams/leadership" element={<LeadershipTeams />} />

        {/* Business Size Routes */}
        <Route path="/business-size/small-businesses" element={<SmallBusinesses />} />
        <Route path="/business-size/growing-msmes" element={<GrowingMSMEs />} />
        <Route path="/business-size/multi-branch" element={<MultiBranchBusinesses />} />
        <Route path="/business-size/enterprises" element={<Enterprises />} />

        {/* Other Routes */}
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<ContactSales />} />
        <Route path="/signup" element={<ScheduleCall />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
