// Footer Component

const Footer: React.FC = () => {
    return (
        <footer className="footer has-text-centered">
            <div className="container is-narrow">
                <div className="content">
                    <div className="columns">
                        <div className="column">
                            <a href="https://www.linkedin.com/in/thomasbrun1/" target="_blank">
                                <span className="icon is-large">
                                    <i className="fab fa-linkedin-in"></i>
                                </span>
                            </a>
                        </div>
                        <div className="column">
                            <span className="icon is-large">
                                <i className="fab fa-github"></i>
                            </span>
                        </div>
                        <div className="column">
                            <span className="icon is-large">
                                <i className="far fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;