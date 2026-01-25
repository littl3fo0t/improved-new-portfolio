import type { Competency } from "../types/competency";

const competencies: Competency[] = [
    {
        name: "frontend",
        displayName: "Frontend Development",
        icon: "fas fa-sitemap",
        order: 1
    },
    {
        name: "backend",
        displayName: "Backend Development",
        icon: "fas fa-code",
        order: 2
    },
    {
        name: "database",
        displayName: "Database Integration",
        icon: "fas fa-database",
        order: 3
    },
    {
        name: "testing",
        displayName: "Testing",
        icon: "fas fa-vial",
        order: 4
    },
    {
        name: "deployment",
        displayName: "Version Control & Deployment",
        icon: "fas fa-code-branch",
        order: 5
    },
    {
        name: "management",
        displayName: "Project Management & Collaboration",
        icon: "fas fa-tasks",
        order: 6
    }
];

export default competencies;