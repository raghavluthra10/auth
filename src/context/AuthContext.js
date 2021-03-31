import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthProvider = (props) => {

    const [ currentUser, setCurrentUser ] = useState();
    const [ loading, setLoading ] = useState(true);

    // SIGN UP for new users function
    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    };

    // LOG IN for existing users function
    const logIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };
    
    const logout = () => {
        return auth.signOut();
    }

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const updateEmail = (email) => {
        return currentUser.updateEmail(email)
    };

    const updatePassword = (password) => {
        return currentUser.updatePassword(password)
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    



    const value = {
        currentUser,
        signUp, 
        logIn,
        logout, 
        resetPassword,
        updateEmail,
        updatePassword
    };

    return (
        <AuthContext.Provider value={value} >
            {!loading && props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext };
