const Footer = () => {
  return (
    <footer className="bg-heritage-navy text-heritage-cream py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start">
          {/* Left - Branding */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-heritage-golden">
              Bengaluru Story
            </h3>
            <p className="text-heritage-cream/80 leading-relaxed">
              Discovering the untold narratives that shaped India's Garden City, 
              from ancient origins to modern dreams.
            </p>
          </div>

          {/* Center - Links */}
          <div className="md:text-center">
            <h4 className="font-semibold mb-4 text-heritage-golden">Explore</h4>
            <ul className="space-y-2 text-heritage-cream/80">
              <li><a href="#timeline" className="hover:text-heritage-golden transition-colors">Timeline</a></li>
              <li><a href="#stories" className="hover:text-heritage-golden transition-colors">Untold Stories</a></li>
              <li><a href="#maps" className="hover:text-heritage-golden transition-colors">Maps & Architecture</a></li>
              <li><a href="#legacy" className="hover:text-heritage-golden transition-colors">Cultural Legacy</a></li>
              <li><a href="#references" className="hover:text-heritage-golden transition-colors">References</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-heritage-cream/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-heritage-cream/60">
          <p className="mb-2 md:mb-0">
            © 2024 Bengaluru Story. Created for educational purposes.
          </p>
          <p>
            Made with <span className="text-red-500">❤️</span> by Nikesh Mekanaboina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
