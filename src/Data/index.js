import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { IoCall } from "react-icons/io";

export const tabs = [
  { id: 1, tab: "All", category: "" },
  { id: 2, tab: "Java Script", category: "javascript" },
  { id: 3, tab: "React", category: "react" },
];

export const projectsData = [
  {
    id: 1,
    imgUrl: "",
    title: "Todo App",
    description: `Implemented Nxt Watch application which is a clone for YouTube where users can log in and can`,
    link: "",
    category: "javascript",
    Link: "/projects/todo-list",
  },
  {
    id: 2,
    imgUrl: "",
    title: "Movies App",
    description: `Implemented Nxt Watch application which is a clone for YouTube where users can log in and can`,
    category: "react",
    Link: "/projects/movies-app",
  },
  {
    id: 3,
    imgUrl: "",
    title: "Restaurant Website",
    description: `Implemented Nxt Watch application which is a clone for YouTube where users can log in and can`,
    category: "react",
    Link: "/projects/restaurant",
  },
  {
    id: 4,
    imgUrl: "",
    title: "Food Munch",
    description: `Implemented Nxt Watch application which is a clone for YouTube where users can log in and can`,
    category: "react",
    Link: "/projects/food-munch",
  },
];

export const contactDetails = [
  {
    id: 1,
    title: "Avinash Potnuru",
  },
  {
    id: 2,
    title: "phone number",
  },
];

const todolist = {
  title: "Todo App",
  technologies: "HTML, CSS, JavaScript, Bootstrap",
  description:
    "Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark).",
  projectLink: "",
  githubLink: "",
  category: "javascript",
};

const moviesApp = {
  title: "Movies App",
  technologies:
    "HTML, CSS, JavaScript, React JS, Bootstrap, React Slick, Figma, client storage",
  description: `Implemented responsive OTT platform app like Netflix/Amazon Clone where users can see movies like popular,
    trending, top-rated, and also can search movies and view specific movie details.`,
  projectLink: "",
  githubLink: "",
  category: "react",
};

const RestaurantWebsite = {
  title: "Restaurant Website",
  technologies: " React.js, Next.Js, Tailwind CSS, Redux Tool Kit",
  description: `It is a restaurant's website. Along with the ability to reserve a table, this app allows users to view the meal
  menu, chef information, restaurant information, and daily activity at the restaurant. With This Website, users
  can access everything easily`,
  projectLink: "",
  githubLink: "",
  category: "react",
};

const FoodMunch = {
  title: "Food Munch",
  technologies: "  HTML, CSS, Bootstrap",
  description: `Developed a responsive website for Food Store where users can see a list of food items, detailed information
  about a food item, and offers.`,
  projectLink: "",
  githubLink: "",
  category: "javascript",
};

export const pages = {
  todolist: todolist,
  moviesApp: moviesApp,
  RestaurantWebsite: RestaurantWebsite,
  FoodMunch: FoodMunch,
};
