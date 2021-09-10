import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zeeson', // e.g: 'Name | Developer'
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
  img: 'https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1631227641/arrow-rigth_ewk3k0.png',
  paragraphOne: "I'm an intermediate Full-Stack Engineer with Internships, clients and personal projects experience. My skills are ranging from React, Redux, HTML, CSS, Javascript, Jquery, Bootstrap, Express, and MongoDB to build full-stack responsive web applications. I'm currently building Workmate, TractiveEngine, FundMyFarm, HelpingDoctors, and ArewaPreneurs. Looking forward to building and contributing to more awesome projects",
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1nwgS_kjueFaGwzozi7VWBQxm_TlWHFxn/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1631227858/tractive_hevz0w.png',
    title: 'TractiveEngine',
    info: 'TractiveEngine is an economic sharing startup platform that connects fleets owners to farmers looking for fleets such as tractor',
    info2: 'Building with MERN stack',
    url: 'https://tractive.herokuapp.com',
    repo: 'https://github.com/BuildForSDGCohort2/Tractive', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1631229135/workmatePortfolio_da7mgt.png',
    title: 'Workmate',
    info: 'Workmate is a peer to peer academic work solution',
    info2: 'Building with MERN and Auth0',
    url: 'https://workmate-frontend.vercel.app/',
    repo: 'https://github.com/Student-tutor/workmate_frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1631229138/fundMyfarm_f11iux.png',
    title: 'FundMyFarm',
    info: 'FundMyFarm is a platform that connects smallholder farmers to lenders',
    info2: 'Building with MERN stack ',
    url: 'https://fundmyfarm.herokuapp.com/',
    repo: 'https://github.com/Zeeson/FundMyFarms', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1631229135/talk2Hear_h4n18g.png',
    title: 'Talk2Hear',
    info: 'Talk2Hear is a reward-based information sharing and media reporting app',
    info2: 'React and Firebase',
    url: 'https://talk2hear.web.app/',
    repo: 'https://github.com/Zeeson/GovernanceHacks2021-Talk2Hear', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1631227992/screen2_dmvdrz.png',
    title: 'Fertilo Landing Page',
    info: 'This is the Landing page for FERTILO project',
    info2: 'Built with Node, Express, Mongodb, EJS, CSS, Bootstrap and Jquery',
    url: 'http://fertilo.herokuapp.com/',
    repo: 'https://github.com/Zeeson/landingpage', // if no repo, the button will not show up
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
