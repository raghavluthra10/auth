import React, { useContext, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

const Login = () => {

    const { logIn } = useContext(AuthContext);

    const emailRef = useRef();
    const passwordRef = useRef();

    // state to show if there is an ERROR and if it's LOADING
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false);

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            setLoading(true)
            await logIn(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard')
        } catch {
            setError('Invalid email or password entered.')
        }
        setLoading(false)
    }

    return (
        <div className='logInPageContainer'> 

            <h1 className='logInPageHeading'>
                Login
            </h1>
            {error && alert(error)}
                <form className='logInForm' onSubmit={handleSubmit} >
                    
                    <label className='logInEmailLabel' > Email: </label>
                    <input className='logInEmailInput' type='email' ref={emailRef} name='email' required />

                    <label className='logInPasswordLabel' > Password: </label>
                    <input className='logInPasswordInput' type='password' ref={passwordRef} name='password' required />

                    <input disabled={loading} className='logInButtonInput' type='submit' value='Login'  />

                </form>
                <div className='loginForgotPassword'> 
                    <Link to='/forgot-password'> Forgot Password? </Link>
                </div>
                <div className='LoginSignUpRoute'>
                    New here? <Link to='/signUp'> Click here </Link> to make a new account.
                </div>
        </div>
    )
}

export default Login
