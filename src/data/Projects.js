import museum from "../assets/museum.png";
import Airplane from "../assets/Airplane.png";
import smartSpend from "../assets/disaster.png";
import karyawan from "../assets/timer.jpg";
import led from "../assets/led.png";
import game from "../assets/game.png";

export const projects = [

    {
    id: 6,
    title: "Sands of the Forgotten: Qarya Al-Mansiyah",
    techStack: ["Roblox Studio", "Lua Scripting"],
    category: "Game",
    description:
      "An immersive survival horror game set in a vast desert landscape, where players explore ancient ruins, uncover hidden secrets, and survive against mystical creatures.",
    imgSrc: game,
    myRole: ["Multiple jinn types with unique behaviors (whisperers, illusionists, hunters). AI reacts to player noise, movement, and proximity", "Added a possession subsystem using event-driven state changes", "Randomized item spawns, ritual components, and environmental events for high replay value"],
    link: "https://ro.blox.com/Ebh5?af_dp=roblox%3A%2F%2Fnavigation%2Fgame_details%3FgameId%3D7580102370&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2F122046560302014",
  },
  
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
    category: "Application",
    description:
      "A disaster relief management system to coordinate aid distribution, track resources, and manage volunteer efforts during emergencies.",
    imgSrc: smartSpend,
    myRole: ["Built a modular Java application with optimized SQL databse integration for efficient data handling", "Created clean, reusable code across victim, worker, and medical record modules"],
    link: "gfhdgfh" , //link not available
  },
  
  {
    id: 5,
    title: "LED Intensity Controller",
    techStack: ["C", "MPLab", "Microcontroller", "Python", "RealTerm"],
    category: "Application",
    description:
      "An embedded system application that allows users to control the intensity of an LED using a microcontroller, potentiometer, and serial communication.",
    imgSrc: led,
    myRole: ["Developed embedded C code for microcontroller", "Implemented serial communication with Python"],
    link: "gfhdgfh" , //link not available
  },
 

];
