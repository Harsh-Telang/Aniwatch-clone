import Link from 'next/link'
import React from 'react'

const HomePageNav = () => {
  return (
    <div className=' h-16 mt-12 text-white mxg'>
      <ul className='flex gap-10'>
        <li><Link href="/home" className='text-sm font-medium tracking-wider'>Home</Link></li>
        <li><Link href="/movie" className='text-sm font-medium tracking-wider'>Movies</Link></li>
        <li><Link href="/tv" className='text-sm font-medium tracking-wider'>TV Series</Link></li>
        <li><Link href="/most-popular" className='text-sm font-medium tracking-wider'>Most Popular</Link></li>
        <li><Link href="/top-airing" className='text-sm font-medium tracking-wider'>Top Airing</Link></li>
      </ul>
    </div>
  )
}

export default HomePageNav