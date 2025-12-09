define(["require", "exports", "preact/jsx-runtime", "ojs/ojvcomponent", "preact/hooks", "ojs/ojcontext", "./footer", "./header", "./content/index", "ojs/ojcorerouter", "ojs/ojurlparamadapter"], function (require, exports, jsx_runtime_1, ojvcomponent_1, hooks_1, Context, footer_1, header_1, index_1, CoreRouter, UrlParamAdapter) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = void 0;
    const routeArray = [
        { path: "", redirect: "about" },
        {
            path: "about",
            detail: {
                label: "About",
            },
        },
        {
            path: "portfolio",
            detail: {
                label: "Portfolio",
            },
        },
    ];
    const router = new CoreRouter(routeArray, {
        urlAdapter: new UrlParamAdapter(),
    });
    const pageChangeHandler = (value) => {
        router.go({ path: value });
    };
    exports.App = (0, ojvcomponent_1.registerCustomElement)("app-root", ({ appName = "Walter Egan's Portfolio", userLogin = "john.hancock@oracle.com" }) => {
        const [routePath, setRoutePath] = (0, hooks_1.useState)("");
        (0, hooks_1.useEffect)(() => {
            Context.getPageContext().getBusyContext().applicationBootstrapComplete();
            router.currentState.subscribe(routerUpdated);
            router.sync();
        }, []);
        const routerUpdated = (actionable) => {
            var _a;
            const newPath = (_a = actionable.state) === null || _a === void 0 ? void 0 : _a.path;
            setRoutePath(newPath);
        };
        return ((0, jsx_runtime_1.jsxs)("div", { id: "appContainer", class: "oj-web-applayout-page", children: [(0, jsx_runtime_1.jsx)(header_1.Header, { appName: appName, userLogin: userLogin, page: routePath, onPageChanged: pageChangeHandler, routes: routeArray }), (0, jsx_runtime_1.jsx)(index_1.default, { page: routePath, router: router }), (0, jsx_runtime_1.jsx)(footer_1.Footer, {})] }));
    }, "App", { "properties": { "appName": { "type": "string" }, "userLogin": { "type": "string" } } }, { "appName": "Walter Egan's Portfolio", "userLogin": "john.hancock@oracle.com" });
});
