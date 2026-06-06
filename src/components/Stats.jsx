const Stats = () => {
  return (
    <section className="py-20 bg-[#071120]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-5xl font-bold text-yellow-500">
              100+
            </h2>
            <p className="mt-2 text-gray-300">
              Projects
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-500">
              25+
            </h2>
            <p className="mt-2 text-gray-300">
              Developers
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-500">
              500+
            </h2>
            <p className="mt-2 text-gray-300">
              Happy Clients
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-500">
              1000+
            </h2>
            <p className="mt-2 text-gray-300">
              Site Visits
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
