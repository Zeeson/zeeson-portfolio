import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Ibrahim's Portfolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Ibrahim Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ', 
  name: 'Ibrahim Saliman Abu-Zainab',
  subtitle: "I'm a Full-Stack Engineer",
  cta: 'Come with me ',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: "I'm an intermediate Full-Stack Engineer with Internships, clients and personal projects experience. ",
  paragraphTwo: "My skills are ranging from React, Redux, HTML, CSS, Javascript, Jquery, Bootstrap, Express, and MongoDB to build full-stack responsive web applications. ",
  paragraphThree: "I'm currently building Workmate, TractiveEngine, FundMyFarm, HelpingDoctors, and ArewaPreneurs. Looking forward to building and contributing to more awesome projects",
  resume: 'https://drive.google.com/file/d/1nwgS_kjueFaGwzozi7VWBQxm_TlWHFxn/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tractive.png',
    title: 'TractiveEngine',
    info: 'TractiveEngine is an economic sharing startup platform that connects fleets owners to farmers looking for fleets such as tractor',
    info2: 'Building with MERN stack',
    url: 'https://tractive.herokuapp.com',
    repo: 'https://github.com/BuildForSDGCohort2/Tractive', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'workmate.png',
    title: 'Workmate',
    info: 'Workmate is a peer to peer academic work solution',
    info2: 'Building with MERN and Auth0',
    url: 'https://workmate-frontend.vercel.app/',
    repo: 'https://github.com/Student-tutor/workmate_frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fundMyfarm.png',
    title: 'FundMyFarm',
    info: 'FundMyFarm is a platform that connects smallholder farmers to lenders',
    info2: 'Building with MERN stack ',
    url: 'https://fundmyfarm.herokuapp.com/',
    repo: 'https://github.com/Zeeson/FundMyFarms', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'talk2Hear.png',
    title: 'Talk2Hear',
    info: 'Talk2Hear is a reward-based information sharing and media reporting app',
    info2: 'React and Firebase',
    url: 'https://talk2hear.web.app/',
    repo: 'https://github.com/Zeeson/GovernanceHacks2021-Talk2Hear', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'arewa.png',
    title: 'ArewaCash',
    info: 'ArewaCash is cashless, paper-free and interest-free creidt facility for small and medium scale businesses',
    info2: 'Built with NextJs and Firebase',
    url: 'https://arewacash.netlify.app/',
    repo: 'https://github.com/Zeeson/Arewacash-Landing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mailto:ibrahim.saliman.zainab@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/salimanibrahimz',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ibrahim-saliman-zainab/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Zeeson',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
