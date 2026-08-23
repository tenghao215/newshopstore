import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layouts/Layout';     // 布局组件，包含 Header + Outlet + Footer
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,          // 使用布局组件包裹所有页面
    children: [
      {
        index: true,
        element: <Home />,
        // 自定义 meta 数据放在 handle 中
        handle: { showFooter: true },
      },
      {
        path: 'about',
        element: <About />,
        handle: { showFooter: false },
      },
      {
        path: 'contact',
        element: <Contact />,
        handle: { showFooter: true },
      },
    ],
  },
]);