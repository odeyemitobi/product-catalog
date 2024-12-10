import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 dark:bg-black/70">
      <div className="relative">
        <div className="absolute w-24 h-24 border-4 border-transparent border-b-[#E85D04] rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
