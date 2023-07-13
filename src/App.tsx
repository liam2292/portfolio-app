import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MyWork from './components/MyWork';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
        <MyWork />
      </main>
      <footer>
        <p>&copy; 2023 My React Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
