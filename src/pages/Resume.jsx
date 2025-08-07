// components/Resume.jsx
import React from "react";
import "../assets/css/Resume.css";
import ResumeSidebar from "../components/resume/Sidebar";
import ResumeMainContent from "../components/resume/MainContent";



const Resume = () => {
  return (
    <div className="min-h-screen px-30 py-20">
      <div className="flex w-full h-full overflow-hidden bg-[#f4f4f4]">
        <ResumeSidebar/>
        <ResumeMainContent />
      </div>
    </div>
  );
};

export default Resume;
