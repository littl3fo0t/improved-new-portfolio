// Project Details component

import Header from "../components/Header";
import Footer from "../components/Footer";
import projects from "../data/projects";
import tagsData from "../data/tags";
import type TagDetails from "../types/tagDetails";
import type Tag from "../types/tag";
import ProjectLinks from "./ProjectLinks";
import TagList from "./tags/TagList";

interface ProjectDetailsProps {
    id: number;
    children: React.ReactNode
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ id, children }) => {
    const project = projects.find(project => project.id === id);

    if (!project) {
        return null;
    }

    const { title, tags, links } = project;

    const projectTagDetails: Partial<TagDetails> = Object.fromEntries(
        tags
            .filter((tag): tag is Tag => tag in tagsData)
            .map((tag) => [tag, tagsData[tag as Tag]])
    );

    return (
        <>
            <title>Thomas Brun | {title}</title>

            <Header />

            <main className="container box">
                <div className="has-text-centered">
                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">{title}</h1>
                </div>
                <div className="content">
                    <section className="mt-6">
                        <h2 className="is-spaced">Tech Stack</h2>
                        <TagList tags={projectTagDetails} />
                    </section>
                    <section>
                        <h2 className="is-spaced mt-6">Project Overview</h2>
                        {children}
                    </section>
                </div>
                <ProjectLinks github={links.github} live={links.live} />
            </main>

            <Footer />
        </>
    );
};

export default ProjectDetails;