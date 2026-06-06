const About = () => {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                            alt="Property"
                            className="rounded-3xl"
                        />
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold mb-6">
                            About
                            <span className="text-yellow-500">
                                {" "}BHKMate
                            </span>
                        </h2>

                        <p className="text-gray-300 text-lg leading-8">
                            BHKMate Properties is a trusted real estate
                            channel partner helping customers discover
                            premium residential and commercial properties
                            across Pune.

                            We connect buyers with verified developers,
                            provide site visit assistance, home loan
                            support, and ensure a smooth property
                            buying experience.
                        </p>

                        <button className="mt-8 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold">
                            Know More
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;