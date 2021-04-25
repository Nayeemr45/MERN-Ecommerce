import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('seller')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('seller')).token}`;
    }
    else if(localStorage.getItem('profile')){
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });

export const fetchProducts = () => API.get('/product');
export const getProductsDetails = (id) => API.get(`/product/${id}`);
export const getProducts = (id) => API.get(`/product/${id}`);
export const createProduct = (newProduct) => API.post('/product/Add_Product', newProduct);
export const updateProduct = (id, updatedProduct) => API.patch(`/posts/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`/posts/${id}`);

export const createOrder = (order) => API.post(`/orders` , order);
export const getOrderDetails = (id) => API.get(`/orders/${id}`);
export const payOrder = (orderId) => API.put(`/orders/${orderId}/pay`);
export const deliverOrder = (order) => API.put(`/api/orders/${order._id}/deliver`);
export const listMyOrders = () => API.put(`/api/orders/myorders`);
export const listOrders = () => API.pgetut(`/api/orders`);



export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const sellerSignIn = (formData) => API.post('/seller/signin', formData);
export const sellerSignUp = (formData) => API.post('/seller/signup', formData);