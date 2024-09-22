import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Join } from "./components/Join";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailpage";

const App = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto pb-12">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/category/:id" Component={CategoryPage} />
          <Route path="/products/:id" Component={ProductDetailPage} />
          <Route path="/contact-us" Component={ContactUsPage} />
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </main>

      <Join />
      <Footer />
    </>
  );
};

export default App;
