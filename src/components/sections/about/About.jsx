import React from 'react'
import Features from './Features';

const About = () => {
  return (
    <div className="grid z-[5] grid-cols-1 gap-14 md:px-5 xl:px-0 md:grid-cols-2 mx-auto w-full max-w-[1300px]">
      <div className="flex text-center md:text-left flex-col gap-4">
        <h1 className="text-[2.5rem] leading-[45px] md:text-[3rem] md:leading-[55px] font-bold text-primary-2">What's different<br />about Manage?</h1>
        <p className="text-secondary-1 text-lg">Mangae provides all the functionality your<br />team needs. without the complexity. Our<br />software is tailer-made for modern digital<br />product teams</p>
      </div>
      <div className="pl-5 xl:px-0">
        <Features />
      </div>
    </div>
  );
}

export default About
