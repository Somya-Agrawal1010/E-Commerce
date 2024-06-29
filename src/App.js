import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import CheackOut from './components/CheackOut'
import Payment from './components/Payment'
import Address from './components/Address';
import AddProduct from './components/AddProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cheackout" element={<CheackOut />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/address" element={<Address />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;


