import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '60px', 
        height: '60px' 
      }}
      icon={<img src={experience.icon} alt={experience.company_name}  style={{ width: '50%', height: '50%' }}/>} 
    >
      <div>
        <h3 className='text-2xl font-bold text-white-100 mt-5'>{experience.title}</h3>
        <p className='text-white-100'>{experience.company_name}</p>
      </div>

      <div>
        {experience.points.map((section, sectionIndex) => (
          <div key={`section-${sectionIndex}`} className='mt-5'>
            {typeof section === 'object' && section.heading ? (
              <>
                <h4 className='text-lg font-semibold text-white-100'>{section.heading}</h4>
                <ul className='mt-2 list-disc ml-5 space-y-2'>
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={`experience-bullet-${bulletIndex}`}
                      className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <ul className='mt-2 list-disc ml-5 space-y-2'>
                {Array.isArray(section) ? (
                  section.map((point, pointIndex) => (
                    <li
                      key={`experience-point-${pointIndex}`}
                      className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                      {point}
                    </li>
                  ))
                ) : (
                  <li
                    key={`experience-point-${sectionIndex}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                  >
                    {section}
                  </li>
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");