import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa"
 const socials = [
    {icon: <FaGithub/>, path:""},
    {icon: <FaYoutube/>, path:""},
    {icon: <FaLinkedinIn/>, path:""},
    {icon: <FaTwitter/>, path:""},

 ];


import React from "react";

interface SocialProps {
  containerStyles?: string;
  iconstyles?: string;
}

const Social: React.FC<SocialProps> = ({containerStyles, iconstyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index}>
          <span className={iconstyles}>{item.icon}</span>
        </Link>
      ))}
    </div>
  );
}

export default Social