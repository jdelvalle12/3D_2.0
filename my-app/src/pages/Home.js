import React from 'react';
import Virtual from '../images/virtual-city.mp4';
import '../styles/Home.css';
import '../App.css';

 export default function Home() {
 
  return (
    <section className="home-container">
      <video src={Virtual} autoPlay loop muted className="background-video"></video>
      <div className='home-content'>    
      <h1>Welcome...</h1>
      <p>
      “Design is not just what it looks like and feels like. Design is how it works.” –Steve Jobs
      </p>
    </div>
  </section>
  );
}

