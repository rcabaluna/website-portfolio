    import React from 'react';
    import '../assets/css/Header.css';
    import { ChevronDown } from 'lucide-react';
    import profileImage from '../assets/images/profile.png';

    const Header = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center px-12 md:px-12 bg-[#1b1f25] text-white">
        {/* Left Column (Text) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mb-10 md:mb-0">
            <p className="uppercase text-sm tracking-widest text-[#a1a1aa] mb-2">--</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
            I'm Ruel, <br /> a Web Developer
            </h1>
            <p className="max-w-md text-[#a1a1aa] mb-6 mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="w-20 h-20 flex items-center justify-center rounded-full bg-[#0660e4] text-white">
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>

        </div>

        {/* Right Column (Image) */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full flex justify-center items-center">
            <img
            src={profileImage}
            alt="Ruel"
            className="object-cover h-full w-full rounded-xl"
            />
        </div>
        </section>
    );
    };

    export default Header;
