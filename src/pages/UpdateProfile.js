import React, { useContext, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const UpdateProfile = () => {

    // reference for email and password
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const history = useHistory();

    
    // bringing in context for createUserWithEmailAndPassword function
    const { currentUser, updateEmail, updatePassword } = useContext(AuthContext);

    // state to show if there is an ERROR and if it's LOADING
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if(passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError('')

        if(emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/dashboard')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(()=> {
            setLoading(false)
        })
    }


    return (
        <div className='signUpPageContainer'> 

            <h1 className='signUpPageHeading'>
                Update Profile 
            </h1>
            {error && alert(error)}
                <form className='SignUpForm' onSubmit={handleSubmit} >

                    <label className='signUpEmailLabel' > Email: </label>
                    <input className='signUpEmailInput' type='email' ref={emailRef} name='email' defaultValue={currentUser.email} required />

                    <label className='signUpPasswordLabel' > Password: </label>
                    <input className='signUpPasswordInput' type='password' ref={passwordRef} name='password' placeholder='Leave blank to keep the same'  />

                    <label className='signUpPasswordLabel' > Confrirm Password: </label>
                    <input className='signUpPasswordInput' type='password' ref={confirmPasswordRef} name='password' placeholder='Leave blank to keep the same'  />

                    <input disabled={loading} className='signUpButtonInput' type='submit' value='UPDATE'  />

                </form>
                <div className='signUpLoginRoute'>
                    <Link to='/dashboard'> Cancel </Link>
                </div>
        </div>
    )
}

export default UpdateProfile
