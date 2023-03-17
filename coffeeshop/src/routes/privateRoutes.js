import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoutes = (props) => {
        if(!localStorage.getItem('@isLogin')) {
            return <Navigate to='/login' />
        } else {
            return props.children
        }  
}

export default PrivateRoutes