import type { Role } from '../types'
import client from './client'

export const listRoles = async() => {
    const response = await client.get<Role[]>('/roles')
    return response.data
}