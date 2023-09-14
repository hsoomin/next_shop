import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/util/database";

export default async function handler(req, res){
    if(req.method=='POST'){
        let session=await getServerSession(req, res, authOptions )
        req.body=JSON.parse(req.body) //문자로 바꿔서 바디에 넣어
        let dbs={
            content:req.body.comment,
            parent:new ObjectId(req.body._id), 
            author: session.user.email  //사용자는 이메일
        }
        const client= await connectDB
        const db=client.db("shop")
        let result=await db.collection('comment').insertOne( dbs);
        //console.log(result)

        res.redirect(302, '/notice_detail/'+req.body._id)
    }
    
}