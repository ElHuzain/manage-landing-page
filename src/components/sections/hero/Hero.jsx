import Image from './Image';
import Content from './Content';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 px-5 justify-center xl:px-0 md:grid-cols-2 z-[5] md:mt-20 w-full max-w-[1300px] mx-auto">
      <Image />
      <Content />
    </div>
  )
}

export default Hero
