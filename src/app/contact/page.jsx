"use client"
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function ContactForm() {

    const [formData, setFormData] = useState({ name: "", email: "", message: "", });
    const [status, setStatus] = useState("");

    const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };
    // Handle animation
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        // Replace with your EmailJS values
        const serviceID = "service_gmp5fgs";
        const templateID = "template_s5ax9fo";
        const publicKey = "T_7h1kANvpJqIY_xq";

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((result) => {
                console.log("Email sent successfully:", result.text);
                setStatus("Email sent successfully!🎉");
                setFormData({ name: "", email: "", message: "" });
            }, (error) => {
                console.error("Error sending email:", error.text);
                setStatus("Failed to send email. Please try again later.");
            }
            );
    };

    return (
        <section className="text-gray-700 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe width="100%" height="100%"
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Phnom%20Penh,Cambodia&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                    style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}>
                </iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <small className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</small>
                    <form onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium">
                                Message
                            </label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} requiredrows="4" className="border-1 border-indigo-300 w-full mt-1 p-2 border rounded" style={{ height: '200px' }}></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Email</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </form>
                    {status && <p className="mt-4 text-sm">{status}</p>}
                </div>
            </div>
        </section>

    );
}
