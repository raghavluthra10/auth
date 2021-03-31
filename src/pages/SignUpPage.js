import React, { useContext, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SignUpPage.css';
import { AuthContext } from '../context/AuthContext';

const SignUpPage = () => {

    // reference for email and password
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const history = useHistory();

    // bringing in context for createUserWithEmailAndPassword function
    const { signUp } = useContext(AuthContext);

    // state to show if there is an ERROR and if it's LOADING
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false);

    async function handleSubmit (e) {
        e.preventDefault();

        if(passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Passwords do not match')
        }
        
        try{
            setError('');
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <div className='signUpPageContainer'> 

            <h1 className='signUpPageHeading'>
                Sign Up
            </h1>
            {error && alert(error)}
                <form className='SignUpForm' onSubmit={handleSubmit} >
                    <label className='signUpNameLabel'> Name: </label>
                    <input className='signUpNameInput' type='text' name='name' required />

                    <label className='signUpEmailLabel' > Email: </label>
                    <input className='signUpEmailInput' type='email' ref={emailRef} name='email' required />

                    <label className='signUpPasswordLabel' > Password: </label>
                    <input className='signUpPasswordInput' type='password' ref={passwordRef} name='password' required />

                    <label className='signUpPasswordLabel' > Confrirm Password: </label>
                    <input className='signUpPasswordInput' type='password' ref={confirmPasswordRef} name='password' required />

                    <input disabled={loading} className='signUpButtonInput' type='submit' value='SIGN UP'  />

                </form>
                <div className='signUpLoginRoute'>
                    Already have an account? click <Link to='/logIn'> Login. </Link>
                </div>
        </div>
    )
}

export default SignUpPage
