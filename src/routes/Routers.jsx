import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Singup from "../Pages/Singup";
import Docters from "../Pages/Docters/Docters";
import DoctersDeatils from "../Pages/Docters/DoctersDeatils";
import Contact from "../Pages/Contact";
import MyAcount from "../Dashbord/user-account/MyAcount";
import Dashbord from "../Dashbord/doctor-account/Dashbord";
import ProtectedRoute from "./ProtectedRoute";
import CheckoutSuccess from "../Pages/Docters/CheckoutSuccess";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Singup />} />
        <Route path="/docters" element={<Docters />} />
        <Route path="/doctors/:id" element={<DoctersDeatils />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route
          path="/users/profile/me"
          element={
            <ProtectedRoute allowedRoles={["patient"]}>
              <MyAcount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctors/profile/me"
          element={
            <ProtectedRoute allowedRoles={["doctor"]}>
              <Dashbord />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Routers;
