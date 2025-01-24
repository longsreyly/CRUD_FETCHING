import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";

const AboutPage = () => {
    return (
        <>
            <main className="mx-10">
                <NavbarComponent />
                <div className="grid grid-cols-2" style={{ marginTop: '30px' }}>
                    <div id="comp-k0gca0oi"
                        className="comp-k0gca0oi YzqVVZ wixui-column-strip__column d-flex justify-center">
                        <div
                            id="bgLayers_comp-k0gca0oi"
                            data-hook="bgLayers"
                            data-motion-part="BG_LAYER comp-k0gca0oi"
                            className="MW5IWV"
                        >
                            <div data-testid="colorUnderlay" className="LWbAav Kv1aVt"></div>
                            <div
                                id="bgMedia_comp-k0gca0oi"
                                data-motion-part="BG_MEDIA comp-k0gca0oi"
                                className="VgO9Yg"
                            ></div>
                        </div>
                        <div
                            data-mesh-id="comp-k0gca0oiinlineContent"
                            data-testid="inline-content"
                        >
                            <div
                                data-mesh-id="comp-k0gca0oiinlineContent-gridContainer"
                                data-testid="mesh-container-content"
                            >
                                <div
                                    id="comp-k0qndu82"
                                    className="MazNVa comp-k0qndu82 wixui-image"
                                >
                                    <div data-testid="linkElement" className="j7pOnl" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            alt="About Page Image"
                                            width="442"
                                            height="547"
                                            srcSet="https://rixincosmetics.com/wp-content/uploads/2024/07/happy-woman-and-skincare-line.webp"
                                            style={{
                                                width: "442px",
                                                height: "547px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right content */}
                    <div className="mt-40">
                        <p className="text-center">
                            Welcome to Test-Product, where innovation meets quality. We are passionate about providing premium products that enrich your daily life and align with modern aesthetics.

                            At Test-Product, we believe in creating value for our customers by blending creativity, functionality, and sustainability. Each product is crafted with meticulous attention to detail, ensuring not only exceptional design but also enduring performance.

                            Founded on the principles of trust and excellence, our mission is to inspire and empower individuals through products that make a difference. Whether you’re looking for solutions to elevate your lifestyle or seeking unique designs to express your personality, we are here to serve you.
                        </p>
                    </div>
                </div>
            </main>
            <FooterComponent />
        </>
    );
};
export default AboutPage;
