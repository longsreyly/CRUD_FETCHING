"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { getAllCategorieService, getAllCustomerService, getAllProductService } from "@/service/product.service";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    Promise.all([getAllProductService(), getAllCategorieService(), getAllCustomerService()])
      .then(([fetchedProducts, fetchedCategory, fetchedCustomer]) => {
        setProducts(fetchedProducts);
        setCategory(fetchedCategory);
        setCustomer(fetchedCustomer);
      });
  }, []);

  return (
    <main className="w-full">
      <section className="container m-auto mt-10 p-20 text-center" data-aos="zoom-in">
        <h1 className="text-3xl font-bold">Cambodian Based <br /> Product Service For Customers</h1>
        <small>Get high-quality aesthetic of your valuable products within a few days.</small> <br></br>
        <button onClick={() => setIsOpen(true)} className="mt-8 rounded-xl bg-pink-400 py-3 px-6 text-white shadow-xl transition-transform hover:scale-[1.02]">
          View Details
        </button>
      </section>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-1/3 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
            <p className="text-gray-600 font-bold">Sorry, no product details available. 🙂‍</p>
            <button onClick={() => setIsOpen(false)} className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">Close</button>
          </div>
        </div>
      )}

      <hr className="mt-10" />

      {[{ title: "Products", data: products.slice(10, 15), key: "id", img: "images", extra: "price$" },
        { title: "Categories", data: category.slice(0, 5), key: "id", img: "image", extra: "name" },
        { title: "Our Teams", data: customer.slice(0, 3), key: "id", img: "avatar", extra: "email" }].map(({ title, data, key, img, extra }) => (
        <section key={title} className="mt-10 text-center">
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="flex justify-center flex-wrap">
            {data.length ? (
              data.map((item, index) => (
                <div key={item[key] || index} className="m-6 bg-gray-100 rounded-lg shadow-lg max-w-xs p-4 text-center">
                  <img className="w-40 rounded-md mx-auto" src={item[img]} alt={item[img]} />
                  <span className="block opacity-75 mt-2">{item[extra]}</span>
                </div>
              ))
            ) : (
              <div className="text-center"><span className="loading loading-infinity loading-xs"></span></div>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
