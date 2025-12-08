import museum from "../assets/museum.png";
import Airplane from "../assets/Airplane.png";
import smartSpend from "../assets/disaster.png";
import karyawan from "../assets/timer.jpg";

export const projects = [
  {
    id: 1,
    title: "Flight Reservation System",
    techStack: ["Java", "MySQL"],
    category: "Application",
    description:
      "Airline booking application that allows users to search for flights, book tickets, and manage reservations.",
    imgSrc: Airplane,
    myRole: ["Search and book flights", "Manage reservations", "User authentication"],
    link: "https://github.com/azlfa-anwar/ensf480?search=1",
  },
  {
    id: 3,
    title: "Museum Database",
    techStack: ["MySQL", "Python"],
    category: "Database Management System",
    description:
      "A museum database system to manage exhibits, artists, and visitor information, providing efficient data retrieval and reporting.",
    imgSrc: museum,
    myRole: ["Database design", "Data retrieval", "Reporting"],
    link: "https://github.com/ENSF-300-Fall-2024/museum-project-system_error",
  },
  {
    id: 4,
    title: "Count Down Timer App",
    techStack: ["MPLab", "RealTerm", "C", "Python"],
    category: "Embedded Systems",
    description:
      "An embedded countdown timer application that allows users to set, start, and monitor countdowns using a microcontroller and serial communication.",
    imgSrc: karyawan,
    myRole: ["Developed embedded C code for microcontroller", "Implemented serial communication with Python"],
    link: "https://github.com/users/madihaisawesome/projects/1"
  },
  {
    id: 2,
    title: "Disaster Relief Management System",
    techStack: ["Java", "SQL"],
    category: "NANA",
    description:
      "Description coming soon",
    imgSrc: smartSpend,
    myRole: ["Built a modular Java application with optimized SQL databse integration for efficient data handling", "Created clean, reusable code across victim, worker, and medical record modules"],
    link: "gfhdgfh" , //link not available
  },

  // {
  //   id: 5,
  //   title: "MyStory",
  //   techStack: ["Django", "Jinja 2", "Python"],
  //   category: "Story Sharing Platform",
  //   description:
  //     "MyStory is a story-sharing platform built with Django and Python. It lets users create accounts, log in, share stories, and browse others' stories. The frontend uses HTML and CSS for a clean interface, and the admin interface allows efficient management of users and content.",
  //   imgSrc: mystory,
  //   myRole: [
  //     "Frontend Development",
  //     "UI/UX Design",
  //     "Project Management",
  //     "Backend Development",
  //   ],
  //   link: "https://mystoryapp.pythonanywhere.com/",
  // },
];
