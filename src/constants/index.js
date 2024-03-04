import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    java,
    meta,
    starbucks,
    postman,
    kafka,
    mysql,
    postgresql,
    swagger,
    restapi,
    GL,
    DVED,
    hibernate,
    tesla,
    shopify,
    spring,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java Backend Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Graphics & Video Editor",
      icon: backend,
    },
    {
      title: "Content Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "JAVA",
      icon: java,
    },
    {
      name: "POSTMAN",
      icon: postman,
    },
    {
      name: "KAFKA",
      icon: kafka,
    },
    {
      name: "MYSQL",
      icon: mysql,
    },
    {
      name: "POSTGRESQL",
      icon: postgresql,
    },
    {
      name: "SWAGGER",
      icon: swagger,
    },
    {
      name: "RESTAPI",
      icon: restapi,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "HIBERNATE",
      icon: hibernate,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Globallogic India",
      icon: GL,
      iconBg: "#383E56",
      date: "September 2022 - October 2023",
      points: [
        "Developed efficient and scalable Java code, leveraging Springboot framework along with Slf4j logging with Spring AOP for real-time debugging, resulting in a 20% improvement in application performance with precise and faster delivery.",
        "Thrived in an Ubuntu-based environment showcasing adaptability to deliver impactful results.",
        "Conducted code reviews, resolving 90% of bugs and enhancing application performance by 15%.",
        " Implemented an extra feature to the is the creation of secure and role-based authentication endpoints using JWT tokens, bolstering data protection and access control.",
        " Achieved an on-time delivery rate of 95% by utilizing Agile methodologies and delivering software modules within tight deadlines.",
        "Implemented the Eureka Server Client module in the new service for effortless discovery, enhancing system transparency with real-time status, port, and IP address information. Facilitated seamless communication between services using Kafka.",
        "Reduced integration time by 30% through collaboration with teams for seamless integration.",
        "Improved software quality by decreasing post-release defects by 20% through close collaboration with both lead and QA teams.",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "DVED Digital Consultancy Pvt. Ltd.",
      icon: DVED,
      iconBg: "#E6DEDD",
      date: "February 2021 - May 2021",
      points: [
        "Developed and maintained responsive website frontends using React JS. Implemented UI components to enhance user experience.        ",
        "Built cross-platform mobile apps for iOS and Android. Executed features on both frontend and backend.        ",
        "Utilized Mongo DB for efficient data management. Created Restful APIs ensuring seamless data flow.",
        "Implemented modern and cohesive UI designs using Tailwind CSS.",
        "Developed server-side logic and APIs using Node.js. Integrated built-in and third-party APIs for enhanced functionality.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Sitesh proved me wrong.",
      name: "Prakirti Jena",
      designation: "Associate",
      company: "Trushna Ventures",
      image: "https://randomuser.me/api/portraits/lego/5.jpg",
    },
    {
      testimonial:
        "Never Sleeps Nocturnal Guy always ready with the results on time!",
      name: "Nagender Agarwal ",
      designation: "Master Facilitator",
      company: "Round Table India",
      image: "https://randomuser.me/api/portraits/lego/5.jpg",
    },
    {
      testimonial:
        "Made 22 API's in a single Day this guy is a killing streak!",
      name: "Vamsi Goyal",
      designation: "Product Manager",
      company: "Madison Logic",
      image: "https://randomuser.me/api/portraits/lego/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };