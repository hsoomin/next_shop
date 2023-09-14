'use client'
import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Comment(props) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])
    let [refrash, setRefrash] = useState(false)

    useEffect(() => {
        fetch('/api/comment/list?id=' + props._id)
            .then((r) => r.json())
            .then((result) => {
                //console.log(result)
                setData(result)
            })
    }, [refrash])

    return (
        <div className={styles.comment}>
            <div className={styles.commentWrap}>{data.length > 0 ? data.map((item, i) => <p key={i} className={styles.commentP}>{item.content}</p>) : '로딩중'}</div>
            <input
            className={styles.input}
            onChange={(e) => {
            setComment(e.target.value)
            }}
            value={comment}
            />
            <button
            className={styles.button}
            onClick={() => {
            // console.log(comment)
            fetch('/api/comment/new', { method: 'POST', body: JSON.stringify({ comment: comment, _id: props._id }) })
            setRefrash(!refrash)
            setComment("")
            }}
            >
                입력
            </button>
        </div>
    )
}