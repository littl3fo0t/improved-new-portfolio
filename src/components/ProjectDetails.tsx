// Project Details component

import Header from "../components/Header";
import Footer from "../components/Footer";
import projects from "../data/projects";
import Tags from "../components/Tags";
import convertTag from "../utils/convertTags";
import ProjectLinks from "./ProjectLinks";

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

    return (
        <>
            <title>Thomas Brun | {title}</title>

            <Header />

            <main className="container">
                <div className="has-text-centered">
                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">{title}</h1>
                </div>
                <div className="content">
                    <section>
                        <h2 className="is-spaced">Tech Stack</h2>
                        <Tags skills={tags.map(tag => convertTag(tag))} />
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