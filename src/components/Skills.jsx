import React, { useRef, useEffect } from "react";
import {
  Code,
  ClipboardCheck,
  Image,
  Laptop,
  Wrench,
  ShoppingCart,
  Settings2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/html.png";
import jsLogo from "../assets/logos/javascript.png";
import phpLogo from "../assets/logos/php.png";




const Skills = () => {
  const scrollRef = useRef(null);

  const skills = [
    {
      title: "Web Development",
      description:
        "I build responsive, user-focused websites and applications that not only look great but also function flawlessly. From simple landing pages to full-stack platforms, I use modern tools to bring digital ideas to life quickly and efficiently.",
      tools: [
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "JavaScript", logo: jsLogo },
        { name: "PHP", logo: phpLogo },
      ],
      icon: <Code size={36} className="text-white mb-3" />,
    },
    {
      title: "Project Management",
      description:
        "Planning, organizing, and delivering projects with cross-functional teams.",
      tools: [
        {
          name: "Trello",
          svg: `<svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Trello</title><path d="M0 3a3 3 0 013-3h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3zm14.182 2.182v13.636h6.545V5.182h-6.545zM3.273 5.182v7.09h6.545v-7.09H3.273z"/></svg>`,
          color: "#0079BF"
        }
      ],
      icon: <ClipboardCheck size={36} className="text-white mb-3" />,
    },
    {
      title: "Photo & Video Editing",
      description:
        "I transform raw visuals into polished, engaging content for social media, presentations, and campaigns. Whether it's a quick edit or a full story, I make visuals that connect and communicate clearly.",
      tools: ["Photoshop", "Premiere Pro", "CapCut", "Canva"],
      icon: <Image size={36} className="text-white mb-3" />,
    },
    {
      title: "Virtual Assistance",
      description:
        "I help businesses stay organized by handling tasks like data entry, email sorting, scheduling, and document prep—so you can focus on what matters most while I handle the rest behind the scenes.",
      tools: ["Google Workspace", "MS Office", "Gmail", "Calendar"],
      icon: <Laptop size={36} className="text-white mb-3" />,
    },
    {
      title: "Technical Support & Troubleshooting",
      description:
        "I solve problems fast. Whether it’s software issues, server configuration, or system errors, I provide calm, clear, and effective support to keep everything running smoothly.",
      tools: ["Windows Server", "SSH", "PHP", "Nginx", "MySQL"],
      icon: <Wrench size={36} className="text-white mb-3" />,
    },
    {
      title: "E-commerce Support",
      description:
        "I manage online stores behind the scenes—updating product listings, tracking inventory, and ensuring accurate customer data. I make sure your e-commerce operations are smooth and scalable.",
      tools: ["Shopify", "WooCommerce", "Excel", "CRM Tools"],
      icon: <ShoppingCart size={36} className="text-white mb-3" />,
    },
    {
      title: "Digitalization & Workflow Optimization",
      description:
        "I help organizations shift from manual to digital systems—streamlining workflows, reducing repetitive work, and increasing productivity through simple, smart digital tools.",
      tools: ["Airtable", "Google Forms", "Laravel", "Custom Tools"],
      icon: <Settings2 size={36} className="text-white mb-3" />,
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "I optimize websites and content to improve visibility on search engines. I focus on both technical SEO and content strategy to help websites rank higher and attract the right audience.",
      tools: [
        "Google Search Console",
        "Ahrefs",
        "Yoast SEO",
        "Screaming Frog",
        "SEMrush",
      ],
      icon: <Settings2 size={36} className="text-white mb-3" />,
    },
  ];

  const extendedSkills = [...skills, ...skills];

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 300;
    const handleScroll = () => {
      const maxScroll = cardWidth * skills.length;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [skills.length]);

  return (
    <section className="min-h-screen px-6 bg-[#1a1d23] flex flex-col justify-center">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-white">
          My Extensive List of Skills
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-[#2a2d34] hover:bg-[#3a3d44] text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-[#2a2d34] hover:bg-[#3a3d44] text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-2 scroll-smooth max-w-full hide-scrollbar items-stretch"
      >
        {extendedSkills.map((skill, index) => (
          <div
            key={index}
            className="min-w-[240px] max-w-[450px] min-h-[500px] h-full bg-[#2a2d34] p-8 rounded-2xl shrink-0 flex flex-col justify-center"
          >
            {skill.icon}
            <h3 className="text-xl font-semibold mb-3 text-white">
              {skill.title}
            </h3>
            <p className="text-base text-[#a1a1aa] mb-4">{skill.description}</p>

            <div className="flex flex-wrap items-center gap-1 mt-auto">
              {skill.tools.map((tool, i) => (
                <div
                  key={i}
                  className="relative group w-8 h-8 flex items-center justify-center rounded-full overflow-hidden transition-transform hover:scale-120 shadow"
                  title={tool.name}
                >
                  <img src={tool.logo} alt={tool.name} className="w-5 h-5 object-contain" />
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap z-10">
                    {tool.name}
                  </div>
                </div>
              ))}
            </div>




          </div>
        ))}
      </div>

      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Skills;
