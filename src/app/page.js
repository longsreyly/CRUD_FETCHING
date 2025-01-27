"use client"
import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    AOS.init({
        duration: 800,
        once: false,
    })
}, [])

  return (
    <main className="w-full">
      {/* Navbar */}
        <NavbarComponent/>
      {/* content Body */}
      <div className="container d-block m-auto mt-10" data-aos="zoom-in">
        <div className="text-center" >
          <h1 className="text-3xl"><b>Cambodian Based <br></br> Product Photography Service</b></h1>
          <small>Get hight-quality aesthetic photography of your valuable products within few days.</small>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="mt-8 rounded-xl bg-pink-400 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-pink-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            href="#">
            Booking
          </button>
        </div>
      </div>

      {/* Block Card */}

      <div className="grid grid-cols-5" style={{ marginTop: "100px" }}>
        <div className="flex px-3 py-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="assets/img/gallery/product-1.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
          </div>
        </div>

        <div className="flex px-3 py-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="assets/img/gallery/product-5.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
          </div>
        </div>


        <div className="flex px-3 py-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="assets/img/gallery/product-2.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
          </div>
        </div>


        <div className="flex px-3 py-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="assets/img/gallery/product-3.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
          </div>
        </div>


        <div className="flex px-3 py-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="assets/img/gallery/product-4.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </main>
  );
}
