import React from 'react'
import "./styles/info.css"
function Info() {
    return (
        <>
            <div class="bg-light h-100">

                <div className='info-img text-start py-3 ps-2'>

                    <img className='rounded-circle' id="img" src="https://source.unsplash.com/120x120/?person%E2%80%8B" />
                    <h2 className='ps-3 mt-2'>Diana</h2>

                    <div className='mt-3'>
                        <button className='btn btn-sm btn-outline-dark mx-3'>Block User</button>
                        <button className='btn btn-sm btn-dark'>Edit User</button>
                    </div>

                </div>

                <div className='info-user py-3 text-start ps-3'>

                    <h4>Email</h4>
                    <p>diana@gmail.com</p>
                    <h4>Phone</h4>
                    <p>+91 986475862</p>
                    <h4>About</h4>
                    <p>urgent call only</p>

                </div>

                <div className='attachments text-start ps-3 py-4'>
                    <h4>Attachments</h4>

                    <img className='' id="img" src="https://source.unsplash.com/120x120/?person%E2%80%8B" />
                    <img className='mx-3' id="img" src="https://source.unsplash.com/120x120/?person%E2%80%8B" />
                    <img className='' id="img" src="https://source.unsplash.com/120x120/?person%E2%80%8B" />
                    <div className="div mt-3">
                        <img className='' id="img" src="https://source.unsplash.com/120x120/?person%E2%80%8B" />
                        <img className='mx-3' id="img" src="https://source.unsplash.com/120x120/?person%E2%80%8B" />
                        <img className='' id="img" src="https://source.unsplash.com/120x120/?person%E2%80%8B" />
                    </div>



                </div>

                <button className='del-btn' >Delete Contact</button>

            </div>
        </>
    )
}

export default Info
