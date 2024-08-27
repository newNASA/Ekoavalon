import NavTop from "./components/Navbar/NavTop";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import Why from "./components/Why/why";
import ForYou from "./components/ForYou/ForYou";
import OurApp from "./components/OurApp/ourapp";
import Customers from "./components/Customers/customers";
import Partners from "./components/Partners/partners";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <NavTop />
      <Navbar />
      <Header />
      <section>
        <Why />
        <ForYou />
        <OurApp />
        <Customers />
        <Partners />
      </section>
      <Footer />
      <NavTop />
    </div>
  );
}

export default App;
