import React, { useState } from 'react'
import Logo from '../../components/Logo';
import { LoginPageBody, LoginPageContainer } from './styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BoxContainer, ButtonContainer, ErrorText, FormContainer, FormField, HyperText, LoginBodyText, SuccessText } from '../../styles';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../actions/AuthActions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const classes = {
    textField: {
        input: {
            color: 'var(--theme-even-lighter-gray)'
        }
    }
};

const buttonStyles = {
    borderRadius: '24px',
    padding: '8px 24px',
    color: 'var(--theme-light-gray)'
};

const LoginPage = () => {
    const [signIn, setSignIn] = useState(true);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [successText, setSuccessText] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const resetForm = () => {
        setUserName('');
        setPassword('');
    };

    const resetErrorAndSuccess = () => {
        setIsError(false);
        setIsSuccess(false);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        resetForm();
        resetErrorAndSuccess();
        axios({
            url: '/api/v1/user-login',
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            data: {
                user_name: userName,
                password: password
            }
        })
        .then(data => {
            if (data?.data?.data) {
                dispatch(setIsLoggedIn(true));
                navigate('/');
            } else {
                setIsError(true);
                setErrorText('Wrong password. Please try again');
                resetForm();
            }
        })
        .catch(error => {
            setIsError(true);
            setErrorText('No such user exists. Please try again!');
        });
    };

    const toggleSignIn = () => {
        resetForm();
        setIsError(false);
        setSignIn(!signIn);
    }

    const signUp = () => {
        resetErrorAndSuccess();
        axios({
            url: '/api/v1/users',
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            data: {
                user_name: userName,
                password: password
            }
        })
        .then(data => {
            setSignIn(true);
            setIsSuccess(true);
            setSuccessText('Signed up successfully! Please log in.');
            resetForm();
        })
        .catch(error => {
            setIsError(true);
            setErrorText('Error Signing up. Please try again!');
        });
    };

    const handleSignUp = (e) => {
        resetErrorAndSuccess();
        e.preventDefault();
        if (password.length < 8) {
            setErrorText('Password should have a minimum length of 8.');
            setIsError(true);
            return;
        }
        axios({
            url: '/api/v1/users',
            method: 'get',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            params: {
                userName: userName
            }
        })
        .then(data => {
            if (!data?.data?.data) {
                signUp();
            } else {
                setErrorText('User with this name exists already. Please choose another name');
                setIsError(true);
            }
        })
        .catch(error => {
            setIsError(true);
            setErrorText('Error Signing up. Please try again!');
        });
    };

    const handleUserNameOnChange = e => {
        setUserName(e.target.value);
    };

    const handlePasswordOnChange = e => {
        setPassword(e.target.value);
    };

    return (
        <LoginPageContainer>
            <LoginPageBody>
                <Logo />
                <BoxContainer>
                    <FormContainer>
                        <FormField>
                            <TextField 
                                name="login-username" 
                                variant='filled' 
                                label="User Name" 
                                sx={classes.textField}
                                value={userName}
                                onChange={handleUserNameOnChange}
                                fullWidth 
                                required
                            />
                        </FormField>
                        <FormField>
                            <TextField  
                                name="login-password" 
                                variant='filled' 
                                label="Password" 
                                type='password' 
                                sx={classes.textField}
                                value={password}
                                onChange={handlePasswordOnChange}
                                fullWidth
                                required
                            />
                        </FormField>
                        <LoginBodyText>
                            { signIn ? 'New user? ' : 'Already have an account? ' } 
                            <HyperText onClick={toggleSignIn}>
                                {
                                    signIn ? 'Sign Up' : 'Sign In'
                                }
                            </HyperText>
                        </LoginBodyText>
                        { isError && <ErrorText>{ errorText }</ErrorText> }
                        { isSuccess && <SuccessText>{ successText }</SuccessText> }
                        <ButtonContainer>
                            <Button sx={buttonStyles} type="submit" variant="contained" color="primary" onClick={signIn ? handleSignIn: handleSignUp}>
                                {
                                    signIn ? 'Sign In' : 'Sign Up'
                                }
                            </Button>
                        </ButtonContainer>
                    </FormContainer>
                </BoxContainer>
            </LoginPageBody>
        </LoginPageContainer>
    );
}
 
export default LoginPage;
