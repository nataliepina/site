const header = {
  homepage: 'https://www.nataliepina.com',
  title: 'NP',
}

const about = {
  name: 'Natalie Pina',
  role: 'Senior UX Engineer',
  roleDescription: 'Bridging the gap between development and design.',
  description: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/nataliepina/',
    github: 'https://github.com/nataliepina',
    twitter: 'https://twitter.com/ui_natalie',
    freecodecamp: 'https://www.freecodecamp.org/news/author/natalie/',
  },
}

const projects = [
  {
    name: 'UI Kit',
    description:
      'UI Kit is a React component library that provides tools for engineers to build applications. Featured in the Storybook Encyclopedia.',
    stack: ['Emotion', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/d2iq/ui-kit',
    livePreview: 'https://design-system.d2iq.com/',
  },
  {
    name: 'Stoic Quote',
    description:
      'A generator of stoic wisdom, with quotes from Marcus Aurelius, Seneca, Epictetus, and more. Quotes are copyable and tweetable.',
    stack: ['SCSS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/nataliepina/stoic-quote',
    livePreview: 'https://nataliepina.github.io/stoic-quote/',
  },
]

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
]

const contact = {
  email: 'natalie.a.pina@gmail.com',
}

export { about, contact, header, projects, skills }
