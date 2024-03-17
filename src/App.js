import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';
import DetailPage from './components/detailspage';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        {' '}
        {/* Header component placed here */}
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crypto/:cryptoId" element={<DetailPage />} />
          </Routes>
        </main>
        <Footer />
        {' '}
        {/* Footer component placed here */}
      </div>
    </Router>
  );
}

export default App;
