const Footer = () => {
  return (
    <footer className="bg-slate-100 py-10 border-t border-slate-200 text-slate-700">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h3 className="text-3xl font-bold text-slate-900">
          BHKMate Properties
        </h3>

        <p className="text-slate-600 mt-4">
          Your Trusted Real Estate Partner
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 text-sm text-slate-500">
          <span>📞 Phone: <a href="tel:7020022341" className="text-slate-800 hover:text-yellow-600 font-semibold">+91 7020022341</a></span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span>🚗 Free Site Visits Available</span>
        </div>

        <p className="text-slate-400 mt-6 text-xs">
          © 2026 BHKMate Properties. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
