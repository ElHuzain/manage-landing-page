import React from 'react'
import ReviewsList from './ReviewsList'

const Reviews = () => {
  return (
    <div className="text-center px-5 z-[5] xl:px-0 flex flex-col gap-4">
      <h1 className="text-[2.5rem] leading-[45px] font-bold text-primary-2">What they've said</h1>
      <ReviewsList />
    </div>
  )
}

export default Reviews
