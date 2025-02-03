"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import AnimationComponent from "@/components/AnimationComponent";

export default function ContactForm() {
    AnimationComponent();
    const [status, setStatus] = useState("");
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setStatus("Sending...");
        emailjs.send("service_gmp5fgs", "template_s5ax9fo", data, "T_7h1kANvpJqIY_xq")
            .then(() => {
                setStatus("Email sent successfully! 🎉");
                reset();
            })
            .catch(() => setStatus("Failed to send email. Please try again later."));
    };

    return (
        <section className="relative text-gray-700">
            <div className="absolute inset-0 bg-gray-300">
                <iframe width="100%" height="100%" src="https://maps.google.com/maps?q=Phnom%20Penh,Cambodia&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex" data-aos="zoom-in-left">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 relative z-10 w-full">
                    <h2 className="text-lg font-medium text-gray-900">Feedback</h2>
                    <small className="text-gray-600 leading-relaxed mb-5">Post-ironic portland shabby chic echo park.</small>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Email</label>
                            <input type="email" {...register('email', { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email" } })} className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded`} />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Message</label>
                            <textarea rows="4" {...register('message', { required: "Message is required" })} className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-400'} rounded`} />
                            {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Email</button>
                        {status && <p className="mt-4 text-sm">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
