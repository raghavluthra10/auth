import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { currentUser } = useContext(AuthContext);

    return (
        <Route 
            {...rest}
                render={props=> {
                    return currentUser ? <Component {...props} /> : <Redirect to='/logIn' />
                }}>
        </Route>
    )
}

export default PrivateRoute 
