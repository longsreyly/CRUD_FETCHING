"use client";
import AnimationComponent from '@/components/AnimationComponent';

const AboutPage = () => {
    const content = `Welcome to Test-Product, where innovation meets quality. We are passionate about providing premium products that enrich your daily life and align with modern aesthetics.
    At Test-Product, we believe in creating value for our customers by blending creativity, functionality, and sustainability. Each product is crafted with meticulous attention to detail, ensuring not only exceptional design but also enduring performance.
    Founded on the principles of trust and excellence, our mission is to inspire and empower individuals through products that make a difference. Whether you’re looking for solutions to elevate your lifestyle or seeking unique designs to express your personality, we are here to serve you.`;

    AnimationComponent();

    return (
        <main className="mx-10">
            <div className="grid grid-cols-2 mt-8">
                {/* Left Image */}
                <div className="flex justify-center">
                    <img data-aos="fade-right" alt="About Page Image" src="assets/img/gallery/about.jpg" className="w-[500px] mt-24" />
                </div>

                {/* Right Content */}
                {[1, 2].map((id) => (
                    <div key={id} className="mt-40" data-aos="fade-left">
                        <p className="text-center">{content}</p>
                    </div>
                ))}

                {/* Right Image */}
                <div className="flex justify-center">
                    <img data-aos="fade-right" alt="About Page Image" src="assets/img/gallery/about1.jpg" className="w-[500px] mt-24" />
                </div>
            </div>
        </main>
    );
};

export default AboutPage;
