"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AboutPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (
        <>
            <main className="mx-10">
                <div className="grid grid-cols-2" style={{ marginTop: '30px' }}>
                    <div id="comp-k0qndu82" className="MazNVa comp-k0qndu82 wixui-image">
                        <div data-testid="linkElement" className="j7pOnl" style={{display: 'flex', justifyContent: 'center' }}>
                            <img data-aos="fade-right" alt="About Page Image"width="442"height="547"
                              src="assets/img/gallery/about.jpg" style={{width: "500px", marginTop:'100px'}}/>
                        </div>
                    </div>
                    {/* right content */}
                    <div className="mt-40" data-aos="fade-left">
                        <p className="text-center">
                            Welcome to Test-Product, where innovation meets quality. We are passionate about providing premium products that enrich your daily life and align with modern aesthetics.
                            At Test-Product, we believe in creating value for our customers by blending creativity, functionality, and sustainability. Each product is crafted with meticulous attention to detail, ensuring not only exceptional design but also enduring performance.
                            Founded on the principles of trust and excellence, our mission is to inspire and empower individuals through products that make a difference. Whether you’re looking for solutions to elevate your lifestyle or seeking unique designs to express your personality, we are here to serve you.
                        </p>
                    </div>
                     {/* right content */}
                     <div className="mt-40" data-aos="fade-left">
                        <p className="text-center">
                            Welcome to Test-Product, where innovation meets quality. We are passionate about providing premium products that enrich your daily life and align with modern aesthetics.
                            At Test-Product, we believe in creating value for our customers by blending creativity, functionality, and sustainability. Each product is crafted with meticulous attention to detail, ensuring not only exceptional design but also enduring performance.
                            Founded on the principles of trust and excellence, our mission is to inspire and empower individuals through products that make a difference. Whether you’re looking for solutions to elevate your lifestyle or seeking unique designs to express your personality, we are here to serve you.
                        </p>
                    </div>

                    {/* image */}
                    <div id="comp-k0qndu82" className="MazNVa comp-k0qndu82 wixui-image">
                        <div data-testid="linkElement" className="j7pOnl" style={{ display: 'flex', justifyContent: 'center' }}>
                            <img data-aos="fade-right" alt="About Page Image" src="assets/img/gallery/about1.jpg" style={{width: "500px", marginTop:'100px'}}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
export default AboutPage;
