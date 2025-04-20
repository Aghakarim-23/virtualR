import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Prices from './components/Prices';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Workflow/>
      <Prices/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App