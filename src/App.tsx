import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CrmManagement from "./pages/CrmManagement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopStrip from "./components/TopStrip";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopStrip />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/crm" element={<CrmManagement />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
