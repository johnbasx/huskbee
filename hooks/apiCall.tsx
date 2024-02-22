import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from "react";

export const useApi = <T,>(url: string, option?: AxiosRequestConfig,) => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response: AxiosResponse<T> = await axios(url, option);;
            setData(response.data);
        } catch (error) {
            setError(error);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, isLoading, error };
}