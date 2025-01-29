"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { getAllCategorieService, getAllProductService } from "@/service/product.service";

export default function Home() {
  const [products, setProducts] = useState([]); // State to store products
  const [category, setCategory] = useState([]); // State to store products

  // Fetch data on component mount
  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    // Fetch products from the service
    const fetchProducts = async () => {
      const fetchedProducts = await getAllProductService();
      setProducts(fetchedProducts); // Set products in the state
    };
    fetchProducts(); 
  }, []); 

  //Fetch categories from the service
  useEffect(() => {
    const fetchCategory = async () => {
      const fetchedCategory = await getAllCategorieService();
      setCategory(fetchedCategory); // Set products in the state
    };
    fetchCategory(); 
  }, []);

  return (
    <main className="w-full">
      <section className="container d-block m-auto mt-10" data-aos="zoom-in">
        <div className="text-center">
          <h1 className="text-3xl">
            <b>
              Cambodian Based <br /> Product Photography Service
            </b>
          </h1>
          <small>
            Get high-quality aesthetic photography of your valuable products within a few days.
          </small>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="mt-8 rounded-xl bg-pink-400 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-pink-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]" href="#">
            Booking
          </button>
        </div>
      </section>

      <hr className="mt-10"></hr>

      {/* Products Section */}
      <section>
        <div className="mt-10">
          <h1 className="text-center text-xl">
            <b>Products</b>
          </h1>
        </div>
        {/* Cards for displaying products */}
        <div className="grid grid-cols-5">
          {products.length > 0 ? (
            // Display only the first 10 products
            products.slice(0, 5).map((product, index) => (
              <div className="flex-shrink-0 m-6 relative overflow-hidden bg-gray-100 rounded-lg max-w-xs shadow-lg" key={product.id || index}>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <img className="relative w-40 rounded-md" src={product.images} alt={product.images} />
                </div>
                <div className="relative text-black text-center px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">{product.title}</span>
                  <span className="block opacity-75 -mb-1">{product.price}$</span>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div> // Loading state if products are not available yet
          )}
        </div>
      </section>

        {/* Categories Section */}
        <section>
        <div className="mt-10">
          <h1 className="text-center text-xl">
            <b>Categories</b>
          </h1>
        </div>
        {/* Cards for displaying gayegories */}
        <div className="grid grid-cols-5">
          {category.length > 0 ? (
            // Display only the first 10 categories
            category.slice(0, 5).map((category, index) => (
              <div className="flex-shrink-0 m-6 relative overflow-hidden bg-gray-100 rounded-lg max-w-xs shadow-lg" key={category.id || index}>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <img className="relative w-40" src={category.image} alt={category.image} />
                </div>
                <div className="relative text-black text-center px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">{category.name}</span>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div> // Loading state if category are not available yet
          )}
        </div>
      </section>
    </main>
  );
}
