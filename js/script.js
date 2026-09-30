const themeButton = document.getElementById("theme-toggle");

function updateThemeButton(theme) {
    if (!themeButton) return;
    const dark = theme === "dark";
    themeButton.textContent = dark ? "☀️" : "🌙";
    themeButton.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    themeButton.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
}

const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme === "dark" || savedTheme === "light"
    ? savedTheme
    : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

document.documentElement.setAttribute("data-theme", initialTheme);
updateThemeButton(initialTheme);

if (themeButton) {
    themeButton.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        updateThemeButton(next);
    });
}
