import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ClipData from '../../components/ClipData';
import Navbar from '../../components/Navbar';
import { HomePageContainer } from './styles';

const HomePage = () => {
    const isLoggedIn = useSelector(state => state.AuthReducer.isLoggedIn);

    // if (!isLoggedIn) {
    //     return <Navigate replace to="/login" />;
    // }

    return (
        <HomePageContainer>
            <Navbar />
            <ClipData />
        </HomePageContainer>
    );
}
 
export default HomePage;
