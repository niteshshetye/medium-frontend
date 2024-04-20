import React from "react";

export const ComingSoon: React.FC = () => {
  return (
    <div className="w-full h-full overflow-hidden flex justify-center items-center bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50">
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Coming Soon!</h2>
        <p className="text-lg mb-4">Stay tuned for exciting updates.</p>
      </div>
    </div>
  );
};
