const projects = [
  {
    id: 1,
    title: "CRA Immigration",
    subTitle: "Law firm website & blog",
    imageName: "immigration.jpg",
    about: `Designed and built for an Immigration law firm. They needed dedicated pages for each of their practice areas, and an easy way to control their blog content.`,
    features: [
      "Blog data from Headless CMS Contentful",
      "Page transition and reveal on scroll animations",
      "Markdown support for blog text",
      "Secure access token via Netlify serverless functions",
      "React reusable components and state management",
    ],
    tags: ["React", "Sass", "Contentful"],
    repoURL: "https://www.github.com/jakesmileydev/cra-immigration",
    liveURL: "https://cra-immigration-demo.netlify.app",
  },
  {
    id: 2,
    title: "Movie Search App",
    subTitle: "Search movies & watch trailers",
    imageName: "moviesearchapp.jpg",
    about: `A web app for searching movies. View movie posters and data from the Open Movie Database, then stream the trailer from YouTube.`,
    features: [
      "Mobile-first approach to media queries",
      "Asynchronously connect to APIs",
      "Loading spinner while fetching data",
      "Error message for invalid searches",
    ],
    tags: ["JavaScript", "HTML", "Sass"],
    repoURL: "https://www.github.com/jakesmileydev/movie-search-app",
    liveURL: "https://moviesearchappjs.netlify.app",
  },
  {
    id: 3,
    title: "Rad Bikes",
    subTitle: "E-commerce bike shop",
    imageName: "radbikes.jpg",
    about: `The first big project I designed and developed myself. I'm particularly proud of the forest footer. Images from Unsplash`,
    features: [
      "Fully responsive design",
      "Shopping cart with CRUD functionality",
      "Shop with search bar and filters",
      "Custom routing via hashchange event listeners",
    ],
    tags: ["JavaScript", "HTML", "CSS"],
    repoURL: "https://www.github.com/jakesmileydev/radbikes",
    liveURL: "https://radbikes.netlify.app",
  },
];
export default projects;
