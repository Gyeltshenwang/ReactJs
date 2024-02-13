import React from 'react';
import axios from 'axios';

const ImageApi = async(search_items)=> {
    const response =  await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: 'Client-ID EkGZPjxFh_kyvwi7hWQxiEkiF0Z46er66tEuqMknjPo',
        },
        params:{
            query: search_items
        }

    })

    // Test api in react js 
    
    
    return response.data
}

export default ImageApi