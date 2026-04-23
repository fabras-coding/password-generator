
export default function ThemeToggle({theme, toggleTheme}){

    return(
        <button onClick={toggleTheme}>
            {theme === "light" ? "🌜 Dark Mode" : "🌞 Light Mode"}
        </button>

    )
}