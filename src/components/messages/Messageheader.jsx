import React from 'react'
import "./style/header.css"
function Messageheader() {

    return (
        <div id="header" className='d-flex justify-content-around align-items-center  py-2'>
       

          

            <div className='d-flex  align-items-center'>
            <img className='img-div rounded-circle' id="img" src="https://source.unsplash.com/100x100/?dog%E2%80%8B" ></img>

            <p className='username ms-5' id="h4" ><h3>Diana<i  class="bi bi-dot online " ></i></h3>   
            </p>
            
            </div> 
            
             <div>
            <i id="time" class="bi bi-clock-history">&nbsp;&nbsp;  5 min ago</i>
            </div>


        </div>
    )
}

export default Messageheader
