import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'
import { Dashboard } from './Dashboard';

export const Panels = () => {
    const { user } = useContext(UserContext);
    console.log(user.role);

    return (
        <>
            <Dashboard />
        </>
    )
}
