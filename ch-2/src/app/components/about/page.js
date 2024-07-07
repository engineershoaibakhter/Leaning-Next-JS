"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    About page
    <Link href="/components/contact">Go to contact page</Link>
    </>
  )
}

export default page