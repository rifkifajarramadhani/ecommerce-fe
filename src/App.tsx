import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ContactUsPage from "./pages/ContactUsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/contact-us" Component={ContactUsPage} />
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
