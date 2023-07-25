

import axios from "axios";


export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        // key : 'feb2c65551cb47ae8431fd6bb1026e06'
        key : 'a38bb52c60504630a5e7136f1d49e649'
    }
    
})