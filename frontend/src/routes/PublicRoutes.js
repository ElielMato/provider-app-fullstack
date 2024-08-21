import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Provider } from "../components/Provider";
import { Customer } from "../components/Customer";
import { Contact } from "../components/Contact";
import { About } from "../components/About";

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
