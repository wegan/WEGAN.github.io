define(["require", "exports", "preact/jsx-runtime"], function (require, exports, jsx_runtime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = Footer;
    const _DEFAULT_LINKS = [
        {
            name: "About Oracle",
            linkId: "aboutOracle",
            linkTarget: "http://www.oracle.com/us/corporate/index.html#menu-about"
        },
        {
            name: "Contact Us",
            linkId: "contactUs",
            linkTarget: "http://www.oracle.com/us/corporate/contact/index.html"
        },
        {
            name: "Legal Notices",
            linkId: "legalNotices",
            linkTarget: "http://www.oracle.com/us/legal/index.html"
        },
        {
            name: "Terms Of Use",
            linkId: "termsOfUse",
            linkTarget: "http://www.oracle.com/us/legal/terms/index.html"
        },
        {
            name: "Your Privacy Rights",
            linkId: "yourPrivacyRights",
            linkTarget: "http://www.oracle.com/us/legal/privacy/index.html"
        }
    ];
    function Footer({ links = _DEFAULT_LINKS }) {
        return ((0, jsx_runtime_1.jsx)("footer", { class: "oj-web-applayout-footer", role: "contentinfo", children: (0, jsx_runtime_1.jsx)("div", { style: "justify-content: center", class: "oj-flex-item oj-flex oj-justify-content-center oj-text-color-secondary oj-typography-body-sm", children: "Copyright \u00A9 2025 Walter Egan - All rights reserved." }) }));
    }
});
