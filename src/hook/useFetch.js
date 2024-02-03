import React, { useEffect, useState } from "react"
import axios from "axios"

const useFetch = myURL => {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: myURL
        })
            .then(res => {
                setData(res.data)
            })
    }, [])

    return data;
};

export default useFetch;
