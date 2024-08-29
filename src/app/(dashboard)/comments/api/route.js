import { headers } from "next/headers"

export const GET =async()=>{
return Response.json(comments,{headers:{
"Set-Cookie":"Them=dark"
}})
}

export const POST=async(request)=>{
const newComment=await request.json()


comments.push({
    _id:comments.length+1,
    text: newComment.text
})


return Response.json({
    message:"new comment added",
    comments
})

}

const comments=[
    {
        _id:1,
        text:"comment 1"
    },
    {
        _id:2,
        text:"comment 2"
    },
    {
        _id:3,
        text:"comment 3"
    },
]