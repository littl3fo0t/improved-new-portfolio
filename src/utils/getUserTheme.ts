// Function to detect and return the user's default theme

const getUserTheme = () => {
    const prefersDarkMode  = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDarkMode  ? "dark" : "light";
};

export default getUserTheme;