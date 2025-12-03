// About Page

import Menu from "../components/Menu";
import skills from "../data/skills";
import Tags from "../components/Tags";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <title>Thomas Brun | About Me</title>

            <Menu />
            
            <div className="container">
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-centered">About Me</h1>
                <div className="columns">
                    <div className="column">
                        <section className="section">
                            <h2 className="title is-2">My Story</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ex ligula, fringilla porttitor dapibus eu, rhoncus eu libero. Duis ac dui blandit, vulputate sapien et, molestie eros. Duis viverra convallis turpis nec eleifend. Nulla rhoncus et neque vitae sagittis. Sed maximus id justo eu mattis. Vivamus eu sagittis nibh, consequat rhoncus arcu. Mauris a accumsan leo, non maximus tellus. Vestibulum venenatis ut ex eget eleifend. Donec dignissim lobortis nunc in molestie. Quisque pharetra feugiat ex, et dignissim felis laoreet ut. Sed enim massa, sodales eget nibh ac, aliquet ullamcorper sapien. In et dolor sapien.
                            </p>
                            <br />
                            <p>
                                Praesent placerat scelerisque urna, ac accumsan quam. Etiam ac urna eu tellus viverra placerat. Nullam at molestie nisl. Pellentesque velit mi, maximus sit amet dapibus ac, volutpat quis nisi. Pellentesque semper convallis faucibus. Mauris rhoncus ligula at urna posuere dignissim. Proin odio nibh, aliquam non convallis in, elementum id magna. In feugiat dolor quis dui rhoncus, eget pulvinar orci cursus. Nulla efficitur maximus augue, ut tincidunt risus blandit non. Nunc molestie varius congue. Morbi at est non urna tempus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </section>
                    </div>
                    <div className="column">
                        <section className="section">
                            <h2 className="title is-2">My Skills</h2>
                            <Tags skills={skills} />
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
};

export default About;