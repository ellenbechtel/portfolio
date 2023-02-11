
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
    observable: "https://observablehq.com/@ellenbechtel?tab=profile",
    twitter: "https://twitter.com/ellenbechtel"
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Color Tools for Branded Data Viz at Gro',
    description:
      'Applying cartographic best practices, color math, and branding to make a suite of color tools for analysts and developers.',
    stack: [ 'Observable', 'chroma.js', 'ColorBrewer'],
    role: "Developer and Product Designer",
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    imageSrc: '/assets/images/colors.png', 
    imageAlt: 'Alt Text',
    longdesc: "I developed a suite of tools for analysts and designers at Gro to quickly make their data visualizations look branded, consistent, and beautiful. One tool condensed Gro's database of 10,000 metrics into its 52 unique color palettes and made it all searchable and exportable. Another tool allowed for quick customization of the brand palettes for different uses - sequential, divergent, continuous, discrete, contrast against background, etc. Along the way, I was able to create custom D3 interpolation schemes that dynamically generate from Gro Brand colors and follow best practices of perceptual uniformity and accessibility.",
    url: 'https://observablehq.com/@ellenbechtel/color-tools',
    tooltip: "View in Observable",
  },
  
  {
    name: 'Visualizing the Sperm Bank Gene Pool',
    description:
      `If we need to buy sperm, what's the gene pool like?`,
    stack: ['D3.js', 'Observable', 'Webscraping'],
    role: "Designer and Developer",
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    imageSrc: '/assets/images/gene-pool.png', 
    imageAlt: 'Alt Text',
    longdesc: `Follow me on a journey of discovering the details of who exactly is in the gene pool of sperm banks. I started by making free accounts at five of the largest sperm banks in the world, then using a webscraper to gather all available information about the donors in their catalog.  Then I visualized it as a beeswarm chart faceted by what donor details were available across the banks.`,
    url: 'https://observablehq.com/@ellenbechtel/the-sperm-bank-gene-pool',
    tooltip: "View in Observable",
  },
  {
    name: 'Astrology of Hydrology',
    description:
      'What rivers were up to when and where you were born.',
    stack: ['D3.js', 'Scrollama', 'USGS Water Data'],
    role: "Designer and Developer",
    sourceCode: 'https://github.com/ellenbechtel/ellenbechtel.github.io/tree/master/projects/astrology-of-hydrology',
    livePreview: 'https://ellenbechtel.github.io/projects/astrology-of-hydrology/',
    imageSrc: '/assets/images/flow.png', 
    imageAlt: 'Alt Text', 
    longdesc: "A totally outrageous and totally fun twist on the USGS Water Data for the Nation API.  If the stars looked a certain way at our day of birth, so did rivers.  Here I use the location and date of your birth to calculate a streamflow diagram of what riverflow across the US looked like for a 30-day period surrounding the day you were born.",
    url: 'https://ellenbechtel.github.io/projects/astrology-of-hydrology/',
    tooltip: "View Live Site",
  },
]

const smallProjects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'USGS Water Cycle Diagram',
    description:
      'Redesigning the official USGS Water Cycle Diagram, this time with humans.',
    stack: ['Scientific Illustration', 'Early Design Concepting', "UX/UI"],
    role: "Illustrator",
    livePreview: 'https://www.usgs.gov/special-topics/water-science-school/science/water-cycle-diagrams',
    imageSrc: '/assets/images/usgs_watercyclediagram.png', 
    imageAlt: 'The USGS Water Cycle Diagram',
    tooltip: "See on USGS.gov",
    tweet: 'https://twitter.com/USGS_DataSci/status/1417530519420608518?s=20&t=Vg_bPGJQ4rvPKjaUid88OA'
  },
  {
    name: 'Food Security Tracker for Africa',
    description:
      'Developed the code for the visualizations across the site, in partnership with the Rockefeller Foundation.',
    stack: ['D3.js', 'Highcharts', "UX/UI"],
    role: "Developer",
    livePreview: 'https://community.gro-intelligence.com/global-fertilizer-impact-monitor/?country=World',
    imageSrc: '/assets/images/foodsecuritytracker.png', 
    imageAlt: 'Choropleth map showing stocks-to-use ratio for African countries',
    tooltip: "See on Gro-Intelligence.com",
    tweet: 'https://twitter.com/GroIntel/status/1527359685279502337?s=20&t=zSwY7AHp_nUGrMWfyzYvSw'
  },
  {
    name: 'How Wildfires Threaten U.S. Water Supplies',
    description:
      'Wrote, Designed and Developed the visual story for the USGS.',
    stack: ['D3.js', 'Vue', "Illustrator"],
    role: "Developer",
    livePreview: 'https://labs.waterdata.usgs.gov/visualizations/fire-hydro/index.html',
    imageSrc: '/assets/images/fireafter.jpg', 
    imageAlt: 'Illustration showing how hydrologic dynamics after a wildfire.',
    tooltip: "See on USGS.gov",
    tweet: 'https://twitter.com/USGS_DataSci/status/1422627369420996608?s=20&t=ejjZ4VzR5m8xSQ6C8l6vHQ'
  },
  {
    name: 'Water Science and Management in the Delaware River Bsin',
    description:
      'Wrote, Designed and Developed the visual story for the USGS.',
    stack: ['D3.js', 'Vue', "Illustrator"],
    role: "Developer",
    livePreview: 'https://labs.waterdata.usgs.gov/visualizations/delaware-basin-story/index.html',
    imageSrc: '/assets/images/drb.png', 
    imageAlt: 'Illustration showing the Delaware River Basin.',
    tooltip: "See on USGS.gov",
    tweet: 'https://twitter.com/USGS_Water/status/1336009249508515842?s=20&t=JTGbTWWiRdADa9kR3IKwCQ'
  },
  {
    name: 'How We Monitor Stream Temperature in the Delaware River Basins',
    description:
      'Illustrated and developed visualizations for this visual story for the USGS.',
    stack: ['D3.js', 'Vue', "Illustrator"],
    role: "Designer",
    livePreview: 'https://labs.waterdata.usgs.gov/visualizations/temperature-prediction/index.html#/monitoring',
    imageSrc: '/assets/images/tempprediction.png', 
    imageAlt: 'Illustration showing temperature measurements over the course of a year in the Delaware River Basin.',
    tooltip: "See on USGS.gov",
    tweet: 'https://twitter.com/USGS_DataSci/status/1409527230867415045?s=20&t=FjNl-SgLAqHKUwiyhfEx1A'
  },
  {
    name: 'Fertilizer Impact Monitor',
    description:
      'Developed the code for the maps across the site, in partnership with the Gates Foundation.',
    stack: ['Mapbox GL JS', 'React', "UX/UI"],
    role: "Designer and Developer",
    livePreview: 'https://community.gro-intelligence.com/food-security-tracker-africa',
    imageSrc: '/assets/images/fertilizer-monitor.png', 
    imageAlt: 'Choropleth map showing stocks-to-use ratio for African countries',
    tooltip: "See on Gro-Intelligence.com",
    tweet: 'https://twitter.com/GroIntel/status/1565771979310915587?s=20&t=kDC69XL-UGS5fRO8_J5M6Q'
  },
  {
    name: 'From Snow to Flow',
    description:
      'Wrote, Designed and Developed the visual story for the USGS about how snowpack impacts water supply.',
    stack: ['Greensock', 'Vue', "Illustrator"],
    role: "Developer",
    livePreview: 'https://labs.waterdata.usgs.gov/visualizations/snow-to-flow/index.html#/',
    imageSrc: '/assets/images/snow.png', 
    imageAlt: 'Illustration showing how hydrologic dynamics with varying snowpack.',
    tooltip: "See on USGS.gov",
    tweet: 'https://twitter.com/USGS/status/1389965737297694723?s=20&t=6UsWjivGVtorxzn1rcV3jQ'
  },
  {
    name: 'Gages through the Ages',
    description:
      `Wrote, Designed and Developed the visual story for the USGS about the history of streamgages.`,
    stack: ['D3.js', 'Vue', 'Illustration'],
    role: "Designer",
    livePreview: 'https://labs.waterdata.usgs.gov/visualizations/gages-through-the-ages/index.html#/',
    imageSrc: '/assets/images/gages.jpeg', 
    imageAlt: 'Map of streamgages across the US',
    tooltip: "See on USGS.gov",
    tweet: 'https://twitter.com/USGS_KS/status/1544290605110550534?s=20&t=FFm_IjsdF2o3H-3NS2tGBw'
  },
  {
    name: 'Shred the Gnar',
    description:
      'A trail map of mountain biking routes in the Middlesex Fells',
    stack: ['Mapbox', "Illustrator"],
    role: "Developer",
    livePreview: '/',
    imageSrc: '/assets/images/fells.png', 
    imageAlt: 'A trail map of mountain biking routes in the Middlesex Fells',
    tooltip: "No preview, sorry",
    tweet: ''
  },
  {
    name: 'Visual Abstract: Lake Modeling',
    description:
      `Designed and illustrated a visual abstract for the paper 'Daily surface temperatures for 185,549 lakes in the conterminous United States estimated using deep learning (1980–2020)' in ASLO.`,
    stack: ['Illustration'],
    role: "Designer",
    livePreview: 'https://aslopubs.onlinelibrary.wiley.com/doi/10.1002/lol2.10249',
    imageSrc: '/assets/images/visual-abstract.jpeg', 
    imageAlt: 'Illustration showing how measurements of lakes across the US are combined to predict surface temperatures. ',
    tooltip: "See Published Paper",
    tweet: 'https://twitter.com/USGS_DataSci/status/1504479729809649671?s=20&t=kOpZuO5pCX2JwObxjXd_5g'
  },
  {
    name: 'Visual Abstract: Machine Learning',
    description:
      `Designed and illustrated a visual abstract for the paper 'Machine Learning for Understanding Inland Water Quantity, Quality, and Ecology' in the Encyclopedia of Inland Waters.`,
    stack: ['Illustration'],
    role: "Designer",
    livePreview: 'https://www.sciencedirect.com/science/article/pii/B9780128191668001213?via%3Dihub',
    imageSrc: '/assets/images/machine-learning.jpeg', 
    imageAlt: 'Flow diagram of machine learning for inland waters',
    tooltip: "See Published Paper",
    tweet: 'https://twitter.com/USGS_DataSci/status/1579865546035957768?s=20&t=vAoIva6hSxF4IZegYnVQJA'
  },
  {
    name: '#30DayChartChallenge - Flow',
    description:
      'Developed a streamflow chart for the Twitter challenge on behalf of the USGS Vizlab',
    stack: ['D3.js', 'Vue', "Illustrator"],
    role: "Developer",
    livePreview: 'https://twitter.com/USGS_DataSci/status/1380891190556508160?s=20&t=1jEMdVRKjewVpZGWyBqqVA',
    imageSrc: '/assets/images/harvey.jpeg', 
    imageAlt: 'Streamflow diagrams showing river flow measured across the country on important dates in the last 100 years.',
    tooltip: "See on Twitter",
    tweet: 'https://twitter.com/USGS_DataSci/status/1380891190556508160?s=20&t=1jEMdVRKjewVpZGWyBqqVA'
  },
  {
    name: '#30DayChartChallenge - Volume of Water on Earth',
    description:
      'Developed a pictogram for the Twitter challenge on behalf of the USGS Vizlab',
    stack: ['D3.js', "Illustrator"],
    role: "Developer",
    livePreview: 'https://twitter.com/USGS_DataSci/status/1378070227670327296?s=20&t=nk-cu7WtrvZ7FJ1SolHw4w',
    imageSrc: '/assets/images/volume.jpeg', 
    imageAlt: 'Pictogram showing relative proportions of all the water on earth.',
    tooltip: "See on Twitter",
    tweet: 'https://twitter.com/USGS_DataSci/status/1378070227670327296?s=20&t=nk-cu7WtrvZ7FJ1SolHw4w'
  },
  
]


const resumeItems = [
  // items can be added an removed
  // if there are no items, Resume section won't show up
  {
    name: 'Data Visualization Specialist',
    company: 'Gro Intelligence',
    url: "https://gro-intelligence.com/",
    description:
      'Working to make climate, agriculture, and economics data accessible and understandable to a wide audience through data visualization and design.',
    stack: ['Data Viz', 'Geospatial', 'UX/UI', 'Product Design'],
    imageAlt: 'Alt Text'
  },
  
  {
    name: 'Data Visualization Designer',
    company:
      'United States Geological Survey',
      url: "https://labs.waterdata.usgs.gov/visualizations/vizlab-home/index.html#/",
      description: "Designed and developed visual stories for the USGS Water Division.",
    stack: ['Data Viz', 'Geospatial', 'Scientific Illustration'],
    imageAlt: 'Alt Text'
  },
  {
    name:'Masters in Information Design',
    company: 'Northeastern University',
    url: "https://camd.northeastern.edu/program/information-design-and-data-visualization-mfa/",
    description:
      'Completed a Masters of Science in Information Design with a focus on development on D3.js and geospatial analysis',
    stack: ['Information Design', 'Creative Technology'],
    imageAlt: 'Alt Text'
  },
  {
    name:'Editor',
    company: 'Nightingale Magazine',
    url: "https://nightingaledvs.com/",
    description:
      `Volunteer editor for the Data Visualization Society's magazine.`,
    stack: ['Editing', 'Writing', 'Project Management'],
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

export { header, about, projects, smallProjects, resumeItems, skills, contact }
