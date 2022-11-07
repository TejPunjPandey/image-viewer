import React from 'react'
import ImagePost from '../image-post/imagePost.component'
import './home.styles.css'
function Home() {
  return (
    <div className='image-posts-container'>
<ImagePost />
<ImagePost />
<ImagePost />
<ImagePost />
<ImagePost />
    </div>
  )
}

export default Home