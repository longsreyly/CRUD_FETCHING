"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function Home() {
  const card = [
    { title: "The Coldest Sunset", content: "Lorem ipsum dolor sit amet...", img: "assets/img/gallery/product-1.jpg" },
    { title: "Winter Wonderland", content: "Lorem ipsum dolor sit amet...", img: "assets/img/gallery/product-2.jpg" },
    { title: "Majestic Mountains", content: "Lorem ipsum dolor sit amet...", img: "assets/img/gallery/product-3.jpg" },
    { title: "Peaceful Ocean", content: "Lorem ipsum dolor sit amet...", img: "assets/img/gallery/product-4.jpg" },
    { title: "Golden Hour", content: "Lorem ipsum dolor sit amet...", img: "assets/img/gallery/product-5.jpg" },
  ];
  const lipStick = [
    {title:"3CE mood",img: "assets/img/gallery/3ce1.jpg" },
    {title:"3CE mood",img: "assets/img/gallery/3ce2.jpg" },
    {title:"3CE mood",img: "assets/img/gallery/3ce3.jpg" },
    {title:"3CE mood",img: "assets/img/gallery/3ce4.jpg" },
    {title:"3CE mood",img: "assets/img/gallery/3ce5.jpg" },

    {title:"romand mood",img: "assets/img/gallery/romand.jpg" },
    {title:"romand mood",img: "assets/img/gallery/romand2.jpg" },
    {title:"romand mood",img: "assets/img/gallery/romand3.jpg" },
    {title:"romand mood",img: "assets/img/gallery/romand2.jpg" },
    {title:"romand mood",img: "assets/img/gallery/romand5.jpg" },

  ]
  useEffect(() => {
    AOS.init({ duration: 800, once: false, });
  }, []);
  return (
    <main className="w-full">
      <section className="container d-block m-auto mt-10" data-aos="zoom-in">
        <div className="text-center">
          <h1 className="text-3xl"> <b>Cambodian Based <br /> Product Photography Service</b></h1>
          <small> Get high-quality aesthetic photography of your valuable products within a few days.</small>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="mt-8 rounded-xl bg-pink-400 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-pink-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]" href="#"> Booking</button>
        </div>
      </section>
      <section className="mt-10">
        <Swiper
          effect="coverflow"
          centeredSlides
          slidesPerView="auto"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{ rotate: 30, stretch: 0, depth: 200, modifier: 1, slideShadows: true }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
        >
          {card.map((data, index) => (
            <SwiperSlide key={data.id || index}>
              <div className="max-w-sm mx-auto rounded shadow-lg overflow-hidden" data-aos="zoom-in">
                <img className="w-full h-48 object-cover rounded-t" src={data.img} alt={data.title} />
                <div className="p-6 text-center">
                  <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                  <p className="text-gray-700">{data.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <hr className="mt-10"></hr>
      {/* second content */}
      <section>
        <div className="mt-10">
          <h1 className="text-center text-xl"><b>Lip Stick Products</b></h1>
        </div>
        {/* card lip stick product */}
        <div className="grid grid-cols-5">
          {lipStick.map((stick,index)=>(
              <div className="flex-shrink-0 m-6 relative overflow-hidden bg-gray-100 rounded-lg max-w-xs shadow-lg" key={stick.id || index}>
              <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                  style={{transform: 'scale(1.5)',opacity: '0.1'}}>
                  <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                  <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                  <img className="relative w-40" src={stick.img} alt=""/>
              </div>
              <div className="relative text-black text-center px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">{stick.title}</span>
              </div>
          </div>
          ))}        
        </div>
      </section>
    </main>
  );
}
