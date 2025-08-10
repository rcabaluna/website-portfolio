import { useRef, useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Works from "../components/Works";

function HomePage() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const currentIndexRef = useRef(0);
  const isScrollingRef = useRef(false);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [logoColor, setLogoColor] = useState("#4831d4");

  // Define colors for each section index
  const sectionColors = [
    "#CCF381", // Hero
    "#4831D4", // About
    "#CCF381", // Experience
    "#4831D4", // Contact
    "#4831D4", // Contact
    "#CCF381", // Footer
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    let scrollTimeout;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrollingRef.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = Math.max(
        0,
        Math.min(sectionsRef.current.length - 1, currentIndexRef.current + direction)
      );

      if (newIndex !== currentIndexRef.current) {
        isScrollingRef.current = true;
        currentIndexRef.current = newIndex;

        sectionsRef.current[newIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setLogoColor(sectionColors[newIndex] || "#4831d4");

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000);
      }
    };

    container?.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container?.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(entry.target);
            if (index !== -1) {
              currentIndexRef.current = index;
              setLogoColor(sectionColors[index] || "#4831d4");
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
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
    <>
      <Header logoColor={logoColor} />

      <div
        ref={containerRef}
        className={`w-full ${isDesktop ? "h-screen overflow-hidden" : "overflow-auto"}`}
      >
        {sections.map((Component, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`w-full ${isDesktop ? "h-screen" : "min-h-fit"}`}
          >
            {Component}
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
