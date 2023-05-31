import React from 'react'
import './article.css'
import { Link } from 'react-router-dom'

const Article = () => {
  return (
    <div className='fithusiast__articles-post'>
        <Link to='/articles/post'><button type='button'>Create Post</button></Link>
      </div>
  )
}

export default Article