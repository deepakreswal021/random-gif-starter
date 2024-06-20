import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


const useGif = (tag) => {
    const [gif,setgif]=useState('');
    const[loading,setloading]=useState(false);

    const fetchData = async(tag) =>{
        setloading(true);
        const {data} = await axios.get( tag ? `${url}&tag=${tag}` : url);
        const imgsrc = data.data.images.downsized_large.url;
        setgif(imgsrc)
        setloading(false);
    }

    useEffect(()=>{
        fetchData("car");
    },[])

    return {gif,loading,fetchData};

}

export default useGif
