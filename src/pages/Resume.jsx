// components/Resume.jsx
import React from "react";
import "../assets/css/Resume.css";
import ResumeSidebar from "../components/resume/Sidebar";
import ResumeMainContent from "../components/resume/MainContent";



const Resume = () => {
  return (
    <div id="#resume" className="min-h-screen md:px-30 md:py-20 bg-white">
      <div className="flex w-full h-full overflow-hidden bg-[#f5f4fc]">
        <ResumeSidebar/>
        <ResumeMainContent />
      </div>
    </div>
  );
};

export default Resume;
