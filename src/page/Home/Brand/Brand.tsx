import styles from './Brand.module.scss';

function Brand() {

    // TODO:后期可以做成动态的
    return (
        <div className={styles.brand}>
            <div className={styles.pyContainer}>
                <ul className={styles.brandList}>
                    <li className={styles.brandItem}>
                        <img src="./images/brand_21.png" />
                    </li>
                    <li className={styles.brandItem}>
                        <img src="./images/brand_03.png" />
                    </li>
                    <li className={styles.brandItem}>
                        <img src="./images/brand_05.png" />
                    </li>
                    <li className={styles.brandItem}>
                        <img src="./images/brand_07.png" />
                    </li>
                    <li className={styles.brandItem}>
                        <img src="./images/brand_09.png" />
                    </li>
                    <li className={styles.brandItem}>
                        <img src="./images/brand_11.png" />
                    </li>
                    <li className={styles.brandItem}>
                        <img src="./images/brand_13.png" />
                    </li>
                    <li className={styles.brandItem}>
                        <img src="./images/brand_15.png" />
                    </li>
                    <li className={styles.brandItem}>
                        <img src="./images/brand_17.png" />
                    </li>
                    <li className={styles.brandItem}>
                        <img src="./images/brand_19.png" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Brand