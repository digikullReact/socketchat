import React, { useState } from 'react'
import './styles/footer.css'
import Picker from 'emoji-picker-react';
function Messagefooter() {

    const [input, setInput] = useState('')
    const [showPicker, setShowPicker] = useState(false)


    const onEmojiClick = (event, emojiObject) => {
        setInput(prevInput => prevInput + emojiObject.emoji)
        setShowPicker(false)
    };

    return (
        <div className='msg-footer bg-light d-flex justify-content-around align-items-center '>

            <i onClick={() => setShowPicker(val => !val)} style={{ cursor: "pointer",fontSize:'25px' }} title='Select Emoji' class="bi bi-emoji-smile"></i>

            {
                showPicker && <Picker 
                    pickerStyle={{ width: '55%', position: "absolute", bottom: "100px",left:'30px' }}
                    onEmojiClick={onEmojiClick} />
            }
            <div className='input-div'>
                <input autoFocus onChange={e=>setInput(e.target.value)} value={input} type="text" />
            </div>
            {/* ===============emoji section=============== */}



            <div className='d-flex justify-content-center align-items-center'>
                <i title='Upload File' style={{ cursor: "pointer",fontSize:'25px' }} class="bi bi-paperclip me-3"></i>
                <i title='Send' style={{ cursor: "pointer" }} class="bi bi-send send-btn rounded-circle"></i>
            </div>
        </div>
    )
}

export default Messagefooter
