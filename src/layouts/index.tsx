import { Outlet, useMatches } from 'react-router-dom';
import MyHeader from '@/components/MyHeader';
import MyFooter from '@/components/MyFooter';

function Layout() {
  // 获取当前匹配的所有路由（从根到当前叶子）
  const matches = useMatches();
  
  // 找到最后一个匹配的路由（即当前页面）的 handle 数据
  const lastMatch = matches[matches.length - 1];
  const showFooter = (lastMatch?.handle as { showFooter?: boolean })?.showFooter ?? true; // 默认显示

  return (
    <div id="app">
      <MyHeader />
      {/* 相当于 Vue 的 <router-view> */}
      <Outlet />
      {/* v-show 对应条件渲染，用 && 或三元表达式 */}
      {showFooter && <MyFooter />}
    </div>
  );
}

export default Layout;