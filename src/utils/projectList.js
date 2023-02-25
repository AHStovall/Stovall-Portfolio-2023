import dbug from "../images/dbug.PNG";
import facetheday from "../images/face-the-day.PNG";
import workdayPlanner from "../images/workdayPlanner.PNG";
import bookSearch from "../images/googlebooksearch.PNG";
import noteTaker from "../images/noteTaker.PNG";
import ecommerce from "../images/ecommerce.PNG";

const projectList = [
  {
    title: "DBUG",
    description: "Bug tracker ticketing app",
    image: dbug,
    link: "https://github.com/saramangelo/cswag-p3",
    id: 1,
  },
  {
    title: "Face The Day",
    description: "An application to help build out and cater content to the user's liking",
    image: facetheday,
    link: "https://github.com/bka-2cycle/face-the-day",
    id: 2,
  },
  {
    title: "BookSearch",
    description:
      "Application utilizing Google Book Search API to look up books based off of search criteria.",
    image: bookSearch,
    link: "https://github.com/AHStovall/BookSearch",
    id: 3,
    
  },
  {
    title: "Work Day Planner",
    description:
      "An app with real time tracking, the ability to enter, save and delete notes in a calander format per day.",
    image: workdayPlanner,
    link: "https://github.com/AHStovall/daily-planner",
    id: 4,
   
  },
  {
    title: "Note Taker",
    description:
      "Write and save notes to organize your thoughts and keep track of tasks that you need to complete.",
    image: noteTaker,
    link: "https://github.com/AHStovall/Note-Taker",
    id: 5,
  },
  {
    title: "Ecommerce Backend",
    description:
      "A built out backend route for ecommerce tracking, including product, category and tag information.",
    image: ecommerce,
    link: "https://github.com/AHStovall/ecommerce-testing",
    id: 6,
   
  },
];

export default projectList;