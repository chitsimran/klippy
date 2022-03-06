import React, { useState } from 'react'
import SignIn from '../../containers/SignIn';
import SignUp from '../../containers/SignUp';
import { LoginPageBody, LoginPageContainer } from './styles';

const LoginPage = () => {
    const [isNewUser, setIsNewUser] = useState(false);

    return (
        <LoginPageContainer>
            <LoginPageBody>
                {
                    isNewUser ? <SignUp setIsNewUser={setIsNewUser} /> : <SignIn setIsNewUser={setIsNewUser} />
                }
            </LoginPageBody>
        </LoginPageContainer>
    );
}
 
export default LoginPage;
