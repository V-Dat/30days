import Axios from "axios";
import { useEffect, useState } from 'react'

const useAxios = ( url, expectData, keyToAccessArray ) => {
    const [axiosData, setAxiosData] = useState([])
    const [axiosDataLength, setAxiosDataLength] = useState(0)
    useEffect(() => {
        const mappingData = (data) => {
            const list = data.map((data, index) => ({ data, id: index }))
            if (expectData) {
                const myExpectData = expectData(list)
                setAxiosData(myExpectData);
                setAxiosDataLength(myExpectData.length)
                return;
            }

            setAxiosData(list);
            setAxiosDataLength(list.length)
            
        }
        const getData = () => {
            Axios.get(url).then((res) => {
                let finaldata = res.data
                if (keyToAccessArray) {
                    finaldata = res.data[keyToAccessArray];
                }
                // if res.data need to accent another key through keyToAccessArray  before map => select your array:
                mappingData(finaldata)
            })
        }
        getData();
    }, [url, expectData, axiosData.length])
    return ([axiosData, axiosDataLength])
}
export default useAxios;