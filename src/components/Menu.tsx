// Menu Component for page navigation

import { Link } from "react-router-dom";

const Menu: React.FC = () => {
    return (
        <header className="container">
            <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <img src="https://bulma.io/assets/images/placeholders/48x48.png" alt="placeholder" className="image image is-48x48" />
                    </Link>
                    <button role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="navbar-menu" id="menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to="/about" className="button is-rounded">
                                    <span className="icon">
                                        <i className="fas fa-user" aria-hidden="true"></i>
                                    </span>
                                    <span>About</span>
                                </Link>
                                <Link to="/projects" className="button is-rounded">
                                    <span className="icon">
                                        <i className="fas fa-folder-open" aria-hidden="true"></i>
                                    </span>
                                    <span>Projects</span>
                                </Link>
                                <Link to="/contact" className="button is-rounded">
                                    <span className="icon">
                                        <i className="fas fa-comment" aria-hidden="true"></i>
                                    </span>
                                    <span>Contact</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="select">
                                <select>
                                    <option value="">Choose theme</option>
                                    <option value="">☀️ Light</option>
                                    <option value="">🌙 Dark</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Menu;