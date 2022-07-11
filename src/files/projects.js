const projects = [
  {
    id: 1,
    title: "CRA Immigration",
    subTitle: "Law firm website & blog",
    imageName: "immigration",
    about: `I designed and built this website for an immigration law firm. I set up
    headless CMS Contentful so they can easily create new blog
    posts. It has dynamic routes for each blog post, page transition animations, scroll animations, and is responsive down to 320 pixels.`,
    tags: ["React", "Sass", "Contentful"],
    repoURL: "https://www.github.com/jakesmileydev/cra-immigration",
    liveURL: "https://cra-immigration-demo.netlify.app",
  },
  {
    id: 2,
    title: "Movie Search App",
    subTitle: "Search movies & watch trailers",
    imageName: "moviesearchapp",
    about: `A web app for searching movies. View movie posters and data from the Open Movie Database API, then watch the trailer from the YouTube API. Features a loading spinner while fetching data, mobile-first media queries, and error handling for invalid searches.`,
    tags: ["JavaScript", "HTML", "Sass"],
    repoURL: "https://www.github.com/jakesmileydev/movie-search-app",
    liveURL: "https://moviesearchappjs.netlify.app",
  },
  {
    id: 3,
    title: "Rad Bikes",
    subTitle: "E-commerce bike shop",
    imageName: "radbikes",
    about: `E-commerce bike shop design and develop. The data for all the products and shopping cart are stored in a JavaScript object to emulate data retrieved from an API. Features a responsive design, shop with search bar and filters, product page, and a shopping cart with cart summary that updates shipping and totals.`,
    tags: ["JavaScript", "HTML", "CSS"],
    repoURL: "https://www.github.com/jakesmileydev/radbikes",
    liveURL: "https://radbikes.netlify.app",
  },
];
export default projects;
