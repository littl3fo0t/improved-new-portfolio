// About Page

import Header from "../components/Header";
import skills from "../data/skills";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import resume from "../assets/documents/Thomas_Brun_Resume.pdf";

const About = () => {
    const sortedSkills = skills.sort((a, b) => b.rank - a.rank);

    return (
        <>
            <title>Thomas Brun | About Me</title>

            <Header />

            <div className="container">
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-centered">About Me</h1>
                <div className="columns">
                    <div className="column">
                        <section className="section">
                            <h2 className="title is-2">My Story</h2>
                            <p className="is-size-5">
                                I'm an aspiring Full-Stack Developer from the island of Mauritius 🦤 based in Halifax, Nova Scotia 🍁. Fluent in both <span className="has-text-weight-bold">English</span>  and <span className="has-text-weight-bold">French</span>.
                            </p>
                            <br />
                            <p className="is-size-5">
                                In 2016, I decided to travel half way across the globe 🌎 to deepen my coding expertise. Since then, I have worked with the data warehouse team at my home country's largest bank, contributed to the growth and development of new products for a leading insurance company in North America, and built numerous side-projects in my spare time to satisfy my own curiosity. Today, I am focused on mastering the ins-and-outs of Full-Stack Development. This portfolio will serve as my personal repository to showcase all the cool things I will be working on—I would love for you to join me on this journey 😊.
                            </p>
                            <br />
                            <a href={resume} className="button is-rounded is-medium" target="_blank">
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="far fa-file-pdf"></i>
                                    </span>
                                    <span>My Resume</span>
                                </span>
                            </a>
                        </section>
                    </div>
                    <div className="column">
                        <section className="section">
                            <h2 className="title is-2">My Skills</h2>
                            <p className="subtitle mt-2">Click on any of them to find out more 👀</p>
                            <Tags skills={sortedSkills} />
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
};

export default About;