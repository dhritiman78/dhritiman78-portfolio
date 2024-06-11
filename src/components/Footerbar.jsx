import React from 'react';

const Footerbar = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-sm mb-4">
          Made with <span className="text-red-500">&hearts;</span> by Dhritiman
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footerbar;
