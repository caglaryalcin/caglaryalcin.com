/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import './layout.css'
import MOON from './../images/moon.png'
import SUN from './../images/sun.png'
import LinkedinLightLogo from '../images/social/linkedin_light.png'
import GithubLightLogo from '../images/social/github_light.png'
import TwitterLightLogo from '../images/social/twitter_light.png'
import LinkedinDarkLogo from '../images/social/linkedin_dark.png'
import GithubDarkLogo from '../images/social/github_dark.png'
import TwitterDarkLogo from '../images/social/twitter_dark.png'
const Layout = ({ children }) => {
    let theme = "dark";
    const [items, setItems] = useState(null);
    const my_tags = ["body", "p", "li","a","span", "h1", "h2", "h3"];
    const themeIcon = useRef(null);
    const themeContainer = useRef(null);

    useEffect(() => {
        setDark();
        setItems(document.getElementsByClassName("hNnXkn"));
    })

    const setTheme = () => {
        if (theme === "dark") {
            setLight();
            theme = "light";
        } else{
            setDark();
            theme = "dark";
        }
    }
    const setLight = ()=>{
        const root = document.querySelector(":root");
        root.style.setProperty( "background-color", "white" );
        my_tags.forEach((item)=> {
            let items = document.querySelector(item);
            items?.style.setProperty("color", "black");
        })


        let linkedin = document.querySelector(".linkedin");
        let twitter = document.querySelector(".twitter");
        let github = document.querySelector(".github");

        linkedin?.setAttribute("src", LinkedinDarkLogo);
        twitter?.setAttribute("src", TwitterDarkLogo);
        github?.setAttribute("src", GithubDarkLogo);



        themeContainer.current.classList.remove("shadow-dark");
        setTimeout(() => {
            themeContainer?.current.classList.add("shadow-light");
            themeContainer?.current.classList.remove("sun_moon_change");
        }, 300);
        themeIcon.current.classList.add("sun_moon_change");
        themeIcon.current.src = MOON;

        for(let i=0;i<items.length;i++){
            items.item(i).style.setProperty("background",  "#f7f7f7");
            items.item(i).style.setProperty("color",  "black");
        }

    }
    const setDark = ()=> {
        const root = document.querySelector(":root");
        root.style.setProperty(
            "background-color",
            "#181a1b");

        my_tags.forEach((item)=>{
            let items = document.querySelector(item);
            items?.style.setProperty("color",  "#d8d3d0");
        })

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
    }

  return (
    <>
      <div
        style={{
          margin: `60px auto`,
          maxWidth: 770,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
          <div ref={themeContainer} className="theme-container shadow-dark" onClick={setTheme}>
              <img ref={themeIcon} src={MOON} alt="moon" className="theme-icon"/>
          </div>
      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout