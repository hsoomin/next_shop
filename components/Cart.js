'use client'
import { useState } from "react";
import Link from "next/link";



export default function Cart({result}){
    let [count,setCount] = useState(1);

    return(
        <div className="cart">
            <span className="minus" onClick={()=>{setCount(count-1)}}>-</span>
            <span className="number">{count}</span>
            <span className="plus" onClick={()=>{setCount(count+1)}}>+</span>
            <Link href="/cart">
                <button 
                className="cartBtn" 
                onClick={() => {
                    fetch('/api/cart/new',{method:'POST', body:JSON.stringify({
                        count:count,
                        title:result.title,
                        price:result.price,
                        description:result.description,
                        image:result.image
                    })})
                }}>
                    Add to Cart
                </button>
            </Link>
            <button className="buyBtn">Buy</button>
        </div>
    )
}