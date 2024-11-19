import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./src/Pages/Home"
import Events from './src/Pages/Events';
import CustomerLogin from './src/Pages/Customers/CustomerLogin'
import StaffLogin from './src/Pages/Staff/StaffLogin';
import Layout from "./src/Components/Layout"
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route 
            path="/customerlogin" 
            element={<CustomerLogin />} />
          <Route 
            path="/stafflogin" 
            element={<StaffLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);

// <Route></Route> - envelope every part of my website that I wnat to contain my navigation bar 
// route component is going to take whatever element we pass to it, will render the <Layout /> component and also render whatever child route matches the URL that we're currently at
// <HostVanDetail /> - turning into a layout route/component
// where I have a layout component where I have child routes that need to be displayed I need to use the Outlet component
