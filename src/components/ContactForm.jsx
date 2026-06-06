const ContactForm = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-white text-slate-800"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4 text-slate-900">
          Get In Touch
        </h2>
        <p className="text-center text-slate-600 text-lg mb-12">
          Feel free to contact us for a <span className="text-yellow-600 font-bold">free site visit</span>:{" "}
          <a href="tel:7020022341" className="text-yellow-600 hover:underline font-extrabold">+91 7020022341</a>
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-yellow-500 transition-all"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-yellow-500 transition-all"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-yellow-500 transition-all"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-yellow-500 transition-all"
          />

          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] cursor-pointer"
            >
              Submit Enquiry
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;
