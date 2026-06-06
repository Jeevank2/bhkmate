import { motion } from "framer-motion";
import heroFamilyImg from "../assets/hero-family.jpg";

const Hero3D = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#020617] via-[#07122a] to-black flex flex-col lg:flex-row items-center justify-center pt-32 pb-36 lg:pt-28 lg:pb-28">

            {/* Background blur circles */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="lg:w-1/2 p-8 relative z-10 lg:pl-16">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
                >
                    Find Your
                    <br />
                    <span className="text-yellow-500">Dream Property</span>
                </motion.h1>

                <p className="mt-6 text-xl text-gray-300 max-w-lg">
                    Premium Residential & Commercial Projects Across Pune.
                </p>

                {/* Stats Section */}
                <div className="flex gap-8 mt-12 text-white">
                    <div>
                        <h3 className="text-3xl font-bold text-yellow-500">
                            100+
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">Projects</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-yellow-500">
                            25+
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">Developers</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-yellow-500">
                            500+
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 w-full relative z-10 flex justify-center items-center p-8 lg:pr-16">
                <div className="relative group w-full max-w-lg">
                    {/* Glow effect behind the image */}
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-55 transition duration-1000 group-hover:duration-200" />
                    
                    <img 
                        src={heroFamilyImg} 
                        alt="BHKMate Dream Property" 
                        className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover border border-white/10"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero3D;