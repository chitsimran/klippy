import React from 'react'
import { Navigate } from 'react-router-dom';
import { HomePageContainer } from './styles';

const HomePage = () => {
    if (true) {
        return <Navigate replace to="/login" />;
    }

    return (
        <HomePageContainer>
            
        </HomePageContainer>
    );
}
 
export default HomePage;
