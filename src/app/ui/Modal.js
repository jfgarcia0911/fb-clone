import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function Modal({ isOpen, onClose, children }) {
  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;
    
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex justify-center items-center bg-white/70 z-50 transition-opacity"
      onClick={onClose}
    >
      {/* Modal content */}
      <div 
        className="bg-white p-3 rounded-2xl  border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative min-w-[400px]"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        {children}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:bg-gray-300 rounded-full hover:text-gray-700"
        >
          <IoClose className="h-8 w-8 cursor-pointer"/>
        </button>
      </div>
    </div>
  );
}