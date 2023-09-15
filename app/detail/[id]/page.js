import {connectDB} from '@/util/database'
import styles from './page.module.css'
import { ObjectId } from 'mongodb'
import Cart from '@/components/Cart'

export default async function Detail(props){
    const client = await connectDB
    const db = client.db('shop')
    let result =await db.collection('new').findOne({_id: new ObjectId(props.params.id)});
    console.log(result);

    return(
        <div className={styles.detail}>
            <div className={styles.detailWrap}>
                <div className={styles.imgWrap}>
                    <img src={result.image} alt={result.title} />
                </div>
                <div className={styles.text}>
                    <h4 className={styles.h4}>{result.title}</h4>
                    <p className={styles.price}>KRW {result.price}</p>
                    {/* <p className={styles.card}>카드 혜택: {result.card}</p> */}
                    <p className={styles.delivery}><span>*</span>100,000원 이상 구매시 무료배송</p>
                    {/* <p className={styles.color}>
                        <span className={styles.span}>색상</span>
                        <input type="text" />
                    </p> */}
                    <p className={styles.size}>Size
                        <span className={styles.span}>FREE</span>
                    </p>
                    <p className={styles.description}>{result.description}</p>
                    <button className={styles.cart}>Add to Cart</button>
                    <Cart result={result}/>
                </div>
            </div>
        </div>
    )
}