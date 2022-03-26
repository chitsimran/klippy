import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { HomePageContainer } from './styles';

const HomePage = () => {
    const isLoggedIn = useSelector(state => state.AuthReducer.isLoggedIn);

    if (!isLoggedIn) {
        return <Navigate replace to="/login" />;
    }

    return (
        <HomePageContainer>
            Welcome!
        </HomePageContainer>
    );
}
 
export default HomePage;
