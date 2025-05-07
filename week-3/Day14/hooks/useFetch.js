import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("Fetch failed!");
                return res.json();
            })
            .then((data) => setData(data))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [url]);
    return { data, loading, error };
}

export default useFetch
