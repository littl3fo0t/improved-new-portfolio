// Home Page

import Header from "../components/Header";
import Footer from "../components/Footer";
import avatar from "../assets/images/avatar.png";

const Home = () => {
    return (
        <>
            <title>Thomas Brun | Full-Stack Developer</title>
            <Header />

            <main className="container has-text-centered">
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Application Developer, Systems Analyst & Aspiring Full-Stack Developer</h1>
                <h2 className="subtitle is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">Hi, I'm Thomas 👋</h2>
                <figure className="image container" id="avatar">
                    <img 
                        src={avatar} 
                        alt="Avatar image" 
                        className="is-rounded is-spaced"
                    />
                </figure>
            </main>

            <Footer />
        </>
    );
};

export default Home;