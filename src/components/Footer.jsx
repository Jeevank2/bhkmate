const Footer = () => {
  return (
    <footer className="bg-[#020617] py-10 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h3 className="text-3xl font-bold">
          BHKMate Properties
        </h3>

        <p className="text-gray-400 mt-4">
          Your Trusted Real Estate Partner
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 text-sm text-gray-400">
          <span>📞 Phone: <a href="tel:7020022341" className="text-white hover:text-yellow-500 font-semibold">+91 7020022341</a></span>
          <span className="hidden sm:inline text-gray-700">|</span>
          <span>🚗 Free Site Visits Available</span>
        </div>

        <p className="text-gray-500 mt-6">
          © 2026 BHKMate Properties. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
