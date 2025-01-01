import './App.css'

import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Background from './components/Background/Background';
import Phone from './components/Phone/phone';
import Footer from './components/Footer/Footer';
import Slider from './components/SlideInNavBar/SlideInNavBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
function App() {
  return (
    <>

      <Background />
      <ScrollToTop />
        <Slider />
        <Header />
            <Outlet />
            <Footer />
            <Phone />
    </>
  );
}

export default App;