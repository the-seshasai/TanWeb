import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './containers'
import { Navbar } from './components';
import './App.scss';
import Endpage from './components/Endpage';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <section className="bg-black padding-x padding-t pb-8<">
      <Endpage />
    </section>
   </div>
  );
}

export default App;
