import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';


const secure = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    withCredentials:true,
},)

const Hook = () => {
    const { logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log("give the base url",import.meta.env.VITE_API_URL)
      useEffect(()=>{
        secure.interceptors.response.use(res=>{
         return res
        },error =>{
           console.log('intercepted',error.response)
            if(error.response.status === 401 || error.response.status === 403 ){
                console.log('log out user')
                logOut()
                .then(() =>{
                    navigate('/login')
                })
                .catch( error => console.log(error))
            }
        }
    )
      })
    return secure;
};

export default Hook;