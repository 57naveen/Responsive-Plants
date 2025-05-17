import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const reviews = [
  {
    img: '/images/review-1.jpg',
    name: 'John Doe',
    role: 'Designer',
    message: 'Absolutely love my new Monstera! It arrived healthy and vibrant — adds so much life to my studio.'
  },
  {
    img: '/images/review-2.jpg',
    name: 'Jane Smith',
    role: 'Developer',
    message: 'The succulent pack was perfect! Low maintenance and beautifully packed. Will definitely order again.'
  },
  {
    img: '/images/review-3.jpg',
    name: 'Emily Ray',
    role: 'Manager',
    message: 'Customer service was super helpful with care tips for my fiddle leaf fig. Great experience overall!'
  },
  {
    img: '/images/review-4.jpg',
    name: 'Michael Blue',
    role: 'Engineer',
    message: 'Fast delivery and my snake plant looks even better than in the pictures. Highly recommend this shop!'
  },
  {
    img: '/images/review-2.jpg',
    name: 'Lisa Star',
    role: 'Architect',
    message: 'I’m so happy with my indoor plant bundle. Each one came labeled with care instructions — very thoughtful!'
  }
];


const Review = () => {
  return (
    <section id='review' className='relative mb-20 md:mb-28 overflow-hidden'>

        <div className='absolute -top-8 -left-12 opacity-50'>
            <img src='/images/leaf-4.png' alt='leaf_image' className='w-40 md:w-52 xl:w-64'/>

        </div>

      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">Customer Review</h2>
        <p className="max-w-2xl">Follow instruction for more</p>
      </div>

      <div className='container py-12'>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          speed={400}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col gap-5 bg-green-900 rounded-md p-6'>
                <p className='font-Lobster'>
                  {review.message}
                </p>
                <div className='flex items-center mb-4'>
                  <img src={review.img} className='w-12 h-12  rounded-full' alt='review_image' />
                  <div className='ml-4'>
                    <p className='text text-yellow-500 uppercase'>{review.name}</p>
                    <p>{review.role}</p>
                  </div>
                  <i className='ri-double-quotes-r text-4xl ml-auto'></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Review
