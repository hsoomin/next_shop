import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import styles from './page.module.css'
import Comment from "./Comment";

export default async function Detail(props){
    const client = await connectDB
    const db = client.db('shop')
    let result =await db.collection('post').findOne({_id: new ObjectId(props.params.id)});
    console.log(result);

    return(
        <div className={styles.detail}>
            <h3>Notice Page</h3>
            <div className={styles.detailWrap}>
                <div className={styles.text}>
                    <h4 className={styles.title}>제목: {result.title}</h4>
                    <p className={styles.content}>{result.content}</p>
                </div>
            </div>
            <Comment _id={result._id.toString()}/>
        </div>
    )
}