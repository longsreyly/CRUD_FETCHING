"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form"; // Import useForm
import AnimationComponent from "@/components/AnimationComponent";

export default function ContactForm() {
    AnimationComponent();

    const [status, setStatus] = useState("");

    // Initialize react-hook-form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        setStatus("Sending...");

        const serviceID = "service_gmp5fgs";
        const templateID = "template_s5ax9fo";
        const publicKey = "T_7h1kANvpJqIY_xq";

        emailjs.send(serviceID, templateID, data, publicKey)
            .then((result) => {
                console.log("Email sent successfully:", result.text);
                setStatus("Email sent successfully! 🎉");

                // Reset the form fields after successful submission
                reset();
            })
            .catch((error) => {
                console.error("Error sending email:", error.text);
                setStatus("Failed to send email. Please try again later.");
            });
    };

    return (
        <section className="text-gray-700 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe width="100%" height="100%"
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Phnom%20Penh,Cambodia&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                    style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}>
                </iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex" data-aos="zoom-in-left">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <small className="leading-relaxed mb-5 text-gray-600">
                        Post-ironic portland shabby chic echo park, banjo fashion axe
                    </small>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Input */}
                        <div className="relative mb-4">
                            <label htmlFor="email" className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                {...register('email', {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Please enter a valid email address"
                                    }
                                })}
                                className={`border-indigo-300 w-full bg-white rounded border ${errors.email ? 'border-red-500' : 'border-gray-400'} focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out`}
                            />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                        </div>
                        {/* Message Input */}
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                {...register('message', { required: "Message is required" })}
                                rows="4"
                                className={` focus:ring-blue-200 focus:border-blue-500 border-1 border-indigo-300 w-full mt-1 p-2 border rounded ${errors.message ? 'border-red-500' : 'border-gray-400'}`}
                            />
                            {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                        </div>
                        {/* Submit Button */}
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Send Email
                        </button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </form>
                    {status && <p className="mt-4 text-sm">{status}</p>}
                </div>
            </div>
        </section>
    );
}
