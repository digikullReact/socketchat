import React from 'react'
import Messageheader from './Messageheader'
import Messagebody from './Messagebody'
import Messagefooter from './Messagefooter'
function MainMessages(props) {
    return (
        <>
            <Messageheader/>
            <Messagebody   message={props.message}/>
            <Messagefooter sendMessage={props.sendMessage}/>
        </>
    )
}

export default MainMessages
