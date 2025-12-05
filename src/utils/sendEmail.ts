import emailjs from '@emailjs/browser';

const sendEmail = (name: string, email: string, message: string) => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
        name,
        email,
        message
    });
};

export default sendEmail;