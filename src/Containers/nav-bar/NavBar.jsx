import { useState, useEffect } from 'react';
import Logo from '../../assets/imgs/logo.svg';
import './NavBar.css';
import Hamburger from '../../assets/imgs/icon-hamburger'
import Close from '../../assets/imgs/icon-close';

const NavBar = () => {
  const [sticker, setSticker] = useState(false);
  const [navBarVisible, setVisibility] = useState(false);

  // window.addEventListener('scroll', () => {
  //   console.log(window.scrollY)
  //   if (window.scrollY < 1) setSticker(false);
  //   else setSticker(true);
  // })

  function toggleVisibility() {
    setVisibility(prev => !prev);
  }

  return (
    <header className={sticker && 'sticker'} id="navbar">

      <div onClick={() => setVisibility(prev => !prev)} className="logo">

        <object data={Logo}></object>

      </div>

      <nav className={navBarVisible && 'visible'}>
        <a href="#hero" className="hoverable">Main</a>
        <a href="#about-us" className="hoverable">About Us</a>
        <a href="#reviews" className="hoverable">Reviews</a>
      </nav>

      <div onClick={() => setVisibility(prev => !prev)} className="action">
        {
          navBarVisible ? <Close className="phone-nav" /> : <Hamburger className="phone-nav" />
        }
        <button className={sticker ? ' no-box-shadow hoverable' : 'hoverable'}>Get Started</button>
      </div>

    </header>
  )
}

export default NavBar
