import { FaBuilding, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-200/50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                <div className="flex items-center gap-2">
                    <FaBuilding className="text-yellow-500 text-2xl" />
                    <h1 className="text-2xl font-bold text-slate-900">
                        BHKMate Properties
                    </h1>
                </div>

                <div className="hidden md:flex items-center gap-8 text-slate-700">
                    <a href="#" className="hover:text-yellow-600 transition-colors font-medium">Home</a>
                    <a href="#projects" className="hover:text-yellow-600 transition-colors font-medium">Projects</a>
                    <a href="#contact" className="hover:text-yellow-600 transition-colors font-medium">Contact</a>
                    <a href="tel:7020022341" className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300">
                        <FaPhoneAlt /> Call: +91 7020022341
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;