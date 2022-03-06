import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BoxContainer, ButtonContainer, FormContainer, FormField } from '../../styles';


const SignIn = ({ setIsNewUser }) => {
    return (
        <BoxContainer>
            <FormContainer>
                <FormField>
                    <TextField color='primary' name="signin-username" variant='filled' label="User Name" fullWidth />
                </FormField>
                <FormField>
                    <TextField color='primary' name="signin-password" variant='filled' label="Password" fullWidth />
                </FormField>
            </FormContainer>
            <ButtonContainer>
                <Button variant="contained" color="primary">Sign In</Button>
            </ButtonContainer>
        </BoxContainer>
    );
}
 
export default SignIn;
