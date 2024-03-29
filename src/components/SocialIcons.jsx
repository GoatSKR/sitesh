import React from "react";
import { FaGithub,  FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
const SocialIcons = () => {
  const socialprofils = {
    github: "https://github.com/GoatSKR",
    linkedin: "https://www.linkedin.com/in/sitesh-kumar-raulo/",
    twitter: "https://twitter.com/IAMSiteshR",
    leetcode: "https://leetcode.com/sitesh99kr/",
  };

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 w-20">
      <ul className="list-none p-2 m-0">
        {socialprofils.twitter && (
          <li className="block mb-5">
            <a href={socialprofils.twitter} target="_blank">
              <FaXTwitter className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li className="block mb-5">
            <a href={socialprofils.github} target="_blank">
              <FaGithub className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li className="block mb-5">
            <a href={socialprofils.linkedin} target="_blank">
              <FaLinkedinIn className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
            </a>
          </li>
        )}
        {socialprofils.leetcode && (
          <li className="block mb-10">
            <a href={socialprofils.leetcode} target="_blank">
              <SiLeetcode className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
            </a>
          </li>
        )}
      </ul>
      <p className="absolute top-0 pl-1 left-1 w-20 h-14 text-gray-700 text-lg md:text-xl font-semibold leading-tight whitespace-nowrap transform -rotate-90 origin-top-left">
        -- Follow Me 
      </p>
    </div>
  );
};

export default SocialIcons;
