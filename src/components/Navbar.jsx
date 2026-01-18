export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-md">
      <h2 className="text-xl md:text-2xl font-bold">PAPA STITCHES</h2>

      <div className="space-x-6 text-sm md:text-base">
        <a href="#gallery" className="hover:text-gray-300 transition">Gallery</a>
        <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
      </div>
    </nav>
  );
}
