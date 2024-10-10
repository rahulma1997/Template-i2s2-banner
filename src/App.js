import About from "./Components/About";
import Banner from "./Components/Banner";
import ClientsSection from "./Components/Client";
import Header from "./Components/Header";
import PortfolioSection from "./Components/Portfolio";
import ServicesSection from "./Components/Services";

function App() {
  return (
   <>
   <Header/>
   <Banner/>
   <About />
   <ClientsSection />
   <ServicesSection />
   <PortfolioSection />
   </>
  );
}

export default App;
