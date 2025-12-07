const header = {
  homepage: 'https://www.nataliepina.com',
  title: 'NP',
};

const contact = {
  email: 'natalie.a.pina@gmail.com',
};

const about = {
  name: 'Natalie Pina',
  role: 'Senior Software Engineer',
  roleDescription:
    'Forging a UX-driven path between the realms of development and design.',
  description: '',
  social: {
    email: `mailto:${contact.email}`,
    linkedin: 'https://www.linkedin.com/in/nataliepina/',
    github: 'https://github.com/nataliepina',
    freecodecamp: 'https://www.freecodecamp.org/news/author/nataliepina/',
  },
};

const work = [
  {
    name: 'UI Kit',
    description:
      "UI Kit is a React component library. Featured in Storybook's Component Encyclopedia.",
    stack: ['Emotion', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/d2iq/ui-kit',
    livePreview: 'https://design-system.d2iq.com/',
    imgSrc: '../public/ui-kit.gif',
  },
  {
    name: 'Stoic Quote',
    description:
      'A generator of stoic wisdom, with quotes from Marcus Aurelius, Seneca, Epictetus, and more.',
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

export { about, contact, header, work, skills };
