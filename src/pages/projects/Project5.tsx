// Project page for Client Portfolio Website

const Project5: React.FC = () => {
    return (
        <>
            <div className="is-size-5">
                <p>
                    The Client Portfolio Website is a full-stack application built for a real-world client — a carpenter — featuring a public-facing portfolio and a secure admin dashboard for managing site content without touching any code.
                </p>
                <p>
                    The public side of the site displays the carpenter's work in an organized, visually clean layout. The admin dashboard, accessible only after signing in via <span className="has-text-weight-bold">OAuth</span>, allows the client to add, edit, remove, and reorder portfolio items through a drag-and-drop interface powered by <a href="https://dndkit.com/overview" target="_blank" rel="noopener noreferrer">dnd-kit</a>. All content is stored in a <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a> database hosted on <a href="https://neon.com/" target="_blank" rel="noopener noreferrer">Neon</a> and managed through <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer">Prisma</a>, while media uploads are handled by Cloudinary for optimized storage and delivery.
                </p>
                <p>
                    This project came with a lot of firsts, and honestly it's one of the ones I'm most proud of. I learned how to:
                </p>
                <ol type="1">
                    <li>
                        Work with <span className="has-text-weight-bold">Next.js</span> for the first time — and coming from a React background, I found it mostly intuitive. The file-based routing and built-in API routes made it easy to get moving quickly, and we were able to deliver the project within a 3-week timeline partly because of how natural the transition felt.
                    </li>
                    <li>Design a system around a real user's needs rather than a project brief, which completely shifts how you think about every decision you make.</li>
                    <li>Implement OAuth authentication to secure access for a single administrative user.</li>
                    <li>Use <span className="has-text-weight-bold">Prisma</span> as an ORM to model and interact with a relational database cleanly.</li>
                    <li>Build an intuitive <span className="has-text-weight-bold">drag-and-drop</span> experience and sync it reliably with backend state.</li>
                    <li>
                        Set up a testing suite using <span className="has-text-weight-bold">Vitest</span>, <span className="has-text-weight-bold">React Testing Library</span>, and <span className="has-text-weight-bold">Cypress</span> — though not quite in the way I originally planned. I had grand plans for Cypress to handle all of my end-to-end testing, but discovered it doesn't play nicely with OAuth. Vitest ended up stepping in to fill that gap, and the experience taught me that adaptability is just as important as planning.
                    </li>
                    <li>
                        Use <span className="has-text-weight-bold">GitHub Actions</span> to automate workflows — running test suites, flagging linting errors, and automatically assigning reviewers on pull requests. Having these guardrails in place made a real difference in catching bugs before they ever made it upstream.
                    </li>
                    <li>
                        Follow proper collaborative Git etiquette end-to-end for the first time: fork from upstream → clone locally → create a feature branch → make changes → commit → open a pull request → get it reviewed and merged → sync local with upstream → sync with origin → start the next issue. Going through that full cycle consistently gave me a much deeper appreciation for why those conventions exist.
                    </li>
                </ol>
            </div>
        </>
    );
};

export default Project5;