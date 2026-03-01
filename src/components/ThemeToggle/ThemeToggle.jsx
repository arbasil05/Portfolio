import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            className="Theme-Toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
        >
            <span className="Theme-Toggle-Icon">
                {theme === 'light' ? '🌙' : '☀️'}
            </span>
            {theme === 'light' ? 'Lights off' : 'Lights on'}
        </button>
    );
};

export default ThemeToggle;
