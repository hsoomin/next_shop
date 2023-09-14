'use client'
import React from 'react';
import styles from './page.module.css'
import Link from 'next/link';


const NoticeItem = ({result}) => {

    return (
        <tbody>
            {result.map((item,i)=>{
                return(
                    <tr className={styles.noticeItem} key={i}>
                        <td>{i+1}</td>
                        <td className={styles.noticeTitle}><Link href={'/notice_detail/'+ item._id.toString()}>{item.title}</Link></td>
                        <td>{item.createdAt}</td>
                        <td><Link href={'/edit/'+item._id.toString()}><button>수정</button></Link></td>
                        <td><button onClick={(e)=>{
                            fetch('/api/post/delete',{method:'DELETE', body : result[i]._id})
                            .then((r)=>{
                                if(r.status == 200){
                                    return r.json()
                                }
                            }).then((result)=>{
                                const rowElement = e.target.closest("tr"); //rowElement= closest 상위의 tr을 찾아
                                rowElement.style.opacity=0; //css에서 opacity: 1; transition: all 1s; 했는데 opacity=0으로 만들어
                                setTimeout(()=>{  //시간차를 두고 없애기 (1초)
                                    const rowElement = e.target.closest("tr");
                                    rowElement.style.display='none';
                                },1000)
                            })
                        }}>삭제</button></td>
                    </tr>
                )
            })}
        </tbody>
    );
};

export default NoticeItem;