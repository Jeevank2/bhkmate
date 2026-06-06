import {
    FaBuilding,
    FaHandshake,
    FaHome,
    FaMoneyCheckAlt,
} from "react-icons/fa";

const features = [
    {
        icon: <FaBuilding size={40} />,
        title: "100+ Projects",
        desc: "Verified residential & commercial projects across Pune",
    },
    {
        icon: <FaHandshake size={40} />,
        title: "Trusted Developers",
        desc: "Partnership with top builders and developers",
    },
    {
        icon: <FaHome size={40} />,
        title: "Free Site Visits",
        desc: "Schedule hassle-free property visits",
    },
    {
        icon: <FaMoneyCheckAlt size={40} />,
        title: "Home Loan Support",
        desc: "Get assistance from leading banks",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center mb-4">
                    Why Choose
                    <span className="text-yellow-500"> BHKMate</span>
                </h2>

                <p className="text-center text-gray-400 mb-16">
                    Your trusted real estate partner in Pune
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#101b33] p-8 rounded-2xl text-center hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="text-yellow-500 flex justify-center mb-4">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-400">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;