import React, { useState, useEffect } from 'react';
import Header from './components/CustomHeader';
import Hero from './components/Hero';
import Features from './components/Pages';
import Footer from './components/Footer';
import Mode from './components/ModePag';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-500`}>
      <Header />
      <Mode isDarkMode={isDarkMode} handleToggle={handleToggle} />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
