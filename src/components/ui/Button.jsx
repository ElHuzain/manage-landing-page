import React from 'react'

const Button = ({dark = false}) => {

  const Style =`${dark ? "bg-secondary-4 text-primary-1" : "bg-primary-1 text-secondary-4 shadow-primary-1"} h-fit w-fit hover:opacity-80 py-3 px-8 rounded-3xl shadow-lg`;

  return (
    <button className={Style}>Get Started</button>
  )
}

export default Button
