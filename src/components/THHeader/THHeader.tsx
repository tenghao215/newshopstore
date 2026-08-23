import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './THHeader.module.scss';

function THHeader() {
    const [userName, setUserName] = useState<string | null>(null);
    const [keyword, setKeyword] = useState<string>('');


    return (
        <header className={styles.header}>
            {/* 头部的第一行 */}
            <div className={styles.top}>
                <div className={styles.container}>
                    <div className={styles.loginList}>
                        <p>尺素百货欢迎您^_^</p>
                        {
                            !userName ?
                                (<p>
                                    <span>请</span>
                                    <Link to="/login">登录</Link>
                                    <Link to="/register" className={styles.register}>免费注册</Link>
                                </p>) :
                                (<p>
                                    <a>{userName}</a>
                                    <a className={styles.register} onClick={logout}>
                                        退出登录
                                    </a>
                                </p>)
                        }
                    </div>
                    <div className={styles.typeList}>
                        <NavLink to='/center/myorder'>我的订单</NavLink>
                        <NavLink to='/shopcart'>我的购物车</NavLink>
                        <a>我的尺素</a>
                        <a>尺素会员</a>
                        <a>企业采购</a>
                        <a>关注尺素</a>
                        <a>合作招商</a>
                        <a>商家后台</a>
                    </div>
                </div>
            </div>
            {/* 头部第二行 搜索区域 */}
            <div className={styles.bottom}>
                <h1 className={styles.logoArea}>
                    <NavLink to="/home" className={styles.logo} title="尺素百货">
                        <img src="./images/logo.png" alt="" />
                    </NavLink>
                </h1>
                <div className={styles.searchArea}>
                    <form action="###" className={styles.searchForm}>
                        <input
                            type="text"
                            id="autocomplete"
                            className={styles.inputError + ' ' + styles.inputXxlarge}
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button
                            className={styles.suiBtn + ' ' + styles.btnXlarge + ' ' + styles.btnDanger}
                            type="button"
                            onClick={toSearch}
                        >
                            搜索
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
}