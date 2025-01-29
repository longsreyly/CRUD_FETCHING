//Get All Products
export const getAllProductService = async () =>{
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    return data;
}

//Get All Categories
export const getAllCategorieService = async () =>{
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    const data = await res.json();
    return data;
}

//Get All Customer 
export const getAllCustomerService = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    const data = await res.json();
    return data;
}