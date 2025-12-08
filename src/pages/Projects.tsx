// Projects page

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectsContainer from "../components/ProjectsContainer";
import projects from "../data/projects";
import { useSearchParams } from "react-router-dom";
import type { Project } from "../types/project";
import NoProjectsFound from "../components/NoProjectsFound";

const Projects: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [tag, setTag] = useState<string | null>(null);
    const [selectedProjects, setSelectedProjects] = useState(projects);
    const [sortedProjects, setSortedProjects] = useState<Project[]>([]);

    // Step 1 - Get tag from the search query (if any)
    useEffect(() => {
        const t = searchParams.get("tag");
        setTag(t);
    }, [searchParams]);

    // Step 2 - If tag is set, filter projects accordingly
    useEffect(() => {
        let filtered = projects;

        if (tag) {
            filtered = projects.filter(p => p.tags.includes(tag));
        }

        setSelectedProjects(filtered);
    }, [tag]);

    // Set 3 - Irrespective of whether the tag is set, sort all projects by date
    useEffect(() => {
        setSortedProjects(
            [...selectedProjects].sort(
                (a, b) => a.createdDate.getTime() - b.createdDate.getTime()
            )
        );
    }, [selectedProjects]);

    const handleClick = () => {
        setTag(null);
        setSelectedProjects(projects);
    };

    return (
        <>
            <title>Thomas Brun | My Projects</title>

            <Header />

            <main>
                <div className="container has-text-centered">
                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Projects</h1>
                </div>
                <div className="container">
                    {tag && sortedProjects.length > 0 && (
                        <button className="button is-danger is-outlined" onClick={handleClick}>
                            <span>{tag}</span>
                            <span className="icon">
                                <i className="fas fa-times"></i>
                            </span>
                        </button>
                    )}

                    {sortedProjects.length > 0 && <ProjectsContainer projects={sortedProjects} />}

                    {sortedProjects.length === 0 && <NoProjectsFound />}
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Projects;