import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import './css/header.css'
import "./css/hero.css";
import "./css/productHighlights.css";
import "./css/featuredProducts.css";
import "./css/testimonials.css";

import Hero from './components/Hero';
import ProductHighlights from './components/ProductHighlights';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import LatestProducts from './components/LatestProducts';


function App() {
  return (
   <>
   <Header/>
   <Hero/>
   <ProductHighlights/>
   <FeaturedProducts/>
   <Testimonials/>
   <LatestProducts/>
   </>
  );
}

export default App;
