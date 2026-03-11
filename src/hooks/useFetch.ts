import { useState, useEffect } from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        const fetchData = async () => {

            setLoading(true)

            try {
                const res = await fetch(url)

                if (!res.ok) {
                    throw new Error(res.statusText)
                }

                const json = await res.json()

                setData(json)
                
            } catch (err) {
                let errorMessage = 'An unknown error occurred';

                if (err instanceof Error) {
                    errorMessage = err.message;
                } else {
                    errorMessage = String(err);
                }

                setError(errorMessage);
            } finally {
                setLoading(false)
            }
        }

        fetchData()
        
    }, [url])


    return { data, loading, error }
}