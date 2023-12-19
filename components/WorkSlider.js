// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb7_o.jpg',
        },
        {
          title: 'title',
          path: '/thumb5_a.jpg',
          url: 'https://github.com/bulent017/MVVM-Movie-App'

        },
        {
          title: 'title',
          path: '/thumb3_o.jpg',
          url: 'https://github.com/bulent017/CryptoCurrency'

        },
        {
          title: 'title',
          path: '/thumb1_o1.jpg',
          url: 'https://github.com/bulent017/HikingApp.v2'

          
        },
      ],
    },
    
    {
      images: [
        {
          title: 'title',
          path: '/thumb2_o.jpg',
          url: 'https://github.com/bulent017/Spell_Checker_Ceng303_Project'
        },
        {
          title: 'title',
          path: '/thumb6_o1.jpg',
          url:'https://github.com/bulent017/bulent017.github.io/tree/main/proje1_atu_Sprint3-4'
        },
        {
          title: 'title',
          path: '/thumb4_o.jpg',
          url:'https://github.com/bulent017/ToDo'
        },
        
      ],
    },
    
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                  >
                    <a
                      href={image.url} // Use the URL from the image data
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center justify-center relative overflow-hidden group'
                    >
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt={image.title} />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title and icon */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='delay-100'>LIVE</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
