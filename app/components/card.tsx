import Image from 'next/image'
import React from 'react'

export const Card = () => {
  return (
    <div className='max-w-60 bg-red-300'>
        <Image src={"https://plus.unsplash.com/premium_photo-1689620815896-b61fdab3d733?q=80&w=4064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            layout='fill'
            alt='image'
            style={{objectFit: 'cover'}}
        />
        <div>name</div>
        <div>It is in perfect condition and working perfectly. 9 months old and still under warranty. No faults and scratches on the screen.model number : UA75RU7100W 2021 year model. Box available for easy transportation.</div>
        <div>price</div>
    </div>
  )
}
