import axios from "axios";
import { useEffect, useState } from "react";

const defaultState = {
    data: null,
    error: null,
    isLoading: false
}

const useFetch = ({ url, method, headers = null, body = null, deps = [] }) => {
    const [state, setState] = useState(defaultState);

    const req = () => {
        axios[method](
            url,
            JSON.parse(headers),
            JSON.parse(body)
        )
        .then(data => setState({
            data,
            error: null,
            isLoading: false
        }))
        .catch(error => setState({
            error,
            data: null,
            isLoading: false
        }));
    };

    useEffect(() => {
        req();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return state;
}

export default useFetch;
