import Axios from "axios";
import { useEffect, useState } from 'react'

const useAxios = (url, expectData) => {
    const [axiosData, setAxiosData] = useState([])
    const [axiosDataLength, setAxiosDataLength] = useState(0)

    useEffect(() => {
        const getData = () => {
            Axios.get(url).then((res) => {
                const list = res.data.map((data, index) => ({ data, id: index }))
                const myExpectData = expectData(list)
                setAxiosData(myExpectData);
                setAxiosDataLength(axiosData.length)
            })
        }
        getData();
    }, [url, expectData, axiosData.length])
    return ([axiosData, axiosDataLength])
}
export default useAxios;