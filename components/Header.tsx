import React from 'react';

interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-[#1f2022] border-b border-gray-700/50 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
        <img src="/assets/images/logo.png" alt="Robi Technology Logo" style={{ width: 100, height: 45 }} />
        
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="https://robitechnology.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">OUR SERVICE</a>
            <a href="https://robiaistore.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">BUY AI</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">CONTACT US</a>
          </div>
        </div>
      </nav>
    </header>
  );
};