'use client'
import React,{useState} from 'react';

const CartList = ({result}) => {

    return (
        <tbody className='cartList'>
            {
                result.length > 0? result.map((item,i)=>{
                    let priceCount = item.price * item.count;
                    return(
                        <tr key={i}>
                            <td><input type="checkbox" /></td>
                            <td>
                                <span><img src={item.image} alt="" /></span>
                                <strong>{item.title}</strong>
                            </td>
                            <td>
                                {item.price * item.count}
                            </td>
                            <td>
                                {
                                    priceCount >= 100000? '무료배송':'10만원 이상부터 무료배송'
                                }
                            </td>
                        </tr>
                    )
                    
                }) :'로딩중'
            }
        </tbody>
    );
};

export default CartList;