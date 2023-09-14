import React from 'react';
import styles from './page.module.css'
import Join  from '@/components/Join';

const Register = () => {
    return (
        <div className={styles.signForm}>
            <h2>JOIN US</h2>
            <Join />
        </div>
    );
};

export default Register;