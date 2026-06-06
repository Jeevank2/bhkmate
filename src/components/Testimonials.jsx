import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    date: "January 14, 2026",
    rating: 5,
    headline: "Highly Recommended!",
    review: "BHKMate helped me find the perfect apartment in Wakad. Their team assisted with site visits, developer negotiations, and loan approvals. The transition was incredibly smooth!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Priya Patil",
    date: "February 22, 2026",
    rating: 5,
    headline: "Extremely Professional!",
    review: "Very professional team and smooth site visit experience. They have partnerships with top-tier builders in Hinjewadi and Baner. Saved me a lot of research time and got me a great deal.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Amit Joshi",
    date: "March 05, 2026",
    rating: 5,
    headline: "Top-Tier Real Estate Partner!",
    review: "Great property options and excellent support throughout the buying process. BHKMate provided transparent details and matched my commercial budget perfectly. Will definitely work with them again.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
  }
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const slideVariants = {
        enter: (dir) => ({
            x: dir > 0 ? 120 : -120,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (dir) => ({
            x: dir < 0 ? 120 : -120,
            opacity: 0
        })
    };

    const handleNext = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-play timer set to 3 seconds (3000ms)
    useEffect(() => {
        const timer = setInterval(handleNext, 3000);
        return () => clearInterval(timer);
    }, []);

    const active = testimonials[index];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-3xl mx-auto px-6 relative">

                <h2 className="text-5xl font-bold text-center mb-4 text-slate-900 font-sans tracking-tight">
                    Client Testimonials
                </h2>

                <p className="text-center text-slate-500 mb-16 font-sans">
                    What our clients say about their home buying experience
                </p>

                {/* Carousel Card Container */}
                <div className="relative min-h-[340px] flex items-center justify-center">
                    
                    {/* Navigation Arrows */}
                    <button 
                        onClick={handlePrev} 
                        className="absolute left-[-80px] hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-all cursor-pointer z-10 animate-fade-in"
                    >
                        <FaChevronLeft />
                    </button>
                    
                    <button 
                        onClick={handleNext} 
                        className="absolute right-[-80px] hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-all cursor-pointer z-10 animate-fade-in"
                    >
                        <FaChevronRight />
                    </button>

                    {/* Animated Card */}
                    <div className="w-full bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(15,23,42,0.03)] relative overflow-hidden">
                        
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="flex flex-col text-left"
                            >
                                {/* Profile Row */}
                                <div className="flex items-center gap-4">
                                    {/* Avatar */}
                                    <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shadow-inner flex-shrink-0">
                                        <img 
                                            src={active.avatar} 
                                            alt={active.name} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Name and Date */}
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-lg leading-tight font-sans">
                                            {active.name}
                                        </h4>
                                        <p className="text-slate-400 text-sm mt-0.5 font-medium font-sans">
                                            {active.date}
                                        </p>
                                    </div>
                                </div>

                                {/* Stars Row */}
                                <div className="flex gap-1 text-amber-400 mt-5">
                                    {Array.from({ length: active.rating }).map((_, i) => (
                                        <FaStar key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>

                                {/* Headline */}
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug mt-3 font-serif">
                                    {active.headline}
                                </h3>

                                {/* Review Quote */}
                                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal pr-4 mt-2 font-serif">
                                    {active.review}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2.5 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > index ? 1 : -1);
                                setIndex(idx);
                            }}
                            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                                idx === index ? "bg-amber-400 w-8" : "bg-slate-300 hover:bg-slate-400"
                            }`}
                        />
                    ))}
                </div>

                {/* Style adjustments for font compatibility */}
                <style dangerouslySetInnerHTML={{__html: `
                    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
                    .font-serif {
                        font-family: 'Playfair Display', Georgia, Cambria, "Times New Roman", Times, serif !important;
                    }
                `}} />

            </div>
        </section>
    );
};

export default Testimonials;

