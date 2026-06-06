const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Excellent service. BHKMate helped me find the perfect apartment in Wakad."
  },
  {
    name: "Priya Patil",
    review:
      "Very professional team and smooth site visit experience."
  },
  {
    name: "Amit Joshi",
    review:
      "Great property options and excellent support throughout."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#071120]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#101b33] p-8 rounded-2xl border border-white/5"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300">
                {item.review}
              </p>

              <h4 className="mt-6 font-bold text-white">
                {item.name}
              </h4>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
