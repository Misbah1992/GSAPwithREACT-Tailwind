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

function App() {
  return (
    <div>
    <Navbar/>
    <Advertisment bg1={bg1}/>
    <NewsSlider/>
    <HeroSection/>
    <About/>
    <Sliders/>
    <Advertisment2 ad3={ad3}/>
    <ShippingNews/>
    </div>
  );
}

export default App;
