import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'
import { Dashboard } from './Dashboard';
import { DashboardAdmins } from "./DashboardAdmins";

export const Panels = () => {
    const { user } = useContext(UserContext);
    console.log(user.role);
    
    return (
        <>
            {
                user.role === 'user' ? (
                    <Dashboard />
                ) : (
                    <DashboardAdmins />
                )
            }
        </>
    )
}
