"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";

const FormComponent = ({ customer, onFormSubmit }) => {
    // Initialize react-hook-form
    const {
        register,
        handleSubmit,
        reset, //Use reset to update form values
        formState: { errors },
    } = useForm({
        defaultValues: {
            customerName: "",
            gender: "",
            address: "",
        },
    });

    // Update form fields when customer changes (for edit mode)
    useEffect(() => {
        if (customer) {
            reset({
                customerName: customer.customerName || "",
                gender: customer.gender || "",
                address: customer.address || "",
            });
        } else {
            reset({ customerName: "", gender: "", address: "" }); //Ensure form resets properly
        }
    }, [customer, reset]);


    // Handle form submission
    const onSubmit = async (data) => {
        await onFormSubmit(data); // Pass form data to parent component
        reset(); // Clear form fields after submission
    };

    return (
        <main id="content" role="main" className="w-full max-w-md mx-auto p-6" data-aos="zoom-in">
            <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                            {customer ? "Edit Customer" : "Add Customer"}
                        </h1>
                    </div>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-y-4">
                                {/* Customer Name */}
                                <div>
                                    <label htmlFor="customerName" className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                                        Customer Name
                                    </label>
                                    <input
                                        id="customerName"
                                        type="text"
                                        {...register("customerName", {
                                            required: "Customer name is required",
                                            minLength: { value: 3, message: "Name must be at least 3 characters" },
                                        })}
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        style={{ border: "1px solid", borderRadius: "5px" }}
                                    />
                                    {errors.customerName && <p className="text-red-500 text-xs mt-1">{errors.customerName.message}</p>}
                                </div>

                                {/* Gender */}
                                <div>
                                    <label htmlFor="gender" className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                                        Customer Gender
                                    </label>
                                    <select
                                        id="gender"
                                        {...register("gender", { required: "Please select gender" })}
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        style={{ border: "1px solid", borderRadius: "5px" }}
                                    >
                                        <option value="">Select...</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                    </select>
                                    {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
                                </div>

                                {/* Address */}
                                <div>
                                    <label htmlFor="address" className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                                        Customer Address
                                    </label>
                                    <input
                                        id="address"
                                        type="text"
                                        {...register("address", { required: "Address is required" })}
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        style={{ border: "1px solid", borderRadius: "5px" }}
                                    />
                                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md max-w-xs border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600"
                                >
                                    {customer ? "Update Customer" : "Add Customer"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FormComponent;
