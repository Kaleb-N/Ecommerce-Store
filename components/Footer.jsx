import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      <p>2022 &copy; Kay Store</p>
    </div>
  )
}

export default Footer;