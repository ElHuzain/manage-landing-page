import { useState } from 'react';
import './Footer.css'
import beautifily from '../../assets/imgs/bg-tablet-pattern.svg'
import Logo from '../../assets/imgs/logo.svg'

import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  function handleChange(e) {

    const text = e.target.value;
    setInput(text);

    if (text.includes('@') && text.includes('.com')) return setError("");
    else setError("Email is invalid.")
  }

  function handleClick(e) {
    setInput("");
    setError("You have been subscribed!");
  }

  return (
    <div id="footer">
      <div className="banner">
        <object data={beautifily}></object>
        <object data={beautifily}></object>
        <h1 className="banner-title">Simplify how your team works <br /> today.</h1>
        <button style={{zIndex: 3}} className="hoverable">Get Started</button>
      </div>

      <footer>
        <div className="contacts-container">
          <object data={Logo} className="logo"></object>
          <div className="contacts">
            <AiFillFacebook className="hoverable-logo hoverable" size="30"/>
            <AiFillYoutube className="hoverable-logo hoverable" size="30"/>
            <AiOutlineTwitter className="hoverable-logo hoverable" size="30"/>
            <AiFillLinkedin className="hoverable-logo hoverable" size="30"/>
            <AiFillInstagram className="hoverable-logo hoverable" size="30"/>
          </div>
        </div>

        <div className="footer-nav">
          <div>
            <a className="hoverable hoverable-nav">Home</a>
            <a className="hoverable hoverable-nav">Pricing</a>
            <a className="hoverable hoverable-nav">Products</a>
            <a className="hoverable hoverable-nav">About Us</a>
          </div>

          <div>
            <a className="hoverable hoverable-nav">Careers</a>
            <a className="hoverable hoverable-nav">Community</a>
            <a className="hoverable hoverable-nav">Privacy Policy</a>
          </div>
        </div>


        <div className="email">
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <input value={input} onChange={handleChange} placeholder="Example@domain.com" /><button className="hoverable" onClick={handleClick}>Go</button>
            </div>
            <p style={{
              color: 'var(--primary-clr-1)',
              fontSize: '0.9rem',
              fontWeight: '100'
            }}>{error}</p>
          </div>
          <p className="fading-text">Copyright 2020. All Rights Reserved</p>
        </div>

      </footer>

    </div>
  )
}

export default Footer
