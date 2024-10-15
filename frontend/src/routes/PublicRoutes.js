import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from "../components/Home/Home";
import { Login } from "../components/Register/Login";
import { Register } from "../components/Register/Register";
import { Provider } from "../components/Home/Provider";
import { Customer } from "../components/Home/Customer";
import { Contact } from "../components/Home/Contact";
import { About } from "../components/Home/About";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/provider" element={<Provider />} />
            <Route exact path="/customers" element={<Customer />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />

            <Route exact path="*" element={<Navigate to='/login' replace />} />

        </Routes>
    )
}
