// Project page for RESTful API

const Project4: React.FC = () => {
    return (
        <>
            <div className="is-size-5">
                <p>
                    The RESTful API project is a backend application built from scratch using <a href="https://bun.com/" target="_blank" rel="noopener noreferrer">Bun</a>, <a href="https://hono.dev/" target="_blank" rel="noopener noreferrer">Hono</a>, and TypeScript, designed to explore what goes into building a clean, well-structured API that other developers would actually enjoy working with.
                </p>
                <p>
                    The API follows standard REST principles, with clearly defined endpoints, consistent request and response contracts, and structured error handling throughout. Data modeling and schema validation are handled through Mongoose, ensuring that only well-formed data makes it into the system. Certain routes are protected and require authentication via tokens, restricting access to authorized requests only. The whole thing is written in TypeScript, which helped catch issues early and made the codebase easier to reason about as it grew.
                </p>
                <p>
                    This project was my <span className="has-text-weight-bold">first time working with both Bun and Hono</span>, and it taught me a lot about what happens under the hood when you strip away the abstractions. I learned how to:
                </p>
                <ol type="1">
                    <li>Structure a REST API in a way that is intuitive and consistent for consumers.</li>
                    <li>Use Hono as a lightweight alternative to Express and appreciate the tradeoffs involved.</li>
                    <li>Leverage Bun as a runtime and understand how it differs from Node.js in practice.</li>
                    <li>Implement token-based authentication and protect routes so that only authorized requests can access restricted resources.</li>
                    <li>Enforce data integrity at the schema level using Mongoose validation.</li>
                    <li>Write meaningful error responses that make debugging easier for anyone consuming the API.</li>
                    <li>Think critically about developer experience as a design goal, not an afterthought.</li>
                </ol>
                <p>
                    Overall, this project deepened my understanding of backend fundamentals and gave me a clearer picture of what makes an API reliable and easy to work with — knowledge that directly informs how I approach full-stack development.
                </p>
            </div>
        </>

    )
}

export default Project4;