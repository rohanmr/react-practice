import { useEffect, useState } from "react";
import api from "../api/axios";

export default function useApi(url) {
    const [data, setData] = useState(null || [] || {});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let isMounted = true; // prevents memory leak
        setLoading(true)
        api.get(`http://localhost:7001/api${url}`)
            .then((res) => {
                if (isMounted) {
                    setData(res.data);
                    setLoading(false)
                }
            })
            .catch((err) => {
                console.log(err);
                if (isMounted) setError(true);
                setLoading(false)
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };



    }, []);

    return { data, loading, error };
}
