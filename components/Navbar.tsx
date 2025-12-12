import React from 'react';
import { NavLink } from 'react-router-dom';
import { Page } from '../types';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: '_HOME', path: Page.HOME },
    { label: '_WORK', path: Page.WORK },
    { label: '_CAREER', path: Page.CAREER },
    { label: '_EDUCATION', path: Page.EDUCATION },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-tokyo-bg/80 border-b border-tokyo-comment/20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to={Page.HOME} className="font-mono font-bold text-xl text-tokyo-blue tracking-tighter hover:text-tokyo-cyan transition-colors">
          PALERO.NAVY<span className="text-tokyo-red">_</span>
        </NavLink>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `font-mono text-sm transition-all duration-200 ${
                    isActive 
                    ? 'text-tokyo-cyan drop-shadow-[0_0_5px_rgba(122,162,247,0.5)]' 
                    : 'text-tokyo-comment hover:text-tokyo-fg'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-tokyo-comment hover:text-tokyo-yellow transition-colors focus:outline-none"
            title={theme === 'tokyo' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'tokyo' ? (
              // Sun Icon for Dark Mode (indicating switch to light)
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              // Moon Icon for Light Mode (indicating switch to dark)
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu Placeholder */}
        <div className="md:hidden text-tokyo-comment text-xs font-mono ml-4">
           [MENU]
        </div>
      </div>
    </nav>
  );
};

export default Navbar;