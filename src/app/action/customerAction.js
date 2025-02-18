"use server";
import {
  deleteCustomerService,
  getAllCustomerService,
  insertCustomerService,
  updateCustomerService,
} from "@/service/customer.service";
import { revalidateTag } from "next/cache";

//Insert Customer Service
// export async function handlerCustomerInput(customerInput) {
//     console.log('Customer Innfo', customerInput);
//     // Define new Customer
//     const newCustomer = {
//         customerName: customerInput.get("customerName"),
//         gender: customerInput.get("gender"),
//         address: customerInput.get("address"),

//     };
//     await insertCustomerService(newCustomer)
//     revalidateTag('customer')
// }

// insert customer service
export async function handleCustomerInput() {
  const newCustomer = {
    customerName: handleCustomerInput.get("customerName"),
    gender: "Female",
    address: handleCustomerInput.get("address"),
  };
  await insertCustomerService(newCustomer);
  revalidateTag("customer");
}

// Delete Customer Action
export async function deleteCustomerServiceAction(customerId) {
  await deleteCustomerService(customerId); // Assuming this is your delete API call
  const updatedData = await getAllCustomerService(); // Re-fetch the data after deletion
  return updatedData;
}

// //update customer action
// export async function updateCustomerServiceAction(customerId) {
//     const updatedData = {
//         customerName: "Updated Name",
//         gender: "Female",
//         address: "Updated Address",
//     };
//     const updatedCustomer = await updateCustomerService(customerId, updatedData);
//     console.log(updatedCustomer); // Log the updated customer details
// }
