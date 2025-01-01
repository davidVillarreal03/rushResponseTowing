import './App.css'

import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Background from './components/Background/Background';
import Phone from './components/Phone/phone';
import Footer from './components/Footer/Footer';
import Slider from './components/SlideInNavBar/SlideInNavBar';

function App() {
  return (
    <>

      <Background />
        <Slider />
        <Header />
            <Outlet />
            <Footer />
            <Phone />
    </>
  );
}

export default App;