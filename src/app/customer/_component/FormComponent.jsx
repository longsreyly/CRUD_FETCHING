
import { useState, useEffect } from "react";

const FormComponent = ({ customer, onFormSubmit }) => {
    // Use default values for customer to avoid null errors
    const [formData, setFormData] = useState({
        customerName: customer?.customerName || "",
        gender: customer?.gender || "",
        address: customer?.address || "",
    });

    useEffect(() => {
        setFormData({
            customerName: customer?.customerName || "",
            gender: customer?.gender || "",
            address: customer?.address || "",
        });
    }, [customer]); // Update formData whenever customer changes

    // Handal on button add vustomer
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        await onFormSubmit(formData); // Submit form data to parent
        setFormData({ customerName: "", gender: "", address: "" }); // Clear form fields
    };



    return (
        <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
            <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                            {customer ? "Edit Customer" : "Add Customer"}
                        </h1>
                    </div>
                    <div className="mt-5">
                        <form
                            onSubmit={handleSubmit}>
                            <div className="grid gap-y-4">
                                {/* Customer Name */}
                                <div>
                                    <label htmlFor="customerName" className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                                        Customer Name
                                    </label>
                                    <input
                                        id="customerName"
                                        name="customerName"
                                        type="text"
                                        value={formData.customerName}
                                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        style={{ border: "1px solid", borderRadius: "5px" }}
                                    />
                                </div>
                                {/* Gender */}
                                <div>
                                    <label htmlFor="gender" className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                                        Customer Gender
                                    </label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        style={{ border: "1px solid", borderRadius: "5px" }}
                                    >
                                        <option value="">Select...</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                    </select>
                                </div>
                                {/* Address */}
                                <div>
                                    <label htmlFor="address" className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                                        Customer Address
                                    </label>
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        style={{ border: "1px solid", borderRadius: "5px" }}
                                    />
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
