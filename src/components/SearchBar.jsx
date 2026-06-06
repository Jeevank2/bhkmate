import { FaMapMarkerAlt, FaHome, FaRupeeSign, FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <section className="relative -mt-16 z-20 px-4">
            <div className="max-w-6xl mx-auto bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10 p-6 md:p-8">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* Location Field */}
                    <div className="relative flex flex-col bg-slate-800/40 hover:bg-slate-800/70 border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 group">
                        <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                            Location
                        </label>
                        <div className="relative flex items-center">
                            <FaMapMarkerAlt className="text-yellow-500 mr-2.5 text-sm pointer-events-none" />
                            <select className="w-full bg-transparent text-white pr-6 text-sm font-medium focus:outline-none appearance-none cursor-pointer">
                                <option className="bg-slate-900">Select Location</option>
                                <option className="bg-slate-900">Hinjewadi</option>
                                <option className="bg-slate-900">Wakad</option>
                                <option className="bg-slate-900">Baner</option>
                                <option className="bg-slate-900">Kharadi</option>
                            </select>
                            <div className="absolute right-0 pointer-events-none text-gray-400">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Property Type Field */}
                    <div className="relative flex flex-col bg-slate-800/40 hover:bg-slate-800/70 border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 group">
                        <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                            Property Type
                        </label>
                        <div className="relative flex items-center">
                            <FaHome className="text-yellow-500 mr-2.5 text-sm pointer-events-none" />
                            <select className="w-full bg-transparent text-white pr-6 text-sm font-medium focus:outline-none appearance-none cursor-pointer">
                                <option className="bg-slate-900">Property Type</option>
                                <option className="bg-slate-900">1 BHK</option>
                                <option className="bg-slate-900">2 BHK</option>
                                <option className="bg-slate-900">3 BHK</option>
                                <option className="bg-slate-900">Commercial</option>
                            </select>
                            <div className="absolute right-0 pointer-events-none text-gray-400">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Budget Field */}
                    <div className="relative flex flex-col bg-slate-800/40 hover:bg-slate-800/70 border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 group">
                        <label className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                            Budget
                        </label>
                        <div className="relative flex items-center">
                            <FaRupeeSign className="text-yellow-500 mr-2.5 text-sm pointer-events-none" />
                            <select className="w-full bg-transparent text-white pr-6 text-sm font-medium focus:outline-none appearance-none cursor-pointer">
                                <option className="bg-slate-900">Budget</option>
                                <option className="bg-slate-900">₹30L - ₹50L</option>
                                <option className="bg-slate-900">₹50L - ₹1Cr</option>
                                <option className="bg-slate-900">₹1Cr+</option>
                            </select>
                            <div className="absolute right-0 pointer-events-none text-gray-400">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Search Button */}
                    <button className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] cursor-pointer">
                        <FaSearch className="text-base" />
                        <span className="tracking-wide">Search Properties</span>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default SearchBar;