import React, { useRef, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './../../common.css'
import './imagePost.styles.css'
import CustomInput from '../customInput/customInput.component';


function ImagePost() {

    const [liked, setLiked] = useState(false)
    const [comment, setComment] = useState("")

    let [comments, addComments] = useState([])

   return (
        <div className='post-container'>
            <div className='post-heading'></div>
            <img src="https://picsum.photos/500/400" alt="post-image" className="post-image" />
            <hr />
            <p className="post-caption">Hello world</p>
            <div className='post-hashtags'><span>#jhvj</span></div>
            <div className="post-likes"  >
                <div onClick={() => setLiked(!liked)}>
                    {liked ? <FavoriteIcon fontSize='large' sx={{ color:'red' }} /> : <FavoriteBorderIcon fontSize='large' />}
                </div>
                <span>{liked ? 8 : 7} likes</span>
            </div>
            <div className="post-comments">
            { comments.map((cmt,id)=><p key={id}>{cmt}</p>)}
            </div>
            <div className="post-add-comment">

                <CustomInput setComment={setComment} comment={comment} />
                <button onClick={() => {
                    
                    addComments([...comments,comment])
                    setComment("")
                    
                }}>Add</button>
            </div>
        </div>
    )
}

export default ImagePost
