import projects from "../data/projects";

const FeaturedProjects = () => {
    return (
        <section
            id="projects"
            className="py-24 bg-[#071120]"
        >
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center mb-4">
                    Featured Projects
                </h2>

                <p className="text-center text-gray-400 mb-12">
                    Explore Premium Properties Across Pune
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-[#101b33] rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-5">

                                <h3 className="text-xl font-bold">
                                    {project.name}
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    {project.location}
                                </p>

                                <p className="text-yellow-500 font-bold mt-3">
                                    {project.price}
                                </p>

                                <button className="w-full mt-5 bg-yellow-500 text-black py-3 rounded-lg font-semibold">
                                    View Details
                                </button>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;