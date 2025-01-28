"use client"
import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";
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
                <NavbarComponent />
                <div className="grid grid-cols-2" style={{ marginTop: '30px' }}>
                    <div
                        id="comp-k0qndu82"
                        className="MazNVa comp-k0qndu82 wixui-image"
                    >
                        <div data-testid="linkElement" className="j7pOnl" style={{ display: 'flex', justifyContent: 'center' }}>
                            <img data-aos="fade-right"
                                alt="About Page Image"
                                width="442"
                                height="547"
                                src="https://rixincosmetics.com/wp-content/uploads/2024/07/happy-woman-and-skincare-line.webp"
                                style={{
                                    width: "442px",
                                    height: "547px",
                                    objectFit: "cover",
                                }}
                            />
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
                            <img data-aos="fade-right"
                                alt="About Page Image"
                                width="442"
                                height="547"
                                src="data:image/jpeg;base64,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"
                               
                            />
                        </div>
                    </div>

                   
                </div>
            </main>
            <FooterComponent />
        </>
    );
};
export default AboutPage;
