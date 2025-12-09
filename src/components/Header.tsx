// Menu Component for page navigation

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";

const Menu: React.FC = () => {
    // Logic to display/hide the sidebar on mobile
    const [isActive, setIsActive] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsActive(!isActive);
    };

    // Logic to change and apply themes
    const { theme, setTheme } = useContext(ThemeContext);
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newTheme = e.target.value;

        if (newTheme === "light" || newTheme === "dark")
            setTheme(newTheme);
    };

    return (
        <header className="container mb-4">
            <nav className="navbar is-spaced has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <span className="icon is-large">
                            <i className="fab fas fa-home fa-lg"></i>
                        </span>
                    </Link>
                    <button role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="menu" onClick={handleClick}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className={`navbar-menu ${isActive ? "is-active" : ""}`} id="menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <Link to="/about" className="button is-rounded is-inverted">
                                <span className="icon">
                                    <i className="fas fa-user" aria-hidden="true"></i>
                                </span>
                                <span>About</span>
                            </Link>
                        </div>
                        <div className="navbar-item">
                            <Link to="/projects" className="button is-rounded is-inverted">
                                <span className="icon">
                                    <i className="fas fa-folder-open" aria-hidden="true"></i>
                                </span>
                                <span>Projects</span>
                            </Link>
                        </div>
                        <div className="navbar-item">
                            <Link to="/contact" className="button is-rounded is-inverted">
                                <span className="icon">
                                    <i className="fas fa-comment" aria-hidden="true"></i>
                                </span>
                                <span>Contact</span>
                            </Link>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="select">
                                <select value={theme} onChange={handleChange} title="Choose your prefered theme">
                                    <option value="light">☀️ Light</option>
                                    <option value="dark">🌙 Dark</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default Menu;