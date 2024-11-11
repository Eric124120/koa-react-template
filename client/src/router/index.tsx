import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

// 使用 require.context 来动态导入页面组件
const pages = import.meta.glob('../pages/**/*.tsx', { eager: true });
const generateRoutes = () => {
return Object.keys(pages).map((pagePath) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pageModule: any = pages[pagePath];
    const pageName = pagePath.split('/').pop()?.replace('.tsx', '') ?? '';
    const routePath = `/${pageName.toLowerCase()}`;
    
    const routeConfig = pageModule.routeConfig || { title: pageName };

    return {
    path: routePath,
    component: pageModule.default,
    name: pageName,
    config: routeConfig,
    };
});
};

// 动态生成路由
const AppRoutes = () => {
const routes = generateRoutes();

return (
    <Router>
    <Suspense fallback={<Spin />}>
        <Routes>
        {routes.map((route) => (
            <Route
            key={route.path}
            path={route.path}
            element={React.createElement(route.component)}
            />
        ))}
        </Routes>
    </Suspense>
    </Router>
);
};

export default AppRoutes;
