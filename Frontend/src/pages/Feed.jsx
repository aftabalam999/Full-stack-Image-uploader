import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: 1,  
            imageUrl: 'https://plus.unsplash.com/premium_photo-1681074963522-00ca908dce4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: 'Beautiful sunset!',
        },
        {
            _id: 2,
            imageUrl: 'https://plus.unsplash.com/premium_photo-1661378470712-98550fb28d15?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: 'Had a great day at the beach!',
        }
    ]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts').then((res)=>{
            console.log(res.data);
            setPosts(res.data.posts);
            
        }
        )
    }, [])
  return (
    <section className="feed-section">
         <h1>Feed</h1>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} className="post-image" />
            <p className="post-caption">{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </section>
  )
}

export default Feed
