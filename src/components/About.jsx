import React from "react";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">

        <div className="absolute -top-8 -right-12 opacity-50">
            <img className="w-40 md:w-52 xl:w-64" src="/images/leaf-3.png"/>
        </div>

      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">About Us</h2>
        <p className="max-w-2xl">Follow instruction for more</p>
      </div>

      <div className="container space-y-10 xl:space-y-0">
        {/* -------item 1--------*/}
        <div className="flex flex-col items-center lg:flex-row gap-5">
          {/* -------image-----*/}
          <div className="w-full lg:w-1/2">
            <img src="/images/plant-1.png" className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto" alt="about_image" />
          </div>

          {/* -------content------- */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              <h3>Make your <span className="text-yellow-500">organic</span> <br/> garden</h3>
              <p className="text-slate-300 font-Lobster">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
            </div>
          </div>
        </div>

        {/* -------item 2--------*/}
        <div className="flex flex-col items-center lg:flex-row-reverse gap-5">
          {/* -------image-----*/}
          <div className="w-full lg:w-1/2">
            <img src="/images/plant-2.png" className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto" alt="about_image" />
          </div>

          {/* -------content------- */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              <h3>Come with us<span className="text-yellow-500">your plant</span> <br/> garden</h3>
              <p className="text-slate-300 font-Lobster">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
