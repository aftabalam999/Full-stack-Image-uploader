import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreatePost = () => {
    const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
   axios.post('http://localhost:3000/create-post', formData).then(()=>{
     navigate('/feed');
   }).catch((err)=>{
    console.log(err);
   })
}
  return (
    <section className="create-post-section">
        <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept='image/*' name="image" required />
        <input type="text" name="caption" placeholder="Write a caption..." required />
        <button type="submit">Post</button>
      </form>
    </section>
  )
}

export default CreatePost
