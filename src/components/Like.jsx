import React, { useState } from "react";

export default function Like() {
    const [like, setLike] = useState(0);    // 좋아요 개수 저장 
    const [isLike, setIsLike] = useState(false); // 버튼 누른 상태 저장

    const onLikeButton = () => {
        if(isLike === false) {
            setIsLike(true);
            setIsLike((prev) => prev + 1);
        } else{
            setIsLike(false);
            if(like < 1) return;
            setIsLike((prev) => prev - 1);
        }
    }
    
    return (
        <div>
            <span onClick={onLikeButton}>도움돼요 {isLike && like}</span>
        </div>
    )
}
