import React, { useEffect, useLayoutEffect, useState } from 'react';
import './layout.css';
import MOON from './../images/moon.png';
import SUN from './../images/sun.png';
import ThemeContext from '../context/theme-context';

const THEME_KEY = 'caglaryalcin-theme';
const useBrowserLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Layout = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    useBrowserLayoutEffect(() => {
        let savedTheme;

        try {
            savedTheme = window.localStorage.getItem(THEME_KEY);
        } catch {
            savedTheme = null;
        }

        if (savedTheme === 'light' || savedTheme === 'dark') {
            setTheme(savedTheme);
            document.documentElement.dataset.theme = savedTheme;
        } else {
            document.documentElement.dataset.theme = 'dark';
        }
    }, []);

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = nextTheme;
            try {
                window.localStorage.setItem(THEME_KEY, nextTheme);
            } catch {
                // The theme still works when storage is unavailable.
            }
            return nextTheme;
        });
    };

    const themeAction = theme === 'dark'
        ? 'Switch to light mode'
        : 'Switch to dark mode';

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="site-shell">
                <main>{children}</main>
                <button
                    type="button"
                    className="theme-container"
                    onClick={toggleTheme}
                    aria-label={themeAction}
                    title={themeAction}
                >
                    <img
                        src={theme === 'dark' ? SUN : MOON}
                        alt=""
                        aria-hidden="true"
                        className="theme-icon"
                    />
                </button>
            </div>
        </ThemeContext.Provider>
    );
};

export default Layout;
