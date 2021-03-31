import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <h1>
                Welcome
            </h1>

            <button> <Link to='/Login'> Login </Link> </button>
            
        </div>
    )
}

export default Welcome
