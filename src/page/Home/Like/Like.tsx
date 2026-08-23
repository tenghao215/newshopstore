// TODO: 这个组件的内容是静态的，后续可以考虑改成动态的
import styles from './Like.module.scss';

function Like() {
    return (
        // 猜你喜欢
        <div className={styles.like}>
            <div className={styles.pyContainer}>
                <div className={styles.title}>
                    <h3 className={styles.fl}>猜你喜欢</h3>
                    <a href="javascript:;" className={styles.fr + ' ' + styles.tip + ' ' + styles.changeBnt}>换一换</a>
                </div>
                <div className={styles.bd}>
                    <ul className={styles.favourate}>
                        <li>
                            <img src="./images/like_02.png" alt="" />
                            <div className={styles.likeText}>
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/like_03.png" alt="" />
                            <div className={styles.likeText}>
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/like_01.png" alt="" />
                            <div className={styles.likeText}>
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/like_02.png" alt="" />
                            <div className={styles.likeText}>
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/like_03.png" alt="" />
                            <div className={styles.likeText}>
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/like_01.png" alt="" />
                            <div className={styles.likeText}>
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}