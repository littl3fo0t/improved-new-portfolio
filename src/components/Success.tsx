// Success component to display message on Contact page on successfully form submission

const Success:React.FC = () => {
    return (
        <article className="message is-success">
            <div className="message-header">
                <p>Success</p>
            </div>
            <div className="message-body">
                <p className="is-size-6">
                    Thanks for getting in touch!
                </p>
                <p className="is-size-6">
                    You should be receiving an automatic reply very soon and I will do my best to get back to you ASAP.
                </p>
            </div>
        </article>
    );
};

export default Success;