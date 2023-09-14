import {connectDB} from '@/util/database'
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req,res){

    let session=await getServerSession(req,res,authOptions)
    if(session){
        console.log(session.user.email)
    }

    const currentDate=new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(
        currentDate.getMonth() + 1
    ).toString().padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;


    if(req.method=='POST'){
        const client = await connectDB
        const db = client.db('shop')
        let result =await db.collection('post').insertOne({
            title: req.body.title,
            content: req.body.content,
            // board: body.board,
            // image: body.image,
            // author: session.user.name,
            createdAt: formattedDate,
            // view: body.view,
        });

        // return res.status(200).redirect('/notice')
        return res.redirect(302, "/notice")
    }


}