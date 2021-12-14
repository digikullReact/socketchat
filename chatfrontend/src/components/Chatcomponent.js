import React,{useEffect} from 'react'
import { io } from "socket.io-client";

const Chatcomponent = () => {
    const socket = io("http://localhost:3001");

    useEffect(() => {
    
        return () => {
            
        }
    }, [])


    return (
        <div>
            
        </div>
    )
}

export default Chatcomponent
