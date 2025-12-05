// Contact Page

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error from "../components/Error";
import Success from "../components/Success";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFail, setIsFail] = useState(false);
    const [error, setError] = useState("");

    // Clear error message
    useEffect(() => {
        if (!isFail)
            setError("");
    }, [error]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate form input
        if (!name || name.trim() === "" || !email || email.trim() === "" || !message || message.trim() === "") { // validation failed
            setIsFail(true);
            setError("One of the required fields was not filled out properly. Please double check and try again.");
        } else {
            setIsLoading(true);

            emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

            // Attempt to send email
            try {
                await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
                    name: name.trim(),
                    email: email.trim(),
                    message: message.trim()
                });

                setIsSuccess(true);
                setIsFail(false);

                // Clear input fields
                setName("");
                setEmail("");
                setMessage("");
            } catch (err) {
                //console.log(err);
                setIsSuccess(false);
                setIsFail(true);
                setError("An unexpected issue has occurred. Please either try again later or reach out to me directly by email at thomas.brun.1703@hotmail.com.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleReset = () => {
        setName("");
        setEmail("");
        setMessage("");
        setIsLoading(false);
        setIsFail(false);
        setIsSuccess(false)
        setError("");
    }
    return (
        <>
            <title>Thomas Brun | Contact</title>

            <Header />

            <main>
                <section className="container has-text-centered">
                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Contact</h1>
                    <p className="subtitle is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">Feel free to reach out to me and I will back to you ASAP 😎</p>
                </section>
                <div className="container mt-4">
                    {isFail && <Error error={error} />}

                    {isSuccess && <Success />}

                    <form className="box mt-4" onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="name" className="label">Name</label>
                            <div className="control has-icons-left">
                                <input type="text"
                                    placeholder="Enter your name"
                                    className="input"
                                    id="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="email" className="label">Email</label>
                            <div className="control has-icons-left">
                                <input type="email"
                                    placeholder="Enter your email"
                                    className="input"
                                    id="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
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
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    required
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="is-flex is-justify-content-center" id="form-controls">
                            <button className={`button is-primary is-rounded ${isLoading ? "is-loading" : ""}`} type="submit" disabled={isLoading}>
                                <span className="icon">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                                <span>Submit</span>
                            </button>
                            <button className="button is-danger is-rounded" type="reset" onClick={handleReset}>
                                <span className="icon">
                                    <i className="fas fa-trash-alt"></i>
                                </span>
                                <span>Reset</span>
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </>

    );
};

export default Contact;