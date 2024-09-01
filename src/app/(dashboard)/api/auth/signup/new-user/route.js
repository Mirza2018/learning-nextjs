const { default: connectDB } = require("@/app/Services/mongoDB")

     export const POST=async(request)=>{

            try {
                const db=await connectDB();
            const userCollecttion=db.collection('users')
            const newUser=await request.json()
            const res=await userCollecttion.insertOne(newUser)
            return Response.json({message:"new user Created"})
            } catch (error) {
                console.log(error);
                
            }
            

        }