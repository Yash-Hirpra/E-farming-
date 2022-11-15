import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/product/productsSlice';
import productsByFarmerReducer from '../features/product/productsByFarmerSlice';
import farmersReducer from '../features/farmer/farmersSlice';
import farmersByProductReducer from '../features/farmer/farmersByProductSlice';
import farmerProductReducer from '../features/farmerProduct/farmerProductDetailsSlice';
import cartReducer from '../features/cart/cartSlice';
import { cartMiddleware } from '../features/cart/cartMiddleware';
import userLoginReducer from '../features/user/userLoginSlice';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productsByFarmer: productsByFarmerReducer,
    farmers: farmersReducer,
    farmersByProduct: farmersByProductReducer,
    farmerProduct: farmerProductReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
  },
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
