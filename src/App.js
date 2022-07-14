import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import NavBarComp from "./components/NavBarComp";
import AboutUs from "./pages/AboutUs";
import Privacy from "./pages/Privacy";
import TC from "./pages/TC";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tc" element={<TC />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
