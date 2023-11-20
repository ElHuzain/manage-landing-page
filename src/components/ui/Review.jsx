import React from 'react'

const Review = ({name, avatar, review}) => {
  return (
    <div className="flex z-0 flex-col text-center relative max-w-[506px]">
      <div className="w-full h-20 flex justify-center">
        <img src={`./images/avatars/avatar-${avatar}.png`} className="w-20 mx-auto absolute top-10" alt='profile' />
      </div>
      <div className="bg-secondary-4 min-h-[230px] px-8 p-8 rounded-sm">
        <div className="flex flex-col">
          <h1 className="font-bold my-5 mt-7 text-primary-2">{name}o</h1>
          <p className="text-secondary-1">“{review}”</p>
        </div>
      </div>
    </div>
  )
}

export default Review
