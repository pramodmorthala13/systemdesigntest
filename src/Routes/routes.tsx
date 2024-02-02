import React from 'react';
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import App from '../App';
import Home from '../Components/Home';
import Service from '../Components/Service';
import Gallery from '../Components/Gallery';
import ContactUs from '../Components/ContactUs';
import Cars from '../Components/Cars';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
       <Route path="" element={<Home />} />
      <Route path="service" element={<Service />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="cars" element={<Cars/>}/>
    </Route>
  )
);