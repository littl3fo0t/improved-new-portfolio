// Contact Page

import Menu from "../components/Menu";

const Contact = () => {
    return (
        <>
            <title>Thomas Brun | Contact</title>

            <Menu />

            <main>
                <section className="container has-text-centered">
                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Contact</h1>
                    <p className="subtitle is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">Feel free to reach out to me and I will back to you ASAP 😎</p>
                </section>
                <section className="container">
                    <form className="mt-4">
                        <div className="columns">
                            <div className="column">
                                <div className="field">
                                    <label htmlFor="name" className="label">Name</label>
                                    <div className="control has-icons-left">
                                        <input type="text"
                                            placeholder="Enter your name"
                                            className="input"
                                            id="name"
                                            required
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label htmlFor="email" className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input type="email"
                                            placeholder="Enter your email"
                                            className="input"
                                            id="email"
                                            required
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="message" className="label">Message</label>
                            <div className="control">
                                <textarea
                                    id="message"
                                    className="textarea"
                                    placeholder="Enter your massage"
                                    rows={10}
                                    required
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="container is-flex is-justify-content-center" id="form-controls">
                            <button className="button is-primary is-rounded" type="submit">
                                <span className="icon">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                                <span>Submit</span>
                            </button>
                            <button className="button is-danger is-rounded" type="reset">
                                <span className="icon">
                                    <i className="fas fa-trash-alt"></i>
                                </span>
                                <span>Reset</span>
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </>

    );
};

export default Contact;