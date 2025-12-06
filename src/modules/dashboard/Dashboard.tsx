import { CircularProgress } from "@mui/material"
import { getOrders } from "../../api/orders.api"
import { useDataLoad } from "../../hooks/useDataLoad"
import type { Order } from "../../types"
import { BarChart } from '@mui/x-charts/BarChart';

export const Dashboard = () => {
    const { data: orders, isLoading } = useDataLoad(getOrders)

    if( isLoading || !orders ) {
        return <CircularProgress />
    }

    /*
        input -> orders: [ {id:1, created_at: '2021-01-01', total: 100, product_ids: [1, 2, 3]}, {id:2, created_at: '2021-01-02', total: 200, product_ids: [4, 5, 6]}, {id:3, created_at: '2021-01-03', total: 300, product_ids: [7, 8, 9]}]
        output -> {
            '2021-01-01': [order1, order2]
            '2021-01-02': [order3]
            '2021-01-03': []
        }
    */

    const ordersByDate = orders.reduce((acc, order) => {
        const date = order.created_at.split('T')[0]
        if(acc[date]) {
            acc[date].push(order)
        } else {
            acc[date] = [order]
        }
        return acc

    }, {} as Record<string, Order[]>)

    // console.log(ordersByDate)

    const dates = Object.keys(ordersByDate).sort()
    console.log(dates)
    const seriesData = dates.map((date) => {
        const orders = ordersByDate[date]
        return orders.length
    })


    return <BarChart
        xAxis={[{data: dates, label: 'Orders'}]}
        series={[{data: seriesData, barLabel: (item) => item.value?.toString()}]}
        height={300}
        title="Orders"
    />
}