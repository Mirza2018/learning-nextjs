export const PATCH=async(request,{params})=>{


const UpdatedComments=await request.json()
    const index= comments.findIndex(c=>c._id===parseInt(params.id))


    comments[index]={
        text:UpdatedComments.text
    }

    console.log(comments);
    
return Response.json(comments)
}




export const DELETE=async(request,{params})=>{
const newComments=comments.filter(c=>c._id!==parseInt(params.id))

// console.log(newComments,params);

return Response.json(newComments)

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