import { login as loginApi } from "../api/users.api"
import client from "../api/client"
import { useNavigate } from "react-router"
import { useAppDispatch, useAppSelector } from "./redux"
import { setUserData as setUserDataAction, clearUserData as clearUserDataAction } from "../slices/userSlice"
import { useSelector } from "react-redux"

export const useUser = () => {
    const userData = useAppSelector((state) => {
        return state.userData.userData
    })
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const login = async (email: string, password: string) => {
        const userData = await loginApi(email, password)
        console.log(userData)
        setUserData({
            userId: userData.user.id,
            name: userData.user.name,
            email: userData.user.email,
            roleId: userData.user.role_id,
            token: userData.token,
        })
        navigate('/')
    }

    const setUserData = (userData: {
        userId: number,
        name: string,
        email: string,
        roleId: number,
        token: string,
    }) => {
        client.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
        localStorage.setItem('userData', JSON.stringify(userData))
        const action = setUserDataAction({userData})
        dispatch(action)
    }

    const logout = () => {
        client.defaults.headers.common['Authorization'] = undefined
        dispatch(clearUserDataAction())
        localStorage.removeItem('userData')
    }

    return {
        login,
        setUserData,
        userData,
        logout
    }
}