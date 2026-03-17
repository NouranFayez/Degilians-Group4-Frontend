import axios from "axios";


 const api = axios.create({
    // https://dummyjson.com/products
    baseURL : "https://dummyjson.com/"
})

export default api