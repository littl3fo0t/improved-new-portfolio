import type { Project } from "../types/project";
import project1Thumbnail from "../assets/images/thumbnails/Project-1.png";

const projects: Project[] = [
    {
        id: 1,
        title: "Yu-Gi-Oh! Card Search App (version 1)",
        imageUrl: project1Thumbnail,
        tags: ["HTML", "CSS", "JavaScript"],
        description: "A simple card search app for the Yu-Gi-Oh! trading card game built using HTML and vanilla JavaScript.",
        links: {
            github: "https://github.com/littl3fo0t/Yu-Gi-Oh-Card-App",
            live: null
        },
        isComplete: true,
        createdDate: new Date("2025-04-01")
    },
    {
        id: 2,
        title: "My First Portfolio Website",
        imageUrl: null,
        tags: ["HTML", "CSS", "JavaScript", "11ty", "Nunjucks", "GitHub Pages"],
        description: "My first attempt at building a portfolio website using 11ty with the Internationalization (i18n) plugin, and deployed to GitHub Pages.",
        links: {
            github: "https://github.com/littl3fo0t/littl3fo0t.github.io",
            live: "https://littl3fo0t.github.io/"
        },
        isComplete: false,
        createdDate: new Date("2025-05-30")
    },
    {
        id: 3,
        title: "Yu-Gi-Oh! Card Search App (version 2)",
        imageUrl: null,
        tags: ["HTML", "CSS", "TypeScript", "React", "Redux", "Vite"],
        description: "A more complex card search app for the Yu-Gi-Oh! trading card game built using Vite, React, TypeScript and Redux.",
        links: {
            github: "https://github.com/littl3fo0t/Yu-Gi-Oh-Card-App-v2",
            live: null
        },
        isComplete: false,
        createdDate: new Date("2025-04-01")
    }
];

export default projects;