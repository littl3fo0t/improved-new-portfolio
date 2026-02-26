import type { Project } from "../types/project";
import Tag from "../types/tag";
import project1Thumbnail from "../assets/images/thumbnails/Project-1.png";
import project2Thumbnail from "../assets/images/thumbnails/Project-2.png";
import project3Thumbnail from "../assets/images/thumbnails/Project-3.jpg";
import project4Thumbnail from "../assets/images/thumbnails/Project-4.png";
import project5Thumbnail from "../assets/images/thumbnails/Project-5.svg";

const projects: Project[] = [
    {
        id: 1,
        title: "Yu-Gi-Oh! Card Search App (version 1)",
        imageUrl: project1Thumbnail,
        tags: [Tag.HTML, Tag.CSS, Tag.JavaScript, Tag.Frontend, Tag.API],
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
        tags: [Tag.HTML, Tag.CSS, Tag.JavaScript, Tag.Vue, Tag.Frontend, Tag.API],
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
        tags: [Tag.HTML, Tag.CSS, Tag.TypeScript, Tag.React, Tag.Redux, Tag.Vite, Tag.Frontend, Tag.API],
        description: "A more complex card search app for the Yu-Gi-Oh! trading card game built using Vite, React, TypeScript and Redux.",
        links: {
            github: "https://github.com/littl3fo0t/Yu-Gi-Oh-Card-App-v2",
            live: null
        },
        isComplete: true,
        createdDate: new Date("2025-04-01")
    },
    {
        id: 4,
        title: "RESTful API",
        imageUrl: project4Thumbnail,
        tags: [Tag.API, Tag.TypeScript, Tag.Bun, Tag.MongoDB, Tag.Deployment],
        description: "A RESTful API designed and implemented from scratch using Bun, Hono, and TypeScript, following standard REST principles.",
        links: {
            github: "https://github.com/NSCC-ITC-Winter2026-PROG5016-700-MCa/assignment2-restapi-littl3fo0t",
            live: "https://assignment2-restapi-thomasbrun.onrender.com"
        },
        isComplete: true,
        createdDate: new Date("2026-01-19")
    },
    {
        id: 5,
        title: "Client Portfolio Website",
        imageUrl: project5Thumbnail,
        tags: [Tag.NextJS, Tag.TypeScript, Tag.Vitest, Tag.PostgreSQL, Tag.OAuth, Tag.Deployment],
        description: "A full-stack website built for a real-world client — a carpenter — featuring a public portfolio and a secure admin dashboard for managing site content.",
        links: {
            github: "https://github.com/NSCC-ITC-Winter2026-WEBD5020-701-MCr/final-project-group3",
            live: "https://www.shorelinewoodworks.ca/"
        },
        isComplete: true,
        createdDate: new Date("2026-02-03")
    }
];

export default projects;