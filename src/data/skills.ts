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
        iconName: ["fab", "fa-database"],
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
        name: "php",
        displayName: "PHP",
        hasAddons: true,
        iconName: ["fab", "fa-php"],
        rank: 4
    },
    {
        name: "golang",
        displayName: "Go",
        hasAddons: false,
        iconName: null,
        rank: 6
    },
    {
        name: "csharp",
        displayName: "C#",
        hasAddons: false,
        iconName: null,
        rank: 4
    }
];

export default skills;