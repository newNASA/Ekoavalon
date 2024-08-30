import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTop from "./components/Navbar/NavTop";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import Why from "./components/Why/why";
import ForYou from "./components/ForYou/ForYou";
import OurApp from "./components/OurApp/ourapp";
import Customers from "./components/Customers/customers";
import Partners from "./components/Partners/partners";
import Footer from "./components/Footer/footer";
import Services from "./components/Services/Services";
import About from "./components/About/about";

function App() {
  return (
    <Router>
      <div className="App">
        <NavTop />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Why />
              <ForYou />
              <OurApp />
              <Customers />
              <Partners />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <NavTop />
      </div>
    </Router>
  );
}

export default App;