const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Ryan Chatel',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Ryan Chatel',
    heading: 'ABOUT ME',
  },
  {
    route: '/stats',
    title: 'Stats | Ryan Chatel',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Ryan Chatel',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
