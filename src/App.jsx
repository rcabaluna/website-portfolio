import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Works from "./pages/Works";

import { useRef, useEffect, useState } from "react";

function App() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const currentIndexRef = useRef(0);
  const isScrollingRef = useRef(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      if (!isDesktop) return; // disable scroll snapping on mobile/tablet

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
      }, 700); // adjust scroll delay if needed
    };

    container?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, [isDesktop]);

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
      className={`w-full ${isDesktop ? "h-screen overflow-hidden" : "overflow-auto"
        }`}
    >
      {sections.map((Component, index) => (
        <div
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className={`w-full ${isDesktop ? "h-screen" : "min-h-fit"
            }`}
        >
          {Component}
        </div>
      ))}
    </div>
  );
}

export default App;
