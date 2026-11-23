import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);

      // Resume shows only after the hero section has been scrolled past
      const hero = document.getElementById("hero");
      const heroEnd = hero ? hero.offsetHeight : window.innerHeight;
      setPastHero(scrollTop > heroEnd - 100);
    };

    handleScroll(); // run once so it's correct if the page loads already scrolled
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Sitesh Kumar Raulo &nbsp;
            <span className='sm:block hidden'> | Senior Software Engineer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {pastHero && (
            <motion.li
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            >
              <a target="_blank" href="https://drive.google.com/file/d/1-jaF3ElaRE12qrdFLVZ-uIgFLRjpg1q9/view?usp=sharing" download>Resume</a>
            </motion.li>
          )}

          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a target="_blank" href="https://github.com/GoatSKR" download>Github</a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              {pastHero && (
                <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
                  <a target="_blank" href="https://drive.google.com/file/d/1IaDMHfQDJcTqZaONUIq0913SiixgnY4M/view?usp=sharing" download>Resume</a>
                </li>
              )}

              <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
                <a target="_blank" href="https://github.com/GoatSKR" download>Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;