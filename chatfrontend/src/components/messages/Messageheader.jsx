import React,{useState} from 'react'
import './styles/header.css'

function Messageheader() {
    const [showInfoState, setShowInfoState] = useState(false)

const showInfo=()=>{
    setShowInfoState(false)
    console.log('info',showInfoState)
}

    return (
        <>
        
            <div id="header" className=' msg-header d-flex justify-content-between align-items-center  py-2'>

                <div className='d-flex  align-items-center ms-5'>
                    <img style={{cursor:'pointer'}} onClick={()=>showInfo(val=>!val)} className='img-div rounded-circle' id="img" src="https://source.unsplash.com/100x100/?person%E2%80%8B" />

                    <p style={{cursor:'pointer'}} onClick={showInfo} className='username ms-5 mt-3' id="h4" ><h3>Diana</h3>
                    </p>

                </div>

                <div className='last-seen'>
                    <i id="time" class="bi bi-clock-history me-5">&nbsp;&nbsp;  5 min ago</i>
                </div>

            </div>
        </>
    )
}

export default Messageheader
