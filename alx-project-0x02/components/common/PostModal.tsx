import React from 'react'
import { CardModelProps, CardProps } from '@/interfaces'
import { useState } from 'react'


const PostModel:React.FC<CardModelProps> = ({onClose, onSubmit}) => {
    const [post, setPost] = useState<CardProps>({
        title: 'halima',
        content: 'nothing to say'
    })

    const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> )=> {
            const {name , value} = e.target;
            setPost((prevPost) => ({...prevPost,[name]: value}));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(post);
        onClose();
        
    }
  return (
    <div className='fixed  top-0 w-full h-full bg-gray-800 flex items-center justify-center z-[999999]'>
   <div className='bg-white p-5  shadow-lg w-1/2 rounded-md z-[999]'>
      <form className='flex flex-col gap-4 text-gray-600' >
             
        <div className='flex flex-col gap-2'>
            <label htmlFor="title">Title</label>
            <input type="text" id='title' name='title' value={post.title} onChange={handleChange} className='px-2 py-1 ring-1 ring-gray-300 shadow-xl shadow-white rounded-lg text-black' />
        </div>
        <div className='flex flex-col gap-2 '>
            <label htmlFor="content">Content</label>
            <textarea name='content' id='content'  className='ring-1 ring-gray-300 px-2 h-32 rounded-lg' value={post.content} onChange={handleChange}/>
        </div>
        <div className='flex flex-wrap gap-6 items-center justify-between'>
        <button type='submit' onClick={handleSubmit} className='bg-amber-300 cursor-pointer px-2 py-2 rounded-md'>Submit</button>
        <button type='submit' onClick={onClose} className='bg-amber-300 cursor-pointer px-2 py-2 rounded-md'>Close</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default PostModel
