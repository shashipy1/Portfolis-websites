import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BsGithub} from 'react-icons/bs';



export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.git.com',
    icon: <BsGithub />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaInstagram />,
  },
];






