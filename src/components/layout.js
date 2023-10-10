import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import MOON from './../images/moon.png';
import SUN from './../images/sun.png';
import LinkedinLightLogo from '../images/social/linkedin_light.png';
import GithubLightLogo from '../images/social/github_light.png';
import TwitterLightLogo from '../images/social/twitter_light.png';
import LinkedinDarkLogo from '../images/social/linkedin_dark.png';
import GithubDarkLogo from '../images/social/github_dark.png';
import TwitterDarkLogo from '../images/social/twitter_dark.png';

const Layout = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(null);
    const my_tags = useMemo(() => ["body", "p", "li", "a", "span", "h1", "h2", "h3"], []);
    const themeIcon = useRef(null);
    const themeContainer = useRef(null);

    const setDark = useCallback(() => {
        const root = document.querySelector(":root");
        root.style.setProperty("background-color", "#181a1b");
        my_tags.forEach((item) => {
            let items = document.querySelector(item);
            items?.style.setProperty("color", "#d8d3d0");
        });

        themeContainer.current.classList.remove("shadow-light");
        setTimeout(() => {
            themeContainer.current.classList.add("shadow-dark");
            themeIcon.current.classList.remove("sun_moon_change");
        }, 300);
        themeIcon.current.classList.add("sun_moon_change");
        themeIcon.current.src = SUN;

        let linkedin = document.querySelector(".linkedin");
        let twitter = document.querySelector(".twitter");
        let github = document.querySelector(".github");

        linkedin?.setAttribute("src", LinkedinLightLogo);
        twitter?.setAttribute("src", TwitterLightLogo);
        github?.setAttribute("src", GithubLightLogo);
      }, [my_tags]);

    useEffect(() => {
        setDark();
        setItems(document.getElementsByClassName("hNnXkn"));
    }, [setDark]);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        if (document.readyState === 'complete') {
            setLoading(false);
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
            setTimeout(setLight, 0);
        } else {
            setTheme("dark");
            setTimeout(setDark, 200);
        }
    };

    const setLight = () => {
        const root = document.querySelector(":root");
        root.style.setProperty("background-color", "white");
        my_tags.forEach((item) => {
            let items = document.querySelector(item);
            items?.style.setProperty("color", "black");
        });

        let linkedin = document.querySelector(".linkedin");
        let twitter = document.querySelector(".twitter");
        let github = document.querySelector(".github");

        linkedin?.setAttribute("src", LinkedinDarkLogo);
        twitter?.setAttribute("src", TwitterDarkLogo);
        github?.setAttribute("src", GithubDarkLogo);

        themeContainer.current.classList.remove("shadow-dark");
        setTimeout(() => {
            themeContainer.current.classList.add("shadow-light");
            themeIcon.current.classList.remove("sun_moon_change");
        }, 300);
        themeIcon.current.classList.add("sun_moon_change");
        themeIcon.current.src = MOON;

        for (let i = 0; i < items.length; i++) {
            items.item(i).style.setProperty("background", "#f7f7f7");
            items.item(i).style.setProperty("color", "black");
        }
    };

    return (
        <>
            {loading && <div className="loading-background">
                <div className="loader"></div>
            </div>}
            <div
                style={{
                    margin: `60px auto`,
                    maxWidth: 770,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                    opacity: !loading ? 1 : 0
                }}
            >
                <main>{children}</main>
                <div
                    ref={themeContainer}
                    className="theme-container shadow-dark"
                    onClick={toggleTheme}
                    onKeyPress={toggleTheme}
                    role="button"
                    tabIndex={0}
                >
                    <img ref={themeIcon} src={MOON} alt="moon" className="theme-icon" />
                </div>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
