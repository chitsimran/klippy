import styled from 'styled-components';

export const BoxContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-around;
    flex-direction: column;
    height: 80%;
`

export const FormContainer = styled.form`

`

export const FormField = styled.div`
    margin-bottom: 10px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const HyperText = styled.div`
    display: inline-flex;
    cursor: pointer;
    color: var(--theme-neon-blue);
    :hover {
        text-decoration: underline;
    }
`

export const LoginBodyText = styled.div`
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
`

export const ErrorText = styled.div`
    color: var(--theme-mid-blue);
    text-align: center;
    margin: 8px 0;
    font-size: 1.1rem;
`

export const SuccessText = styled.div`
    color: lightgreen;
    text-align: center;
    font-size: 1.1rem;
`
