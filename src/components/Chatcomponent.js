import React,{useEffect} from 'react'
import { io } from "socket.io-client";
import Messagebody from './messages/Messagebody';
import Messagefooter from './messages/Messagefooter';
import Messageheader from './messages/Messageheader';

const Chatcomponent = () => {
    const socket = io("http://localhost:3001");

    useEffect(() => {
    
        return () => {
            
        }
    }, [])


    return (
        <>
            <Messageheader/>
            <Messagebody/>
            <Messagefooter/>

        </>
    )
}

export default Chatcomponent
