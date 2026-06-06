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
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center mb-4 text-slate-900">
                    Why Choose
                    <span className="text-yellow-600"> BHKMate</span>
                </h2>

                <p className="text-center text-slate-500 mb-16">
                    Your trusted real estate partner in Pune
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100/80 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-slate-800"
                        >
                            <div className="text-yellow-600 flex justify-center mb-4">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-slate-900">
                                {item.title}
                            </h3>

                            <p className="text-slate-500">
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