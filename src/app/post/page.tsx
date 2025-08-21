"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const images = [
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
    "https://picsum.photos/id/1018/300/200",
    "https://picsum.photos/id/1020/300/200",
    "https://picsum.photos/id/1024/300/200",
    "https://picsum.photos/id/1035/300/200",
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Left button (hidden at start) */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <FaChevronLeft />
        </button>
      )}

      {/* Image container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scroll-smooth no-scrollbar space-x-4"
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-1/4">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-48 object-cover rounded-xl shadow"
            />
          </div>
        ))}
      </div>

      {/* Right button (hidden at end) */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}
