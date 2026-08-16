const React = require("react");

const themeScript = `
  (function () {
    try {
      var savedTheme = window.localStorage.getItem("caglaryalcin-theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        document.documentElement.dataset.theme = savedTheme;
      }
    } catch {}
  })();
`;

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("script", {
      key: "theme-init",
      dangerouslySetInnerHTML: { __html: themeScript },
    }),
  ]);
};
