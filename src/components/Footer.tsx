// Footer Component

import bulmaImage from "../assets/images/made-with-bulma--white.png";

const Footer: React.FC = () => {
    return (
        <footer className="footer mt-4" data-theme="dark">
            <div className="is-flex is-justify-content-center mb-2">
                <a href="https://www.linkedin.com/in/thomasbrun1/" target="_blank" title="LinkedIn Profile">
                    <span className="icon is-large has-text-white">
                        <i className="fab fa-linkedin-in fa-2x"></i>
                    </span>
                </a>
                <a href="https://github.com/littl3fo0t" target="_blank" title="GitHub Profile">
                    <span className="icon is-large has-text-white">
                        <i className="fab fa-github fa-2x"></i>
                    </span>
                </a>
                <a href="mailto:thomas.brun.1703@hotmail.com" title="Personal email">
                    <span className="icon is-large has-text-white">
                        <i className="far fa-envelope fa-2x"></i>
                    </span>
                </a>
            </div>
            <div className="content has-text-centered">
                <p className="has-text-white is-size-5">
                    &copy; 2025 | Made with ❤️ by me
                </p>
            </div>
            <div className="is-flex is-justify-content-center">
                <a href="https://bulma.io" target="_blank" title="Bulma CSS link">
                    <img
                        src={bulmaImage}
                        alt="Made with Bulma CSS"
                        width="256"
                        height="48"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;