import React, { useEffect } from 'react';
import styles from './sideNav.module.css';
import { recentViewProduct } from '../recoil/RecentView';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export default function SideNav() {

    const RecentProduct = useRecoilState(recentViewProduct);
    const product = RecentProduct[0].filter((arr, index, callback) => index === callback.findIndex(t => t.id === arr.id));  // 중복 값 제거
    
    const navigate = useNavigate();

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
                            {product.map((p)=>(
                                <li>
                                    <a onClick={() => navigate(`/product/${p.id}`, {state: p})}>
                                        <img src={p.url} alt={p.id}/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className={styles.recentViewButtonBottom}></button>
                </div>
            </nav>
        </div>
        </>
    )
}
