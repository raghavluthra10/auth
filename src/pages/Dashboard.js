import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Dashboard = () => {

    const [ error, setError ] = useState('');

    const { currentUser, logout } = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = async() => {
        setError('')
        
        try{
            await logout();
            history.push('/logIn')
            console.log(currentUser.email)
            currentUser ? console.log('yes') : console.log('no')
        } catch{
            setError('Failed to log out')
        }

        console.log(error)
    }

    const updateProfile = (e) => {

    }


    return (
        <div>
            <h1> DASHBOARD </h1>
            <h1> Email: {currentUser.email} </h1>
            <button variant='link' onClick={handleLogout} > LOG OUT </button>
            <button> <Link to='/update-profile'> Update Profile </Link> </button>
        </div>
    )
}

export default Dashboard
