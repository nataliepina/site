const header = {
  homepage: 'https://www.nataliepina.com',
  title: 'NP',
};

const contact = {
  email: 'natalie.a.pina@gmail.com',
};

const about = {
  name: 'Natalie Pina',
  role: 'Senior UX Engineer',
  roleDescription: 'Bridging the gap between development and design.',
  description: '',
  social: {
    email: `mailto:${contact.email}`,
    linkedin: 'https://www.linkedin.com/in/nataliepina/',
    github: 'https://github.com/nataliepina',
    twitter: 'https://twitter.com/ui_natalie',
    freecodecamp: 'https://www.freecodecamp.org/news/author/natalie/',
  },
};

const projects = [
  {
    name: 'UI Kit',
    description:
      'UI Kit is a React component library built around the D2iQ Design System. Featured in the Storybook Encyclopedia.',
    stack: ['Emotion', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/d2iq/ui-kit',
    livePreview: 'https://design-system.d2iq.com/',
    imgSrc: '../public/ui-kit.gif',
  },
  {
    name: 'Stoic Quote',
    description:
      'A generator of stoic wisdom, with quotes from Marcus Aurelius, Seneca, Epictetus, and more. Quotes are copyable and tweetable.',
    stack: ['SCSS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/nataliepina/stoic-quote',
    livePreview: 'https://nataliepina.github.io/stoic-quote/',
    imgSrc: '../public/ui-kit.gif',
  },
];

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
];

export { about, contact, header, projects, skills };
