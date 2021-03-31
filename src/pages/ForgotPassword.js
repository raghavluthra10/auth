import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';
import{ AuthContext } from '../context/AuthContext';

const ForgotPassword = () => {

    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState('')
    const [ message, setMessage ] = useState('')

    const { resetPassword } = useContext(AuthContext);

    const emailRef = useRef();


    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            setMessage('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to Reset password.')
        }
        setLoading(false)
    }

    return (
        <div className='logInPageContainer'> 
        {error && alert(error)}
        {message && alert(message)}

        <h1 className='logInPageHeading'>
            Password Reset
        </h1>
    
            <form className='logInForm' onSubmit={handleSubmit} >
                
                <label className='logInEmailLabel' > Email: </label>
                <input className='logInEmailInput' type='email' ref={emailRef} name='email' required />

                <input disabled={loading} className='logInButtonInput' type='submit' value='Password Reset'  />

            </form>
            <div className='loginForgotPassword'> 
                <Link to='/logIn'> Login </Link>
            </div>
            <div className='LoginSignUpRoute'>
                New here? <Link to='/signUp'> Click here </Link> to make a new account.
            </div>
    </div>
    )
}

export default ForgotPassword
