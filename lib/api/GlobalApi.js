import Client from "./Client"



const latestProducts = () => Client.get("/products?sort=createdAt:desc&populate=*")

const getProducts = () => Client.get("/products?populate=*")

const getProducts2 = () => Client.get("/products?pagination[page]=1&pagination[pageSize]=4&populate=*")


const getProductById = (id) => Client.get(`/products/${id}?populate=*`)

const getAllCategory = () => Client.get(`/categories?populate=*`)

const getCategory = (i) => Client.get(`/categories?filters[sub_categories][id][$eq]=${i}&populate=*`)

const addOrder = (payload) => Client.post("/orders", payload)

const popularProducts = () => Client.get(`/products?filters[isPopular][$eq]=true&pagination[page]=1&pagination[pageSize]=4&populate=*`)



export default { latestProducts, addOrder, getProducts, getProductById, getAllCategory, getCategory, popularProducts, getProducts2 }