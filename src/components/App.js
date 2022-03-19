import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import {Carousel} from 'react-bootstrap';
import bg1 from './../img/slider/bg-1.jpg';
import bg2 from './../img/slider/bg-2.jpg';
import Portfolio from './Portfolio';
import Portfolio2 from './Portfolio2';
import Portfolio3 from './Portfolio3';


function App() {
  return (
    <div>
     <Nav/>
   
     <Carousel id="mycarousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg2}
      alt="Third slide"
    />
  </Carousel.Item>
 
</Carousel>
    <Portfolio/>
    <Portfolio2/>
    <Portfolio3/>
    <Portfolio3/>
     <Footer/>
    </div>
  );
}

export default App;
