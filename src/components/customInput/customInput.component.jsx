import React from 'react'
import { useState } from 'react'
import './customInput.styles.css'
function CustomInput({comment,setComment}) {

    return (
        <div className="input-box">
            <input type="text" onChange={(e) => setComment(e.target.value)} value={comment}/>
            <span style={{
                transform: comment ? `translateY(-2.5rem)` : "",
                fontSize: comment ? '12px' : ""
            }}>Add a comment</span>
        </div>
    )
}

export default CustomInput