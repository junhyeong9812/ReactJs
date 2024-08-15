import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY=10;
//10명이 최대 인원
function Accommodate(props){
    const [isFull,setIsFull]=useState(false);
    const [count,increaseCount,decreaseCount]=useCounter(0);

    useEffect(()=>{
        console.log("=================");
        console.log("useEffect() is called.");
        console.log(`isFull:${isFull}`);
    });
    useEffect(()=>{
        setIsFull(count >=MAX_CAPACITY);
        console.log(`Current count value:${count}`);
    },[count]);

    return (
        <div style={{padding:16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <a href="https://kream-phinf.pstatic.net/MjAyNDA2MDJfMTE5/MDAxNzE3MzAwMDUxMzk5.jZnHOSBpxBm6_8TlTckbQiAfFZrF0THaH5waNCmBIWcg.caF4zc6kc5IpGPahtyDWULtPXRiZfG2PesgXAdl7qCIg.JPEG/a_6b944591a81a47b6a9f099d46bb606ce.jpg?type=m_webp" target="_blank" rel="noopener noreferrer">
                <img src="https://kream-phinf.pstatic.net/MjAyNDA2MDJfMTE5/MDAxNzE3MzAwMDUxMzk5.jZnHOSBpxBm6_8TlTckbQiAfFZrF0THaH5waNCmBIWcg.caF4zc6kc5IpGPahtyDWULtPXRiZfG2PesgXAdl7qCIg.JPEG/a_6b944591a81a47b6a9f099d46bb606ce.jpg" alt="Image" loading="lazy"/>
            </a>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull&&<p style={{color:"red"}}>정원이 가득찼습니다.</p>}
        </div>
    );
}
export default Accommodate;