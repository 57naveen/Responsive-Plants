import React from "react";

const Services = () => {
  return (
    <div className="bg-white text-green-900 py-20">
      <div className="container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* --------card 1------------ */}
        <div   data-aos="fade-down"
  data-aos-delay="100" className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1  duration-300 space-y-5">
          <div className="flex items-center gap-5">
            <i className="ri-truck-line text-3xl md:text-4xl lg:text-5xl"></i>
            <p className="md:text-lg font-bold">
              Fast <br />
              Delivery
            </p>
          </div>
          <p className="font-Lobster">
           Get your favorite plants delivered to your doorstep quickly and safely. We ensure fast, eco-conscious packaging and timely shipping so your greens arrive fresh and vibrant.
          </p>
        </div>

        {/* --------card 2------------ */}
        <div data-aos="fade-down"
  data-aos-delay="200" className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1  duration-300">
          <div className="flex items-center gap-5">
            <i className="ri-customer-service-line text-3xl md:text-4xl lg:text-5xl"></i>
            <p className="md:text-lg font-bold">
              Great Customer <br />
              Service
            </p>
          </div>
          <p className="font-Lobster">
           Our support team is always here to help — whether you're choosing the right plant, need care tips, or have a delivery question. Friendly, responsive, and plant-loving just like you!


          </p>
        </div>

        {/* --------card 3------------ */}
        <div data-aos="fade-down"
  data-aos-delay="300" className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1  duration-300">
          <div className="flex items-center gap-5">
            <i className="ri-plant-line text-3xl md:text-4xl lg:text-5xl"></i>
            <p className="md:text-lg font-bold">
              Original <br />
              plants
            </p>
          </div>
          <p className="font-Lobster">
           We source only authentic, healthy plants directly from trusted growers. Each plant is hand-picked, ensuring quality, uniqueness, and sustainability.
          </p>
        </div>

        {/* --------card 4------------ */}
        <div data-aos="fade-down"
  data-aos-delay="400" className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1  duration-300">
          <div className="flex items-center gap-5">
            <i className="ri-money-dollar-circle-line text-3xl md:text-4xl lg:text-5xl"></i>
            <p className="md:text-lg font-bold">
              Affordable <br />
              Price
            </p>
          </div>
          <p className="font-Lobster">
           Bringing nature into your space shouldn't cost a fortune. Enjoy premium plants at fair prices — because a greener home is for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
