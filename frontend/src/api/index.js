import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('seller')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('seller')).token}`;
    }
    return req;
  });
  

 export const fetchProducts = () => API.get('/product');
export const createProduct = (newProduct) => API.post('/product/Add_Product', newProduct);
//export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updateProduct = (id, updatedProduct) => API.patch(`/posts/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const sellerSignIn = (formData) => API.post('/seller/signin', formData);
export const sellerSignUp = (formData) => API.post('/seller/signup', formData);