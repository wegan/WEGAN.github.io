define(["require", "exports", "preact/jsx-runtime", "./about/index", "./portfolio/index", "preact"], function (require, exports, jsx_runtime_1, index_1, index_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Content = ({ router, page }) => {
        let pageContent = (page) => {
            switch (page) {
                case "about":
                    return (0, jsx_runtime_1.jsx)(index_1.default, {});
                case "portfolio":
                    return (0, jsx_runtime_1.jsx)(index_2.default, {});
            }
        };
        return ((0, jsx_runtime_1.jsx)("div", { class: "oj-web-applayout-max-width oj-web-applayout-content", children: pageContent(page) }));
    };
    exports.default = Content;
});
