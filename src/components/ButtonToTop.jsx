import React, { useEffect, useState } from "react";
import styles from './ButtonToTop.module.css';

export default function ButtonToTop() {

    const MoveToTop = () => {
        window.scrollTo({top:0, behavior:'smooth'});
    };

    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);

    const scrollFixed = () => {
        if (scrollY > 1000) {    // header height
        setScrollY(window.pageYOffset);
        setScrollActive(true);
        } else {
        setScrollY(window.pageYOffset);
        setScrollActive(false);
        }
    };

    useEffect(() => {
        const scrollListener = () => {
        window.addEventListener('scroll', scrollFixed);
        };
        scrollListener();
        return () => {
        window.removeEventListener('scroll', scrollFixed);
        };
    }, [scrollY, scrollActive]);

    return (
        <div>
            {/* <!-- 맨 위로 이동 버튼 --> */}
            <span className={scrollActive ? styles.upIcon : styles.none}>
                <a>
                    <img onClick={MoveToTop} src="https://res.kurly.com/pc/service/common/1903/btn_pagetop_v2.png" alt="위로가기 아이콘"/>
                </a>
            </span>
        </div>
    )
}
