import styles from './Floor.module.scss';
import type { FloorProps } from './types';
import THCarousel from '@/components/THCarousel';

function Floor(floorProps: FloorProps) {

    return (
        <div className={styles.floor}>
            <div className={styles.pyContainer}>
                <div className={styles.title}>
                    <h3 className={styles.fl}>{floorProps.name}</h3>
                    <div className={styles.fr}>
                        <ul className={styles.navTabs}>
                            {/* TODO:要分析key=index可不可取 */}
                            {floorProps.navList.map((nav, index) => (
                                <li key={index} className={index === 0 ? styles.active : ''}>
                                    <a href="#tab1" data-toggle="tab">{nav.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.tabContent}>
                    <div className={styles.tabPane}>
                        <div className={styles.floor1}>
                            <div className={styles.blockgary}>
                                 {/* TODO:要分析key=index可不可取 */}
                                {floorProps.keywords.map((k, index) => (
                                    <ul className={styles.jdList} key={index}>
                                        <li v-for="(k, index) of floorProps.keywords" key={index}>
                                            {k}
                                        </li>
                                    </ul>
                                ))}

                                <img src={floorProps.imgUrl} />
                            </div>
                            <div className={styles.floorBanner}>
                                <THCarousel list={floorProps.carouselList} />
                            </div>
                            <div className={styles.split}>
                                <span className={styles.floorXLine}></span>
                                <div className={styles.floorConverPit}>
                                    <img src={floorProps.recommendList[0]} />
                                </div>
                                <div className={styles.floorConverPit}>
                                    <img src={floorProps.recommendList[1]} />
                                </div>
                            </div>
                            <div className={styles.split + ' ' + styles.center}>
                                <img src={floorProps.bigImg} />
                            </div>
                            <div className={styles.split}>
                                <span className={styles.floorXLine}></span>
                                <div className={styles.floorConverPit}>
                                    <img src={floorProps.recommendList[2]} />
                                </div>
                                <div className={styles.floorConverPit}>
                                    <img src={floorProps.recommendList[3]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Floor;