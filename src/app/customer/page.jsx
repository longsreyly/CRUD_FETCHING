"use client"
import { getAllCustomerService, insertCustomerService, updateCustomerService } from "@/service/customer.service";
import { useEffect, useState } from "react";
import FormComponent from "./_component/FormComponent";
import TableComponent from "@/components/TableComponent";
import { deleteCustomerServiceAction } from "../action/customerAction";

const CustomerComponent = () => {
    const [customerData, setCustomerData] = useState([]); // State for customer data
    const [editingCustomer, setEditingCustomer] = useState(null); // State for editing a customer
    const [selectedCustomer, setSelectedCustomer] = useState(null);


    // Example of setting a default value:
    useEffect(() => {if (!selectedCustomer) { setSelectedCustomer({ customerName: "", gender: "", address: "" });}},[selectedCustomer]);
    // Fetch customer data on component mount
    useEffect(() => {
        const fetchData = async () => {
        const data = await getAllCustomerService();
        setCustomerData(data);
    };fetchData();},[]);

    // Handle form submission for adding/updating customers
    const handleFormSubmit = async (data) => {
        if (editingCustomer) {
            // Update existing customer
            const updatedCustomer = await updateCustomerService(editingCustomer.id, data);
            setCustomerData((prev) =>
                prev.map((customer) => (customer.id === editingCustomer.id ? updatedCustomer : customer))
            );
        } else {
            // Add new customer
            const newCustomer = await insertCustomerService(data);
            setCustomerData((prev) => [...prev, newCustomer]);
        }
        setEditingCustomer(null); // Reset edit state
    };

    // Handle customer edit
    const handleEditCustomer = (customer) => {setEditingCustomer(customer);};// Set the customer to edit

    // Handle customer delete
    const handleDeleteCustomer = async (customerId) => {
        const updatedData = await deleteCustomerServiceAction(customerId); setCustomerData(updatedData); }; // Update the state with the latest customer data

    return (
        <>
        <main className="mx-10">
            <div className="grid grid-cols-2 d-flex" >
                <div>
                    {/* Form for adding or editing customers */}
                    <FormComponent customer={editingCustomer} onFormSubmit={handleFormSubmit} />
                </div>
                <div>
                    <h1 className="mb-[35px]"></h1>
                    <TableComponent customerData={customerData} onEditCustomer={handleEditCustomer} onDeleteCustomer={handleDeleteCustomer} />
                </div>
            </div>
        </main>
        </>
    );
};
export default CustomerComponent;
