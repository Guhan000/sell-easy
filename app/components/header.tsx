import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className='bg-black'>
    <div className='min-w-screen flex justify-between max-w-[80%] mx-auto py-6'>
        <div className='text-red-300 text=[15px] lg:text-[20px]'>
            <Link href={"/"}>Sell Easy</Link>
        </div>
        <div className='text-blue-200 text=[15px] lg:text-[20px]'>
            <Link href="/product/upload">Upload</Link>
        </div>
    </div>
    </header>
  )
}
