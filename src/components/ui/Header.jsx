import Button from "./Button";
import Link from "./Link";
import { useState } from "react";


const Header = () => {
  const [Expanded, setExpanded] = useState(false);

  const toggleNav = () => setExpanded(prev => !prev);
  const NavStyle = `${Expanded ? "flex" : "hidden"} text-center flex-col w-full right-0 absolute top-20 bg-secondary-4 shadow-2xl`;

  return (
    <div className="flex justify-between z-10 py-8 px-5 xl:px-0 md:max-w-[1300px] mx-auto items-center relative">
      <img alt="logo" src="./images/logo.svg" />
      <nav className="w-fit mx-auto">
        <ul className="hidden md:flex lg:gap-[2rem] gap-5">
          <Link src="" name="Pricing" />
          <Link src="" name="Product" />
          <Link src="" name="About Us" />
          <Link src="" name="Careers" />
          <Link src="" name="Community" />
        </ul>
      </nav>
      <nav className={`${NavStyle} border-2`}>
        <div className="p-3 border-b-2">
          <Link src="" name="Pricing" />
        </div>
        <div className="p-3 border-2 border-t-0">
          <Link src="" name="Product" />
        </div>
        <div className="p-3 border-2 border-t-0">
          <Link src="" name="About Us" />
        </div>
        <div className="p-3 border-2 border-t-0">
          <Link src="" name="Careers" />
        </div>
        <div className="p-3 border-t-0">
          <Link src="" name="Community" />
        </div>
      </nav>
      <div className="hidden sm:block">
        <Button />
      </div>
      <img onClick={toggleNav} alt='hamburger' className="sm:hidden" src="./images/icons/icon-hamburger.svg" />
    </div>
  )
}

export default Header
