import Image from 'next/image'
import styles from './page.module.css'
import MoveSwiper from '@/components/MoveSwiper'
// import MoveSwiper1 from '@/components/MoveSwiper1'
import {connectDB} from '@/util/database'
import Link from 'next/link'


export default async function Home() {

    const client = await connectDB
    const db = client.db('shop')
    let result =await db.collection('new').find().toArray();
    // console.log(result);

    return (
        <div >
            <div className={styles.banner}>
                <MoveSwiper />
            </div>
            {/* <div className={styles.banner1}>
                <MoveSwiper1 />
            </div> */}
            <div className="new-arrival">
                <h2>New Arrivals</h2>
                <div className="new-wrap">
                    {result.map((item,i)=>{
                    return (
                        <Link href={'/detail/' + item._id} >
                            <div className='new-card' key={i}>
                                <img src={item.image} alt={item.title} title='' />
                                <div className="card-box">
                                    <h3 className='title'>{item.title}</h3>
                                    <h3 className='price'>{item.price}</h3>
                                    {/* <h3 className='description'>{item.description}</h3> */}
                                </div>
                            </div>
                        </Link>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}
