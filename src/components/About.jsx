import React from "react";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">

        <div className="absolute -top-8 -right-12 opacity-50">
            <img className="w-40 md:w-52 xl:w-64" src="/images/leaf-3.png"/>
        </div>

      <div data-aos="fade-down"
  data-aos-delay="100" className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">About Us</h2>
        <p className="max-w-2xl">Follow instruction for more</p>
      </div>

      <div className="container space-y-10 xl:space-y-0">
        {/* -------item 1--------*/}
        <div className="flex flex-col items-center lg:flex-row gap-5">
          {/* -------image-----*/}
          <div data-aos="fade-right"
  data-aos-delay="200" className="w-full lg:w-1/2">
            <img src="/images/plant-1.png" className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto" alt="about_image" />
          </div>

          {/* -------content------- */}
          <div data-aos="fade-left"
  data-aos-delay="300" className="w-full lg:w-1/2">
            <div className="space-y-5">
              <h3>Cultivate your exclusive <span className="text-yellow-500"> organic</span> <br/> garden</h3>
              <p className="text-slate-300 font-Lobster">
               Experience the art of sophisticated greenery. Our hand-selected botanical collection brings timeless elegance and organic beauty to your home — curated for those who appreciate the finest in nature.,</p>
            </div>
          </div>
        </div>

        {/* -------item 2--------*/}
        <div className="flex flex-col items-center lg:flex-row-reverse gap-5">
          {/* -------image-----*/}
          <div data-aos="fade-left"
  data-aos-delay="350" className="w-full lg:w-1/2">
            <img src="/images/plant-2.png" className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto" alt="about_image" />
          </div>

          {/* -------content------- */}
          <div data-aos="fade-right"
  data-aos-delay="500" className="w-full lg:w-1/2">
            <div className="space-y-5">
              <h3>Elevate your<span className="text-yellow-500"> space</span> <br/> with timeless greenery</h3>
              <p className="text-slate-300 font-Lobster">Indulge in the serenity of curated plant design. Our premium botanical collections bring a touch of sophistication and nature’s calm to your home — because elegance grows here.</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
