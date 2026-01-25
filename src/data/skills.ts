import type { Skill } from "../types/skill";

const skills: Skill[] = [
    {
        name: "typescript",
        displayName: "TypeScript",
        hasAddons: false,
        iconName: null,
        rank: 9
    },
    {
        name: "javascript",
        displayName: "JavaScript",
        hasAddons: true,
        iconName: ["fab", "fa-js-square"],
        rank: 8
    },
    {
        name: "github",
        displayName: "GitHub",
        hasAddons: true,
        iconName: ["fab", "fa-github"],
        rank: 7
    },
    {
        name: "react",
        displayName: "React",
        hasAddons: true,
        iconName: ["fab", "fa-react"],
        rank: 8
    },
    {
        name: "sql",
        displayName: "SQL",
        hasAddons: true,
        iconName: ["fas", "fa-database"],
        rank: 7
    },
    {
        name: "eleventy",
        displayName: "11ty",
        hasAddons: false,
        iconName: null,
        rank: 6
    },
    {
        name: "python",
        displayName: "Python",
        hasAddons: true,
        iconName: ["fab", "fa-python"],
        rank: 6
    },
    {
        name: "html",
        displayName: "HTML5",
        hasAddons: true,
        iconName: ["fab", "fa-html5"],
        rank: 9
    },
    {
        name: "css",
        displayName: "CSS3",
        hasAddons: true,
        iconName: ["fab", "fa-css3-alt"],
        rank: 8
    },
    {
        name: "nodejs",
        displayName: "Node.js",
        hasAddons: true,
        iconName: ["fab", "fa-node"],
        rank: 7
    },
    {
        name: "express",
        displayName: "Express.js",
        hasAddons: false,
        iconName: null,
        rank: 6
    },
    {
        name: "bun",
        displayName: "Bun",
        hasAddons: false,
        iconName: null,
        rank: 6
    },
    {
        name: "hono",
        displayName: "Hono",
        hasAddons: true,
        iconName: ["fas", "fa-fire-alt"],
        rank: 7
    },
    {
        name: "mongodb",
        displayName: "MongoDB",
        hasAddons: true,
        iconName: ["fas", "fa-database"],
        rank: 8
    },
    {
        name: "git",
        displayName: "Git",
        hasAddons: true,
        iconName: ["fab", "fa-git-alt"],
        rank: 7
    },
    {
        name: "jest",
        displayName: "Jest",
        hasAddons: true,
        iconName: ["fas", "fa-vial"],
        rank: 8
    },
    {
        name: "vitest",
        displayName: "Vitest",
        hasAddons: true,
        iconName: ["fas", "fa-vial"],
        rank: 8
    },
    {
        name: "figma",
        displayName: "Figma",
        hasAddons: true,
        iconName: ["fab", "fa-figma"],
        rank: 5
    },
    {
        name: "jira",
        displayName: "Jira",
        hasAddons: true,
        iconName: ["fab", "fa-jira"],
        rank: 4
    }
];

export default skills;