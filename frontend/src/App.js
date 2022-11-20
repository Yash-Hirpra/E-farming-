import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import HomeScreen from './screens/ShoppingProcessScreens/HomeScreen';
import FarmersScreen from './screens/ShoppingProcessScreens/FarmersScreen';
import FarmersByProductScreen from './screens/ShoppingProcessScreens/FarmersByProductScreen';
import ProductsByFarmerScreen from './screens/ShoppingProcessScreens/ProductsByFarmerScreen';
import FarmerProductScreen from './screens/ShoppingProcessScreens/FarmerProductScreen';

import CartScreen from './screens/CartScreens/CartScreen';

import LoginScreen from './screens/UserScreens/LoginScreen';
import CustomerRegisterScreen from './screens/UserScreens/CustomerRegisterScreen';
import FarmerRegisterScreen from './screens/UserScreens/FarmerRegisterScreen';
import ProfileScreen from './screens/UserScreens/ProfileScreen';

import ShippingScreen from './screens/CheckoutProcessScreens/ShippingScreen';
import PaymentScreen from './screens/CheckoutProcessScreens/PaymentScreen';
import PlaceOrderScreen from './screens/CheckoutProcessScreens/PlaceOrderScreen';
import OrderScreen from './screens/CheckoutProcessScreens/OrderScreen';
import SubOrderScreen from './screens/CheckoutProcessScreens/SubOrderScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} excat />
            <Route path='/products' element={<HomeScreen />} excat />
            <Route path='/farmers' element={<FarmersScreen />} excat />
            <Route
              path='/product/:id/farmers'
              element={<FarmersByProductScreen />}
            />
            <Route
              path='/farmer/:id/products'
              element={<ProductsByFarmerScreen />}
            />
            <Route
              path='/farmer-product/:id'
              element={<FarmerProductScreen />}
            />
            <Route path='/cart/' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route
              path='/register/customer'
              element={<CustomerRegisterScreen />}
            />
            <Route path='/register/farmer' element={<FarmerRegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route
              path='/order/:id/suborder/:subOrderId'
              element={<SubOrderScreen />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
