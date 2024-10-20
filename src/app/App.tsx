import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login/page";
import HomePage from "../pages/home/page";
import CatalogPage from "../pages/catalog/page";
import ProductPage from "../pages/product/page";
import Header from "../components/header";
import Footer from "../components/footer";

function App() {
  return (
    <Router>
      <main className="flex-grow p-12">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
