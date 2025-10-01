
import Card from "./Card";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

import temp from "../assets/temp.png";

export default function MainSection() {
  return (
    <section className="py-20 px-6">

      {/* Popular Section */}
      <h2 className="text-3xl font-normal text-center mb-4">POPULAR</h2>
      <p className="text-4xl md:text-5xl font-normal text-center mb-12">
        Future sale is now on!
      </p>
      <div className="flex flex-col md:flex-row items-center md:justify-around gap-6">
        <Card image={img1} />
        <Card image={img2} />
        <Card image={img3} />
      </div>

      {/* Category Section */}
      <div className="mt-10 px-20 py-10">
        {/* Heading */}
        <h2 className="text-2xl font-normal text-left mb-2">CATEGORY</h2>

        {/* Subtitle */}
        <p className="text-3xl font-semibold text-left mb-8">
          Design your perfect Home
        </p>

        {/* Category Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <Card image={img1} />
          <Card image={img2} />
          <Card image={img3} />
          <Card image={img1} />
        </div>
      </div>
      <section className="bg-white px-2 py-20">
      <div className="container mx-auto  px-32 flex flex-col md:flex-row items-center gap-y-10 md:gap-x-32">
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <img src={temp} alt="Hero" className="w-full max-w-lg" />
        </div>
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
      </div>
    </section>
    </section>
    
  );
}
