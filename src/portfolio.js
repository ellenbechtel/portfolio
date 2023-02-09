
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ellenbechtel.github.io',
  title: 'EB',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ellen Bechtel',
  role: 'Data Visualization Specialist',
  description:
    `That means I interface fluently with Product, Data, and Design workflows to bring data to life. I'm here to find all the creative ways that we can match your users needs with the data that's most relevant. Currently at Gro Intelligence doing data visualization.`,
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/ellen-bechtel-b6095043/',
    github: 'https://github.com/ellenbechtel',
    observable: "https://observablehq.com/@ellenbechtel?tab=profile"
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Color Palettes for Gro Intelligence Data Viz',
    description:
      'Applying cartographic best practices, color math, and branding to make custom color functions.',
    stack: ['chroma.js', 'Observable', 'ColorBrewer'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    imageSrc: '/assets/images/colors.png', 
    imageAlt: 'Alt Text',
    routeName: 'CaseStudy1'
  },
  
  {
    name: 'Visualizing the Sperm Bank Gene Pool',
    description:
      `If we need to buy sperm, what's the gene pool like?`,
    stack: ['D3.js', 'Observable', 'Webscraping'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    imageSrc: '/assets/images/gene-pool.png', 
    imageAlt: 'Alt Text',
    routeName: 'CaseStudy2'
  },
  {
    name: 'Astrology of Hydrology',
    description:
      'What rivers were up to when and where you were born.',
    stack: ['D3.js', 'Scrollama', 'USGS Water Data'],
    sourceCode: 'https://github.com/ellenbechtel/ellenbechtel.github.io/tree/master/projects/astrology-of-hydrology',
    livePreview: 'https://ellenbechtel.github.io/projects/astrology-of-hydrology/',
    imageSrc: '/assets/images/flow.png', 
    imageAlt: 'Alt Text', 
    routeName: 'CaseStudy3'
  },
]


const resumeItems = [
  // items can be added an removed
  // if there are no items, Resume section won't show up
  {
    name: 'Data Visualization Specialist',
    company: 'Gro Intelligence',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Data Viz', 'Geospatial', 'UX/UI', 'Product Design'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    imageSrc: '', 
    imageAlt: 'Alt Text'
  },
  
  {
    name: 'Data Visualization Designer',
    company:
      'United States Geological Survey',
      description: "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ['Data Viz', 'Geospatial', 'Scientific Illustration'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    imageSrc: '', 
    imageAlt: 'Alt Text'
  },
  {
    name:'Editor',
    company: 'Nightingale Magazine',
    description:
      `Editor on the staff of the Data Visualization Society's biannual magazine.`,
    stack: ['Editing', 'Writing', 'Project Management'],
    sourceCode: 'https://github.com/ellenbechtel/ellenbechtel.github.io/tree/master/projects/astrology-of-hydrology',
    livePreview: 'https://ellenbechtel.github.io/projects/astrology-of-hydrology/',
    // imageSrc: require(), 
    imageAlt: 'Alt Text'
  },
  {
    name:'Masters in Information Design',
    company: 'Northeastern University',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Information Design', 'Creative Technology'],
    sourceCode: 'https://github.com/ellenbechtel/ellenbechtel.github.io/tree/master/projects/astrology-of-hydrology',
    livePreview: 'https://ellenbechtel.github.io/projects/astrology-of-hydrology/',
    // imageSrc: require(), 
    imageAlt: 'Alt Text'
  },
  
 
]


const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'D3.js',
  'Mapbox GL JS',
  'Observable', 
  'Greensock',
  'JavaScript',
  'TypeScript',
  'React',
  'UX Design',
  'UI Design',
  'Product Design',
  'Prototyping',
  'Material UI',
  'Technical Writing', 
  'Editing'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ellen.bechtel@gmail.com',
}

export { header, about, projects, resumeItems, skills, contact }
