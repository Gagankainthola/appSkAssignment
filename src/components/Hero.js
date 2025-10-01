import heroImage from "../assets/hero-image.png";

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto  px-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-4xl md:text-6xl font-semibold text-black leading-snug mb-6">
            Discover elegant & affordable furniture for every room.
          </p>
           {/* Buttons aligned to bottom */}
          <div className="flex flex-col md:flex-row gap-4 mt-auto">
            <button className="bg-black text-white px-6 py-">
              Shop Now
            </button>
            <button className="bg-white-200 text-black px-6 py-3 rounded-lg">
              Explore
            </button>
            <button className="bg-white-200 text-black px-6 py-3 rounded-lg">
              Always on time
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <img src={heroImage} alt="Hero" className="w-full max-w-lg" />
        </div>
        
      </div>
    </section>
  );
}
