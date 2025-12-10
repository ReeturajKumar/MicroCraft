import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // Import Navigate
import Home from "./pages/Home";
import CrmManagement from "./pages/CrmManagement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopStrip from "./components/TopStrip";
import DigitalCommerce from "./pages/DigitalCommerce";
import Analytics from "./pages/Analytics";
function App() {
    return (_jsxs(BrowserRouter, { children: [_jsx(TopStrip, {}), _jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/products", element: _jsx(Navigate, { to: "/products/crm", replace: true }) }), _jsx(Route, { path: "/products/crm", element: _jsx(CrmManagement, {}) }), _jsx(Route, { path: "/products/commerce", element: _jsx(DigitalCommerce, {}) }), _jsx(Route, { path: "/products/analytics", element: _jsx(Analytics, {}) })] }), _jsx(Footer, {})] }));
}
export default App;
