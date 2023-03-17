import {Navigate } from 'react-router-dom'

const RestrictedRoute = (props) => {
        if(!localStorage.getItem('@isLogin')) {
            return props.children
        } else{
            return <Navigate to='/restricted'/>
        }  
}

export default RestrictedRoute