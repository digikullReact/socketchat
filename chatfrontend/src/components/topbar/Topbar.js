import React from 'react'
import './topbar.css'
import {Search} from '@material-ui/icons'



export default function Topbar() {
    return (
        <div>
            <div className='container'>
                <div className='left'>
                    <span className='logo'>D-chat</span>
                </div>
                <div className='centre'>
                    <div className= 'searchbar'>
                        <Search className='icons'/>
                        <input className='searchInput' placeholder=" Sesrch name"/>
                    </div>
                </div>
                <div className='right'>
                    <img src="/assets/img1.jpeg" className='img' alt=""/>
                </div>

            </div>



        </div>
    )
}
