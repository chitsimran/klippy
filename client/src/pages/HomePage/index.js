import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import ClipData from '../../components/ClipData';
import Navbar from '../../components/Navbar';
import { HomePageContainer } from './styles';

const HomePage = () => {
    const isLoggedIn = useSelector(state => state.AuthReducer.isLoggedIn);
    const { state } = useLocation();
    const [userName, setUserName] = useState(state?.userName ?? 'test');

    // if (!isLoggedIn) {
    //     return <Navigate replace to="/login" />;
    // }

    return (
        <HomePageContainer>
            <Navbar />
            <ClipData userName={userName} />
        </HomePageContainer>
    );
}
 
export default HomePage;
