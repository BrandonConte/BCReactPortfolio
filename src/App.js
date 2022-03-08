import React, {useState } from 'react';
import Header from './components/Header';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
// import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  const[currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>
        {renderPage()}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
