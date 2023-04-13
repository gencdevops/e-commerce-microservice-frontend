import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link, useHistory } from 'react-router-dom'


export default function Checkout() {
    const { isAuthenticated } = useAuth0();
    const history = useHistory()

    useEffect(() => {
        if(!isAuthenticated) history.push('/')
    }, [isAuthenticated, history]);

    if(isAuthenticated) {
        return true
    }

    return null;
}