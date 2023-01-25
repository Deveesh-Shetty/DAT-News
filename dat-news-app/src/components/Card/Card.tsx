import React from 'react'

interface CardProps {
    urlToImage: string
    title: string
    description: string
}
export default function Card({urlToImage,title,description}:CardProps) {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      <img src={urlToImage} alt="" />
                <div className='p-4'>
                  <h1 className='text-xl font-bold text-gray-800'>{title}</h1>
                  <p className='mt-2 text-gray-600'>{description}</p>
                </div>
              </div>
  )
}
