import Odometer from "./Odometer";

const Stats = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-5xl font-bold text-yellow-600">
              <Odometer value="100+" />
            </h2>
            <p className="mt-2 text-slate-600 font-medium">
              Projects
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-600">
              <Odometer value="25+" />
            </h2>
            <p className="mt-2 text-slate-600 font-medium">
              Developers
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-600">
              <Odometer value="500+" />
            </h2>
            <p className="mt-2 text-slate-600 font-medium">
              Happy Clients
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-600">
              <Odometer value="1000+" />
            </h2>
            <p className="mt-2 text-slate-600 font-medium">
              Site Visits
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
