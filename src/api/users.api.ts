import client from './client'
import type { User } from '../types'

export const listUsers = async () => {
    const response = await client.get('/users')
    return response.data as User[]
}

export const getUser = async (id: string) => {
    return (await client.get<User>(`/users/${id}`)).data
}

export const createUser = async (
    name: string,
    email: string,
    password: string,
    role_id: number,
) => {
    const payload = {
        name,
        email,
        password,
        role_id,
    }
    const response = await client.post<User>('/users', payload)
    return response.data
}

export const updateUser = async (
    id: string,
    name: string,
    email: string,
    role_id: number,
) => {
    const payload = {
        name,
        email,
        role_id,
    }
    const response = await client.put<User>(`/users/${id}`, payload)
    return response.data
}

export const login = async (email: string, password: string) => {
    const payload = {
        email: email,
        password: password,
    }
    const response = await client.post('/login', payload)
    return response.data as {
        token: string,
        user: {
            id: number,
            name: string,
            email: string,
            role_id: number,
        }
    }
}