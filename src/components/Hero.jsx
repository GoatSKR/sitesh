import { motion } from "framer-motion";
import { FaAws, FaRocket } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { FiArrowRight, FiFileText } from "react-icons/fi";

import { styles } from "../styles";
import { go, java, kafka, postgresql, reactjs, redis, mongodb } from "../assets";
import avatar from "../assets/sitesh-avatar.webp";
import FloatingIcon from "./FloatingIcon";

const RESUME_URL =
  "https://drive.google.com/file/d/1-jaF3ElaRE12qrdFLVZ-uIgFLRjpg1q9/view?usp=sharing";
  

const chips = [
  { name: "Go", src: go },
  { name: "Java", src: java },
  { name: "PostgreSQL", src: postgresql },
  { name: "React", src: reactjs },
  { name: "Kafka", src: kafka},
  { name: "Redis", src: redis},
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
];

const floaters = [
  // left side
  { label: "Redis", src: redis, className: "top-[4%] left-[12%]" },
  { label: "Go", src: go, className: "top-[28%] left-[-1%]" },
  { label: "AWS", Icon: FaAws, color: "#FF9900", className: "top-[52%] left-[5%]" },

  // right side
  { label: "React", src: reactjs, className: "top-[0%] right-[12%]" },
  { label: "MongoDB", src: mongodb, className: "top-[22%] right-[-1%]" },
  { label: "PostgreSQL", src: postgresql, className: "top-[44%] right-[7%]" },
  
];

const Hero = () => {
  return (
    <section id='hero' className='relative w-full min-h-screen mx-auto overflow-x-clip'>
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto min-h-screen pt-[110px] pb-16
          flex flex-col lg:flex-row items-center gap-10 lg:gap-6`}
      >
        {/* LEFT: text */}
        <div className='flex flex-row items-start gap-5 w-full lg:w-[55%]'>
          <div className='hidden sm:flex flex-col items-center self-stretch mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 flex-1 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Sitesh</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Senior <span className='text-[#915EFF]'>Backend Engineer</span> building fast,{" "}
              <br className='lg:block hidden' /> 
              reliable systems in <span className='text-[#915EFF]'>Go</span> and{" "}
              <span className='text-[#915EFF]'>Java</span>.{" "}
              <br className='lg:block hidden' />
              I build high-performance <span className='text-[#915EFF]'>Backends</span> and polished{" "}
              <span className='text-[#915EFF]'>Frontends</span>, from idea to production.
            </p>
            <div className='mt-8 flex flex-wrap gap-3'>
              {chips.map(({ name, src, Icon, color }) => (
                <span
                  key={name}
                  className='flex items-center gap-2 rounded-full border border-white/10
                    bg-white/5 px-3 py-1.5 text-sm text-white-100'
                >
                  {src ? (
                    <img src={src} alt='' className='w-4 h-4 object-contain' />
                  ) : (
                    <Icon style={{ color }} />
                  )}
                  {name}
                </span>
              ))}
            </div>

            <div className='mt-8 flex flex-wrap gap-4'>
              <a
                href='#work'
                className='inline-flex items-center gap-2 rounded-full bg-[#915EFF] px-6 py-3
                  font-semibold text-white shadow-[0_0_25px_rgba(145,94,255,0.5)]
                  hover:bg-[#7d4ae8] transition-colors'
              >
                <FaRocket /> Explore My Work <FiArrowRight />
              </a>
              <a
                href={RESUME_URL}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-[#915EFF]/60
                  px-6 py-3 font-semibold text-white hover:bg-[#915EFF]/15 transition-colors'
              >
                <FiFileText /> View Resume
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: avatar + floating icons */}
        <div className='relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-none lg:w-[45%] mx-auto'>
          {/* purple glow behind the avatar */}
          <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(145,94,255,0.35)_0%,transparent_65%)]' />

          {/* fades the hard bottom edge of the desk */}
          <div className='relative [mask-image:linear-gradient(to_bottom,#000_88%,transparent)]'>
            {/* fades the hard left/right edges of the desk */}
            <img
              src={avatar}
              alt='Sitesh coding on a laptop'
              draggable={false}
              className='w-full h-auto [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]'
            />
          </div>

          {floaters.map((f) => (
            <FloatingIcon key={f.label} {...f} />
          ))}
        </div>
      </div>

      {/* scroll indicator: hidden on small screens so it doesn't overlap */}
      <div className='hidden md:flex absolute bottom-8 w-full flex-col items-center gap-2'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
        <span className='text-xs tracking-widest text-secondary'>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;