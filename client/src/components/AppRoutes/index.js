import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/login' element={<LoginPage />} />
        </Routes>
    );
}
 
export default AppRoutes;
