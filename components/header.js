define(["require", "exports", "preact/jsx-runtime", "preact/hooks", "ojs/ojresponsiveutils", "ojs/ojtoolbar", "ojs/ojmenu", "ojs/ojbutton"], function (require, exports, jsx_runtime_1, hooks_1, ResponsiveUtils) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Header = Header;
    function Header({ appName, userLogin }) {
        const mediaQueryRef = (0, hooks_1.useRef)(window.matchMedia(ResponsiveUtils.getFrameworkQuery("sm-only")));
        const [isSmallWidth, setIsSmallWidth] = (0, hooks_1.useState)(mediaQueryRef.current.matches);
        (0, hooks_1.useEffect)(() => {
            mediaQueryRef.current.addEventListener("change", handleMediaQueryChange);
            return (() => mediaQueryRef.current.removeEventListener("change", handleMediaQueryChange));
        }, [mediaQueryRef]);
        function handleMediaQueryChange(e) {
            setIsSmallWidth(e.matches);
        }
        function getDisplayType() {
            return (isSmallWidth ? "icons" : "all");
        }
        ;
        function getEndIconClass() {
            return (isSmallWidth ? "oj-icon demo-appheader-avatar" : "oj-component-icon oj-button-menu-dropdown-icon");
        }
        return ((0, jsx_runtime_1.jsx)("header", { role: "banner", class: "oj-web-applayout-header", children: (0, jsx_runtime_1.jsx)("div", { class: "oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center", children: (0, jsx_runtime_1.jsx)("div", { class: "oj-flex-bar-middle oj-sm-align-items-baseline", style: "justify-content: center", children: (0, jsx_runtime_1.jsx)("h1", { class: "oj-web-applayout-header-title", title: "Walter Egan", children: appName }) }) }) }));
    }
});
