import type { Order } from '../types'
import client from './client'

export const getOrders = async () => {
    const response = await client.get<Order[]>('/orders')
    return response.data
}