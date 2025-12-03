import { useEffect, useState } from "react"

export const useDataLoad = <T>(apiLoader: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        setIsLoading(true)
        const response = await apiLoader()
        setData(response)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        data,
        isLoading,
        refetch: fetchData,
        setData,
    }
}

