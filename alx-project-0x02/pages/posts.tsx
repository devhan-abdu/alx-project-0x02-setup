import PostCard from '@/components/common/PostCard'
import Header from '@/components/layout/Header'
import { PostProps } from '@/interfaces'
import React from 'react'

const Posts: React.FC<PostProps[]> = (posts) => {
  return (
    <div>
        <Header/>
      <h1>Post page</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center'>
        {
            posts.map(({title, content, userId}:PostProps)=> (
                <PostCard key={userId} title={title} content={content} userId={userId} />               
            ))
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Posts
