import React from 'react'

const Feature = ({numbering, property, value}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="display flex gap-4 items-center sm:bg-transparent bg-secondary-3 rounded-l-3xl">
        <span className=" bg-primary-1 py-2 px-6 text-secondary-4 font-[500] rounded-3xl">0{numbering}</span>
        <h1 className="font-bold text-primary-2">{property}</h1>
      </div>
      <div className="display flex gap-4">
        <span className="hidden sm:block bg-transparent py-2 px-6 text-transparent font-[500] rounded-3xl">02</span>
        <p className="text-left text-secondary-1 leading-6 w-[28rem]">{value}</p>
      </div>
    </div>
  )
}

export default Feature
