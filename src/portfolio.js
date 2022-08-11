const header = {
  homepage: 'https://www.nataliepina.com',
  title: 'NP',
}

const about = {
  name: 'Natalie Pina',
  role: 'UX Engineer',
  roleDescription: 'Briging the gap between development and design.',
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
      'UI Kit provides tools for engineers to build applications that follow the standards and guidelines of the D2DS Design System.',
    stack: ['Emotion', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/dcos-labs/ui-kit',
    livePreview: 'http://design-system.d2iq.com/',
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
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
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
  // email is optional - if left empty Contact section won't show up
  email: 'natalie.a.pina@gmail.com',
}

export { about, contact, header, projects, skills }
