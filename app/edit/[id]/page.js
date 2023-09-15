import { connectDB } from "@/util/database";
import styles from './page.module.css'
import { ObjectId } from 'mongodb'

export default async function Edit(props){
    const client = await connectDB
    const db = client.db('shop')
    let result =await db.collection('post').findOne({_id: new ObjectId(props.params.id)});
    console.log(result);

    return(
        <div className={styles.writeWrap}>
            <h4>글 수정</h4>
            <form action="/api/post/edit" method='POST'>
                <input type="text" name="title" defaultValue={result.title}/>
                <textarea name="content" defaultValue={result.content}></textarea>
                <input name="_id" defaultValue={result._id.toString()} style={{ display: "none" }} />
                {/* <input name="createdAt" defaultValue={result.createdAt} style={{ display: "none" }} /> */}
                <button type='submit'>수정</button>
            </form>
        </div>
    )

}