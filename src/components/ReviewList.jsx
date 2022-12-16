import React, { useEffect, useState } from "react";
import '../pages/contents.css';
import styles from './reviewLists.module.css';

export default function ReviewList({review}) {

    const [like, setLike] = useState(review.like);    // 좋아요 개수 저장 
    const [isLike, setIsLike] = useState(review.isLike); // 버튼 누른 상태 저장

    const onLikeButton = () => {

        if(isLike){
            fetch(`http://localhost:3001/reviewArticles/${review.id}`, {
            method: 'PUT', // 수정
            headers : {
                'Content-Type' : 'application/json'  // 보내는 리소스 타입
            },
            body: JSON.stringify({
                ...review,
                like: like-1,
                isLike: !isLike
            }),
        }).then(res => {
            if(res.ok) {
                setLike(like-1);
                setIsLike(!isLike);
            }
        });
        } else{
            fetch(`http://localhost:3001/reviewArticles/${review.id}`, {
                method: 'PUT', // 수정
                headers : {
                    'Content-Type' : 'application/json'  // 보내는 리소스 타입
                },
                body: JSON.stringify({
                    ...review,
                    like: like+1,
                    isLike: !isLike

                }),
            }).then(res => {
                if(res.ok) {
                    setLike(like+1);
                    setIsLike(!isLike);
                }
            });
        }

       
    }
    
    return (
            <div className="reviewList">
                <div style={{"flex": "0 0 225px"}}>
                    <div>
                        <span className="reviewListBox">일반</span>
                        <span style={{"font-weight":"500"}}>{review.name}</span>
                    </div>
                </div>
                <article style={{"flex":"1 1 0%","overflow":"hidden"}}>
                    <div>
                        <div className="reviewProName">
                            <h3>[마켓컬리 X 울워스] 오트 브란</h3>
                        </div>
                        <p className="reviewContent">{review.content}</p>
                        <div className="reviewListImg">
                            {review.url !== "" && <button style={{"background": `url(${review.img}) 0% 0% / cover no-repeat`}}></button>}
                        </div>
                        <footer className="reviewFooter">
                            <div>
                                <span style={{"color":"rgb(153,153,153)"}}>{review.date}</span>
                            </div>
                            <div className={isLike ? styles.likeHover : styles.like}>
                                <span></span>
                                <span onClick={onLikeButton}>도움돼요 {like !== 0 && like}</span>
                            </div>
                        </footer>
                    </div>
                </article>
            </div>
    )
}

