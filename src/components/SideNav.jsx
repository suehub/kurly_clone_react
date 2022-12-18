import React, { useEffect } from 'react';
import styles from './sideNav.module.css';
import { recentViewList } from '../recoil/RecentView';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export default function SideNav() {

    const product = useRecoilState(recentViewList);
    console.log(product);

    const navigate = useNavigate();

    useEffect(() => {

    }, [product]);

    return (
        <>
        <div className={styles.sideNavWrapper}>
            <nav className={styles.sideNav}>
                <a href="https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/delivery_search/delivery_search">
                    <img className={styles.sideNavMainImg} src="https://res.kurly.com/_next/static/images/deliveryInfo_20221122-9988ad6f6927b33d079e3f89e9d8826f.png" alt=""/>
                </a>
                <div className={styles.sideNavUl}>
                        <a href="/shop/main/html.php?htmid=event/kurly.htm&amp;name=lovers">
                            <div>등급별 혜택</div>
                        </a>
                        <a href="/shop/board/list.php?id=recipe">
                            <div>레시피</div>
                        </a>
                </div>
                <div className={styles.recentView}>
                    <button disabled className={styles.recentViewButtonTop}></button>
                    <strong>최근 본 상품</strong>
                    <div className={styles.recentViewLists}>
                        <ul>
                            <li>
                                <a onClick={() => navigate(`/product/${product[0].id}`, {state: product[0]})}>
                                    <img src={product[0].url} alt="5115219"/>
                                </a>
                            </li>
                            <li>
                                <Link to="/product/5069882">
                                    <img src="https://img-cf.kurly.com/cdn-cgi/image/width=60,format=auto/shop/data/goods/1653036301411l0.jpeg" alt="5069882"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/1000078041">
                                    <img src="https://product-image.kurly.com/cdn-cgi/image/width=60,format=auto/product/image/bd77f676-4172-4863-828e-2946cbfd017a.jpg" alt="1000078041"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button className={styles.recentViewButtonBottom}></button>
                </div>
            </nav>
        </div>
        </>
    )
}
