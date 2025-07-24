import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-gray-800 text-white px-6 md:px-12 py-2'>
      <nav>
        <ul className='flex justify-between items-center'>
            <li>
                <Link href= '/home'>Home</Link>
            </li>
            <li>
                <Link href= '/about'>About</Link>
            </li>
            <li>
                <Link href= '/posts'>Posts</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
