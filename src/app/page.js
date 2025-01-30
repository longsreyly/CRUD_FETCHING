"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { getAllCategorieService, getAllCustomerService, getAllProductService } from "@/service/product.service";

export default function Home() {
  const [products, setProducts] = useState([]); // State to store products
  const [category, setCategory] = useState([]); // State to store category
  const [customer, setCustomer] = useState([]); // State to store customer
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility

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

  // Fetch products from the service
  useEffect(() => {
    const fetchCustomer = async () => {
      const fetchedCustomer = await getAllCustomerService();
      setCustomer(fetchedCustomer); // Set products in the state
    };
    fetchCustomer();
  }, []);

  return (
    <main className="w-full">
      <section className="container d-block m-auto mt-10 p-20" data-aos="zoom-in">
        <div className="text-center">
          <h1 className="text-3xl"> <b>Cambodian Based <br /> Product  Service For Customers</b></h1>
          <small>Get high-quality aesthetic  of your valuable products within a few days.</small>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => setIsOpen(true)} className="mt-8 rounded-xl bg-pink-400 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-pink-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]" href="#">
            View Details
          </button>
        </div>
      </section>
      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-1/3 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Product Details</h2>
            <p className="text-gray-600 text-center"><b>Sorry don't have product details.🙂‍</b></p>

            {/* Close Button */}
            <div className="mt-6 text-center">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition" >Close</button>
            </div>
          </div>
        </div>
      )}

      <hr className="mt-10"></hr>

      {/* Products Section */}
      <section>
        <div className="mt-10">
          <h1 className="text-center text-xl">
            <b>Products</b>
          </h1>
        </div>
        {/* Cards for displaying products */}
        <div className="grid grid-cols-5" style={{ display: 'flex', justifyContent: 'center' }} >
          {products.length > 0 ? (
            // Display only the first 10 products
            products.slice(10, 15).map((product, index) => (
              <div className="cursor-pointer flex-shrink-0 m-6 relative overflow-hidden bg-gray-100 rounded-lg max-w-xs shadow-lg" key={product.id || index}>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <img className="cursor-pointer relative w-40 rounded-md" src={product.images} alt={product.images} />
                </div>
                <div className="relative text-black text-center px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">{product.title}</span>
                  <span className="block opacity-75 -mb-1">{product.price}$</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <span className="loading loading-infinity loading-xs"></span>
            </div> // Loading state if products are not available yet
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
        <div className="grid grid-cols-5" style={{ display: 'flex', justifyContent: 'center' }} >
          {category.length > 0 ? (
            // Display only the first 10 categories
            category.slice(0, 5).map((category, index) => (
              <div className="cursor-pointer flex-shrink-0 m-6 relative overflow-hidden bg-gray-100 rounded-lg max-w-xs shadow-lg" key={category.id || index}>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <img className="relative w-40 rounded-md" src={category.image} alt={category.image} />
                </div>
                <div className="relative text-black text-center px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">{category.name}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <span className="loading loading-infinity loading-xs"></span>
            </div> // Loading state if category are not available yet
          )}
        </div>
      </section>

      <hr className="mt-10"></hr>


      {/* Customer image */}
      <section style={{ width: '100px', display: 'block', margin: 'auto' }}>
        <div className="mt-10">
          <h1 className="text-center text-xl">
            <b>our teams</b>
          </h1>
        </div>
        {/* Cards for displaying gayegories */}
        <div className="grid grid-cols-3 container" style={{ display: 'flex', justifyContent: 'center' }} >
          {customer.length > 0 ? (
            // Display only the first 10 categories
            customer.slice(0, 3).map((customer, index) => (
              <div className="cursor-pointer flex-shrink-0 m-6 relative overflow-hidden bg-gray-100 rounded-lg max-w-xs shadow-lg" key={customer.id || index}>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <img className="relative w-40 rounded-md" src={customer.avatar} alt={customer.avatar} />
                </div>
                <div className="relative text-black text-center px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">{customer.name}</span>
                  <span className="block opacity-75 -mb-1">{customer.email}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
               <span className="loading loading-infinity loading-xs"></span>
            </div> // Loading state if customer are not available yet
          )}
        </div>
      </section>

    </main>
  );
}
