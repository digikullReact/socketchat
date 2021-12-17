import React, { useState } from 'react'
import './styles/body.css'
function Messagebody({message}) {

    // const [state, setstate] = useState([new Date()])

    return (
        <div className='msg-body py-3'>
            {
                message.map(ele=>(
                
                        ele.sender==="me"? <p className='right-msg'><strong>{ele.message} {ele.sentby}</strong> </p> : <p className='left-msg'><strong className=''>{ele.message} {ele.sentby}</strong></p>

                

                ))

            }
            {/**
                   <p className='left-msg'><strong className=''>Left msg,Send by the client via server node js</strong><span></span></p>
            
             <p className='right-msg'><strong>Right Msg,Send by the user via server</strong></p>
             <p className='left-msg'><strong className=''>Left msg,Send by the client via server node js</strong></p>
             <p className='right-msg'><strong>Right Msg,Send by the user via server</strong></p>
             <p className='left-msg'><strong className=''>Left msg,Send by the client via server node js</strong></p>
             <p className='right-msg'><strong>Right Msg,Send by the user via server</strong></p>
             <p className='left-msg'><strong className=''>Left msg,Send by the client via server node js</strong></p>
             <p className='right-msg'><strong>Right Msg,Send by the user via server</strong></p>
             <p className='left-msg'><strong className=''>Left msg,Send by the client via server node js</strong></p>
             <p className='right-msg'><strong>Right Msg,Send by the user via server</strong></p>
             <p className='left-msg'><strong className=''>Left msg,Send by the client via server node js</strong></p>
             <p className='right-msg'><strong>Right Msg,Send by the user via server</strong></p>
             <p className='left-msg'><strong className=''>Left msg,Send by the client via server node js</strong></p>
             <p className='right-msg'><strong>Right Msg,Send by the user via server</strong></p>
             */}
          
        </div>
    )
}

export default Messagebody
