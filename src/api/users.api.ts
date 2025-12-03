import client from './client'
import type { User } from '../types'

export const listUsers = async () => {
    const response = await client.get('/users')
    return response.data as User[]
}

export const getUser = async (id: string) => {
    return (await client.get(`/users/${id}`)).data as User
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
    const response = await client.post('/users', payload)
    return response.data as User[]
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
    const response = await client.put(`/users/${id}`, payload)
    return response.data as User
}