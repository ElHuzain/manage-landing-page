import React from 'react'
import Button from '../../ui/Button'

const Content = () => {
  return (
    <div className="text-center flex flex-col gap-6 md:order-[-1] md:my-auto md:text-left">
      <h1 className="text-[2.5rem] md:text-[3rem] md:leading-[55px] leading-[45px] font-bold text-primary-2">Bring everyone<br />together to build<br />better products.</h1>
      <p className="text-secondary-1 text-lg">Manage makes it simple for softare<br />teams to plan day-to-day tasks while<br />keeping the larger team goals in view.</p>
      <div>
        <Button />
      </div>
    </div>
  )
}

export default Content
