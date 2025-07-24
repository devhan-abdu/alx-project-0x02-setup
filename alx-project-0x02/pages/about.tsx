import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'
import React from 'react'

const About = () => {
  return (
    <div>
      <Header/>
      <h1>Welcome about</h1>
      <Button size='small' shape='rounded-sm'>small</Button>
      <Button size='medium' shape='rounded-md'>medium</Button>
      <Button size='large' shape='rounded-full'>large</Button>
    </div>
  )
}

export default About
