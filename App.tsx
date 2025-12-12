import React from 'react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';
import Home from './pages/Home';
import Work from './pages/Work';
import Career from './pages/Career';
import Education from './pages/Education';
import { ThemeProvider } from './context/ThemeContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    // In MemoryRouter, window scroll might not automatically reset
    const main = document.querySelector('main');
    if (main) main.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-tokyo-bg text-tokyo-fg font-sans selection:bg-tokyo-red selection:text-white transition-colors duration-300">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        {children}
      </main>
      <footer className="py-12 text-center text-xs font-mono text-tokyo-comment mt-12 border-t border-tokyo-comment/10">
        <p>&copy; {new Date().getFullYear()} PALERO.NAVY // TACTICAL DEV</p>
        <p className="mt-2">BUILT WITH REACT + TAILWIND + GEMINI</p>
      </footer>
      <Terminal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MemoryRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/career" element={<Career />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </Layout>
      </MemoryRouter>
    </ThemeProvider>
  );
};

export default App;