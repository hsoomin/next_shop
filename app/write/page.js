import React from 'react';
import styles from './page.module.css'


const Write = () => {
    return (
        <div className={styles.writeWrap}>
            <h4>글 작성</h4>
            <form action="api/post/new" method='POST'>
                <input type="text" name="title" placeholder='제목을 입력하세요' />
                <textarea name="content" cols="30" rows="10" placeholder='내용을 입력해주세요'></textarea>
                <button type='submit'>작성</button>
            </form>
        </div>
    );
};

export default Write;