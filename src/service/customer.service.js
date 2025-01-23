//Get All Customer
export const getAllCustomerService = async () =>{
    const res = await fetch("https://655c2c57ab37729791a9f8b0.mockapi.io/api/customer");
    const data = await res.json();
    return data;
}

//Insert Customer
export const insertCustomerService = async (newCustomer) => {
    const res = await fetch (
        "https://655c2c57ab37729791a9f8b0.mockapi.io/api/customer",{
            method: "POST",
            body: JSON.stringify(newCustomer),
            headers: {
                "Content-Type" : "application/json",

           }
        }
        
    );
    const data = await res.json();
    return data;
}

//Delete Customer Service
export const deleteCustomerService = async (customerId) => {
    const res = await fetch (`https://655c2c57ab37729791a9f8b0.mockapi.io/api/customer/${customerId}`,
    {
        method : 'DELETE',
        headers: {
            "Content-Type": 'application/json',
        }
    }
    
); 
    const data = res.json();
    return data;
}

//Update Customer Service
export const updateCustomerService = async (customerId, updatedData) => {
    try {
        const res = await fetch(`https://655c2c57ab37729791a9f8b0.mockapi.io/api/customer/${customerId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData), // Send the updated customer data
        });

        // Check if the response is okay (status 200-299)
        if (!res.ok) {
            throw new Error(`Failed to update customer. Status: ${res.status}`);
        }

        // Parse the response as JSON
        const data = await res.json();

        // Return the updated customer data
        return data;
    } catch (error) {
        console.error("Error updating customer:", error);
        throw error; // Rethrow the error to handle it in the calling code
    }
};





