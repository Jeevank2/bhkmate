import projects from "../data/projects";

const FeaturedProjects = () => {
    return (
        <section
            id="projects"
            className="py-24 bg-slate-50"
        >
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center mb-4 text-slate-900">
                    Featured Projects
                </h2>

                <p className="text-center text-slate-500 mb-12">
                    Explore Premium Properties Across Pune
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl overflow-hidden hover:scale-105 transition duration-300 border border-slate-100/80 shadow-[0_8px_30px_rgba(15,23,42,0.03)] text-slate-800"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-5">

                                <h3 className="text-xl font-bold text-slate-900">
                                    {project.name}
                                </h3>

                                <p className="text-slate-500 mt-2">
                                    {project.location}
                                </p>

                                <p className="text-yellow-600 font-bold mt-3">
                                    {project.price}
                                </p>

                                <button className="w-full mt-5 bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer">
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