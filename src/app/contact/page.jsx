"use client"
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactForm() {

    useEffect(() => { AOS.init({ duration: 800, once: false, }) }, [])

    const [formData, setFormData] = useState({ name: "", email: "", message: "", });
    const [status, setStatus] = useState("");

    const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

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
                setStatus("Email sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            }, (error) => {
                console.error("Error sending email:", error.text);
                setStatus("Failed to send email. Please try again later.");
            }
            );
    };

    return (
        <>
            <div className="p-4 max-w-md  bg-white shadow rounded-lg" style={{ display: 'block', margin: 'auto', marginTop: '30px' }} data-aos="zoom-in">
                <h1 className="text-2xl font-bold mb-4">Feedback</h1>
                <form onSubmit={sendEmail}>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium">
                            Message
                        </label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} requiredrows="4" className="w-full mt-1 p-2 border rounded" style={{ height: '300px' }}></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Email</button>
                </form>
                {status && <p className="mt-4 text-sm">{status}</p>}
            </div>

        </>
    );
}
