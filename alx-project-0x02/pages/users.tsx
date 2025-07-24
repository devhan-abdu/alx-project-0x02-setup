import PostCard from '@/components/common/PostCard'
import Header from '@/components/layout/Header'
import { UserProps } from '@/interfaces'
import React from 'react'
import UserCard from '@/components/common/UserCard'

const Posts: React.FC<UserProps[]> = (posts) => {
  return (
    <div>
        <Header/>
      <h1>Post page</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center'>
        {
            posts.map(({name, email, username, id}:UserProps , key: number)=> (
                <UserCard key={id} name={name} email={email} username={username} />               
            ))
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Posts
