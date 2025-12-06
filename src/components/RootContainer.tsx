import { useEffect } from "react"
import { useUser } from "../hooks/useUser"
import { useLocation, useNavigate } from "react-router"

export const RootContainer = (props: {children: React.ReactNode}) => {

    const { setUserData, userData } = useUser()
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if(userData) {
            if(location.pathname === '/login') {
                navigate('/')
            }
        } else {
            const userDataString = localStorage.getItem('userData')
            if (userDataString) {
                setUserData(JSON.parse(userDataString))
            } else {
                if(location.pathname !== '/login') {
                    navigate('/login')
                }
            }
        }
    }, [userData])

    return props.children
}