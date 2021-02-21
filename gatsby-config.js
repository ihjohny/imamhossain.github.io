module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ihjohny.github.io/`,
    // Your Name
    name: 'Imam Hossain',
    // Main Site Title
    title: `Imam Hossain | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Associate Software Engineer | Android, Kotlin, Java, Flutter`,
    // Optional: Twitter account handle
    author: `@ihjohny`,
    // Optional: Github account URL
    github: `https://github.com/ihjohny`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ihjohny/`,
    // Content of the About Me section
    about: `A passionate programmer and results-oriented app developer with more than two year of experience in both development and research positions. I am self-driven and hungry to learn new technologies and strategies from this rapidly changing industry. My main focus is to maintain proper guidelines and architecture while developing apps. Strong eye for detail and tenacity to never quit on something until it is absolutely perfect.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Foreksty',
        description: `Simple and nice looking android apps that provide a weather forecast from darksky API with offline data caching feature. It is developed by using kotlin and android architecture components like LiveData, ViewModel, Room, Navigation. Following MVVM (Model View ViewModel) architecture.`,
        link: 'https://github.com/ihjohny/Foreksty',
      },
      {
        name: 'TrackYourself',
        description: `A native android application developed by using java for tracking one's daily activities, managing daily tasks, taking a journal,notes, set reminder, get notifications, etc. Also provide user task completion statistics in bar chart, pie chart and line chart by using MPAndroidChart Library`,
        link: 'https://github.com/ihjohny/TrackYourself-App',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Brain Station 23',
        description: 'Associate Software Engineer, January 2020 - Present',
        link: 'https://brainstation-23.com/',
      },
      {
        name: 'Bangladesh Telecommunications Company Limited (BTCL)',
        description: 'Internship, January 2019 - February 2019',
        link: 'http://btcl.noakhali.gov.bd/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Kotlin, Android, Flutter, JavaScript, Vue.js, Node.js, GraphQL',
      },
      {
        name: 'Databases',
        description: 'Firebase, MongoDB, MySQL',
      },
      {
        name: 'Other',
        description:
          'Git, Linux, CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
