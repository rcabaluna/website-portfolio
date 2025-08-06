import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Works from "./pages/Works";

import { useRef, useEffect } from "react";

function App() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const currentIndexRef = useRef(0);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      e.preventDefault();

      if (isScrollingRef.current) return;
      isScrollingRef.current = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = Math.max(
        0,
        Math.min(sectionsRef.current.length - 1, currentIndexRef.current + direction)
      );

      if (newIndex !== currentIndexRef.current) {
        currentIndexRef.current = newIndex;
        sectionsRef.current[newIndex]?.scrollIntoView({
          behavior: "smooth",
        });
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800); // Slightly slower for more stickiness
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const sections = [
    <Hero />,
    <About />,
    <Experience />,
    <Works />,
    <Contact />,
    <Footer />,
  ];

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden snap-y snap-mandatory scroll-smooth"
    >
      {sections.map((Component, index) => (
        <div
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="h-screen w-full snap-start"
        >
          {Component}
        </div>
      ))}
    </div>
  );
}

export default App;
