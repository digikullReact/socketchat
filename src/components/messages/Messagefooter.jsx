import React, { useState } from 'react'
import './styles/footer.css'
import Picker from 'emoji-picker-react';
function Messagefooter() {

    const [input, setInput] = useState('')
    const [showPicker, setShowPicker] = useState(false)


    const onEmojiClick = (event, emojiObject) => {
        // setChosenEmoji(emojiObject);
        setInput(prevInput => prevInput + emojiObject.emoji)
        setShowPicker(false)
    };

    return (
        <div className='msg-footer bg-light d-flex justify-content-around align-items-center '>


            <div className='input-div'>
                <input onChange={e=>setInput(e.target.value)} value={input} type="text" />
            </div>
            {/* ===============emoji section=============== */}

            {
                showPicker && <Picker
                    pickerStyle={{ width: '15%', position: "absolute", bottom: "100px", right: '680px' }}
                    onEmojiClick={onEmojiClick} />
            }


            <div className='send-div d-flex justify-content-center align-items-center py-3'>
                <i onClick={() => setShowPicker(val => !val)} style={{ cursor: "pointer" }} title='Select Emoji' class="bi bi-emoji-smile"></i>
                <i title='Upload File' style={{ cursor: "pointer" }} class="bi bi-paperclip mx-3"></i>
                <i title='Send' style={{ cursor: "pointer" }} class="bi bi-send"></i>
            </div>
        </div>
    )
}

export default Messagefooter
