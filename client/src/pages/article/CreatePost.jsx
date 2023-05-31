import React, {useState} from 'react'

const CreatePost = () => {

    const [title, setTitle]=useState('')
    const [articleText, setArticleText]=useState('')
    
  return (
    <div>
        <div className='createArticlePage'>
        {""}
        <div className='caContainer'>
          <h1>Submit Your Own Article</h1>
          <div className='inputGP'>
            <label>Title:</label>
            <input placeholder='Title of your Article' onChange={(event)=>{setTitle(event.target.value);}}/>
          </div>
          <div className='inputGP'>
          <label>Post:</label>
          <textarea placeholder='Your Article' onChange={(event)=>{setArticleText(event.target.value);}}/>

          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost