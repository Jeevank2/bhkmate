const ContactForm = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-black text-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-300 text-lg mb-12">
          Feel free to contact us for a <span className="text-yellow-500 font-bold">free site visit</span>:{" "}
          <a href="tel:7020022341" className="text-yellow-500 hover:underline font-extrabold">+91 7020022341</a>
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-[#101b33] border border-white/10 text-white focus:outline-none focus:border-yellow-500 transition-colors"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl bg-[#101b33] border border-white/10 text-white focus:outline-none focus:border-yellow-500 transition-colors"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-[#101b33] border border-white/10 text-white focus:outline-none focus:border-yellow-500 transition-colors"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-4 rounded-xl bg-[#101b33] border border-white/10 text-white focus:outline-none focus:border-yellow-500 transition-colors"
          />

          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] cursor-pointer"
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
