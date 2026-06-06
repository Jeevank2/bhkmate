import { motion } from "framer-motion";
import heroFamilyImg from "../assets/hero-family.jpg";
import Odometer from "./Odometer";

const Hero3D = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#f8fafc] flex flex-col lg:flex-row items-center justify-center pt-32 pb-24 lg:pt-28 lg:pb-28">

            {/* Background design accents (clean, subtle) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0f172a]/5 rounded-full blur-[150px]" />
            </div>

            <div className="lg:w-[52%] p-8 relative z-10 lg:pl-20 flex flex-col gap-6 md:gap-8 text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-2 md:gap-3"
                >
                    {/* Find Your Line */}
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-[#0f172a] font-sans">
                        Find Your
                    </h1>

                    {/* Dream Line */}
                    <div className="flex items-baseline relative mt-[-8px] md:mt-[-16px]">
                        {/* Large cursive D */}
                        <span className="font-script-d text-[#c2850a] text-[8.5rem] md:text-[12rem] leading-none select-none -mr-6 md:-mr-10">
                            D
                        </span>
                        {/* "ream" with house icon above it */}
                        <div className="relative flex flex-col justify-end">
                            {/* House icon centered above "ream" */}
                            <div className="absolute top-[-42px] md:top-[-60px] left-0 right-0 flex justify-center">
                                <svg className="w-12 h-10 md:w-16 md:h-14 text-[#c2850a]" viewBox="0 0 100 80" fill="none">
                                    <path d="M30 35 V18 H38 V25" stroke="#c2850a" strokeWidth="4.5" strokeLinecap="round" />
                                    <path d="M10 45 L50 12 L90 45" stroke="#c2850a" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 45 V75 H78 V45" stroke="#c2850a" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="42" y="55" width="16" height="16" fill="#0f172a" rx="2" />
                                </svg>
                            </div>
                            <span className="text-[#0f172a] text-5xl md:text-7xl font-bold tracking-tight font-serif lowercase leading-none">
                                ream
                            </span>
                        </div>
                    </div>

                    {/* Property Line */}
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-[#c2850a] font-sans mt-[-8px] md:mt-[-16px]">
                        Property
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-lg md:text-xl text-slate-500 font-sans max-w-lg leading-relaxed mt-1"
                >
                    Premium Residential & Commercial Projects Across Pune.
                </motion.p>

                {/* Badge: NO BROKERAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="flex items-center mt-2"
                >
                    <div 
                        className="inline-flex items-center gap-2.5 bg-[#0f172a] text-white pl-5 pr-9 py-2.5 md:py-3 shadow-lg select-none relative"
                        style={{
                            clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
                            borderRadius: "8px 0px 0px 8px"
                        }}
                    >
                        <svg className="w-4 h-4 text-[#c2850a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 013 10V5a2 2 0 012-2h5a1 1 0 01.707.293l7 7zM10 8a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-sans font-extrabold tracking-widest text-xs md:text-sm">
                            NO BROKERAGE
                        </span>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="flex items-center gap-6 md:gap-8 mt-6 md:mt-8"
                >
                    <div>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-[#c2850a]">
                            <Odometer value="100+" />
                        </h3>
                        <p className="text-slate-400 text-xs md:text-sm font-semibold mt-1 font-sans">Projects</p>
                    </div>

                    <div className="w-px h-10 bg-slate-200 self-center" />

                    <div>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-[#c2850a]">
                            <Odometer value="25+" />
                        </h3>
                        <p className="text-slate-400 text-xs md:text-sm font-semibold mt-1 font-sans">Developers</p>
                    </div>

                    <div className="w-px h-10 bg-slate-200 self-center" />

                    <div>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-[#c2850a]">
                            <Odometer value="500+" />
                        </h3>
                        <p className="text-slate-400 text-xs md:text-sm font-semibold mt-1 font-sans">Happy Clients</p>
                    </div>
                </motion.div>
            </div>

            {/* Right Column Image */}
            <div className="lg:w-[48%] w-full relative z-10 flex justify-center items-center p-8 lg:pr-20">
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative group w-full max-w-xl"
                >
                    <img 
                        src={heroFamilyImg} 
                        alt="BHKMate Dream Property" 
                        className="relative rounded-[2rem] shadow-[0_20px_50px_rgba(15,23,42,0.08)] w-full h-[350px] sm:h-[450px] lg:h-[500px] object-cover border border-slate-200/40"
                    />
                </motion.div>
            </div>

            {/* Custom Styles for Google Fonts */}
            <style dangerouslySetInnerHTML={{__html: `
                @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:wght@700&display=swap');
                .font-script-d {
                    font-family: 'Pinyon Script', cursive !important;
                }
            `}} />
        </section>
    );
};

export default Hero3D;