import type { Project } from "../types/project";
import project1Thumbnail from "../assets/images/thumbnails/Project-1.png";
import project2Thumbnail from "../assets/images/thumbnails/Project-2.png";
import project3Thumbnail from "../assets/images/thumbnails/Project-3.jpg";

const projects: Project[] = [
    {
        id: 1,
        title: "Yu-Gi-Oh! Card Search App (version 1)",
        imageUrl: project1Thumbnail,
        tags: ["HTML5", "CSS3", "JavaScript"],
        description: "A simple card search app for the Yu-Gi-Oh! trading card game built using HTML and vanilla JavaScript.",
        links: {
            github: "https://github.com/littl3fo0t/Yu-Gi-Oh-Card-App",
            live: null
        },
        isComplete: true,
        createdDate: new Date("2025-04-01")
    },
    {
        id: 3,
        title: "Poker Hand Analyzer",
        imageUrl: project3Thumbnail,
        tags: ["HTML5", "CSS3", "JavaScript", "Vue.js"],
        description: "A single page application built using Vue.js that displays 5 cards and determines the best Poker Hand from the current selection.",
        links: {
            github: "https://github.com/littl3fo0t/Poker-Hand-Analyzer",
            live: "https://littl3fo0t.github.io/Poker-Hand-Analyzer/"
        },
        isComplete: true,
        createdDate: new Date("2025-12-06")
    },
    {
        id: 2,
        title: "Yu-Gi-Oh! Card Search App (version 2)",
        imageUrl: project2Thumbnail,
        tags: ["HTML5", "CSS3", "TypeScript", "React", "Redux", "Vite"],
        description: "A more complex card search app for the Yu-Gi-Oh! trading card game built using Vite, React, TypeScript and Redux.",
        links: {
            github: "https://github.com/littl3fo0t/Yu-Gi-Oh-Card-App-v2",
            live: null
        },
        isComplete: true,
        createdDate: new Date("2025-04-01")
    }
];

export default projects;