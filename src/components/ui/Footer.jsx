import Button from './Button';
import Link from './Link';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState(false);

  useEffect(() => {
    if (email === "") return;
    if (!email.includes("@") || !email.includes(".com")) setBadEmail(true);
    else setBadEmail(false);
  }, [email])


  return (
    <div className="mt-40">

      {/* Top Part */}
      <div className="w-full bg-primary-1 relative overflow-hidden">
        <img className="absolute right-[-100px] top-[-600px] opacity-10" alt='' src="./images/bg-tablet-pattern.svg" />
        <img className="absolute top-[10px] opacity-10" alt='' src="./images/bg-tablet-pattern.svg" />
        <div className="px-5 py-20 xl:px-0 z-5 flex gap-8 items-center flex-col justify-center md:flex-row md:justify-between max-w-[1300px] mx-auto">
          <h1 className="text-[2.5rem] text-center md:text-left leading-[45px] font-bold text-secondary-4">Simplify how your team<br />works today.</h1>
          <Button dark={true} />
        </div>
      </div>

      {/* Bottom Part */}
      <div className="w-full bg-secondary-2">
        <div className="px-5 py-20 xl:px-0 grid grid-cols-1 gap-y-12 text-center md:text-left relative md:grid-cols-[1fr_2fr_1fr] max-w-[1300px] mx-auto">


          <div className="w-fit mx-auto md:mx-0 flex flex-col-reverse md:flex-col gap-4 justify-between order-[1] md:order-none">
            <img alt='logo' src="./images/logo-dark.svg" />
            <div className="flex justify-between">
              <img alt="social" className="hover:scale-110 cursor-pointer" src="./images/icons/icon-facebook.svg" />
              <img alt="social" className="hover:scale-110 cursor-pointer" src="./images/icons/icon-youtube.svg" />
              <img alt="social" className="hover:scale-110 cursor-pointer" src="./images/icons/icon-twitter.svg" />
              <img alt="social" className="hover:scale-110 cursor-pointer" src="./images/icons/icon-pinterest.svg" />
              <img alt="social" className="hover:scale-110 cursor-pointer" src="./images/icons/icon-instagram.svg" />
            </div>
          </div>

          <div className="flex justify-around mx-auto md:grid w-full grid-cols-2">
            <div className="flex flex-col gap-2">
              <Link dark={true} name="Home" />
              <Link dark={true} name="Pricing" />
              <Link dark={true} name="Products" />
              <Link dark={true} name="About Us" />
            </div>

            <div className="flex flex-col gap-2">
              <Link dark={true} name="Careers" />
              <Link dark={true} name="Community" />
              <Link dark={true} name="Privacy Policy" />
            </div>
          </div>

          <div className="flex gap-1 flex-col mx-auto order-[-1] md:order-none">
            <div className="flex gap-4">
              <input className={`rounded-3xl px-8 ${badEmail && "border-2 border-red-500"}`} placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button className="bg-primary-1 text-secondary-4 h-fit w-fit hover:opacity-80 py-3 px-8 rounded-3xl shadow-lg">Go</button>
            </div>
            {badEmail && <p className="text-left text-red-500 pl-8">INCORRECT FORMAT</p>}
          </div>
          <div className="md:absolute text-secondary-1 order-4 bottom-20 right-5">
            <p>Copyright 2020. All Rights Reserved.</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer
