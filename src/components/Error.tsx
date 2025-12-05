// Error message component to be displayed on the Contact page if form submission failed

interface ErrorProps {
    error: string
};

const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <article className="message is-danger">
            <div className="message-header">
                <p>Error</p>
            </div>
            <div className="message-body">
                <p className="is-size-6">{error}</p>
            </div>
        </article>
    );
};

export default Error;