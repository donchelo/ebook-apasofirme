import React, { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

type Page = 'landing' | 'terms' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === 'landing' && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === 'terms' && <TermsPage onNavigate={handleNavigate} />}
      {currentPage === 'privacy' && <PrivacyPage onNavigate={handleNavigate} />}
    </>
  )
}

export default App
