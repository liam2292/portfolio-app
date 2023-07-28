import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
       
      </main>
      <footer>
        <p>&copy; 2023 My React Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
