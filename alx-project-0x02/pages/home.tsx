import Card from '@/components/common/Card';
import React, { useState } from 'react'
import PostModel from '@/components/common/PostModel';
import { CardProps } from '@/interfaces';
import Header from '@/components/layout/Header';

const CardData = [
  {
    title: 'Card 1',
    content: 'This is the content of card 1'
  },
  {
    title: 'Card 2',
    content: 'This is the content of card 2'
  },
  {
    title: 'Card 3',
    content: 'This is the content of card 3'
  },
   {
    title: 'Card 4',
    content: 'This is the content of card 4'
  },

]

const Home = () => {
  const [post , setPost] = useState<CardProps[]>(CardData);
  const [open, setOpen] = useState(false); 

  const handleAddPost = (newPost: CardProps) => {
    const newpost = {...newPost, id: post ? post.length + 1 : 1};
    setPost((prevPost)=>[...prevPost, newPost])
  }


  return (
    <div>
      <Header/>
      <h1>Welcome Home</h1>
      <button onClick={()=>setOpen(!open)} className='bg-amber-300 text-black px-4 py-2 cursor-pointer m-4'>Add Post</button>
      {
        open && <PostModel  onClose ={()=>setOpen(false)} onSubmit={handleAddPost}/>
      }
      <div className='flex flex-wrap items-center justify-center place-content-center gap-4'>
      {
        post?.map((card, index) => (
          <Card key={index} title={card.title} content={card.content}  />
        ))
      }
      <Card title="Card 5" content="This is the content of card 5" />
      <Card title="Card 6" content="This is the content of card 6" />
      <Card title="Card 7" content="This is the content of card 7" />
      </div>
    </div>
  )
}

export default Home;
