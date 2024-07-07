"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router=useRouter();
  return (
    <>
    <div>Contact Page</div>
    <button onClick={()=>router.push('./about')}>Go to About Page</button>
    </>
  )
}

export default page