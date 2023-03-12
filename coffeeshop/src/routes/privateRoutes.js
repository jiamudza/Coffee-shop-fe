import { useNavigate } from 'react-router-dom'

const PrivateRoutes = (props) => {
    const navigate = useNavigate()
        if(!localStorage.getItem('@isLogin')) {
            return navigate('/login')
        } else {
            return props.children
        }  
}

export default PrivateRoutes