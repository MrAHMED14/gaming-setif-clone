"use client";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const Up = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-2 right-2 z-50">
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="p-3 rounded-sm text-center bg-[#ff0000] hover:bg-red-500"
        >
          <ChevronUp className="text-white" />
        </button>
      )}
    </div>
  );
};

export default Up;
