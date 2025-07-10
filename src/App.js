import Sliders from './components/Sliders';
import About from './components/About';
import Advertisment from './components/Advertisment';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import NewsSlider from './components/NewsSlider';
import bg1 from "./images/bg1.png"
import Advertisment2 from './components/Advertisement2';
import ad3 from "./images/ad3.png"
import ShippingNews from './components/ShippingNews';
import Info from './components/Info';
import Stats from './components/Stats';
import ad4 from "./images/ad4.png"
import Reviews from './components/Reviews';
import About2 from './components/About2';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar/>
    <Advertisment bg1={bg1}/>
    <NewsSlider/>
    <HeroSection/>
    <About/>
    <Sliders/>
    <Advertisment2 value={ad3}/>
    <ShippingNews/>
    <Info/>
    <Stats/>
     <Advertisment2 value={ad4}/>
     <Reviews/>
     <About2/>
     <FAQ/>
     <Footer/>
    </div>
  );
}

export default App;
