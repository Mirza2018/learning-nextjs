const { MongoClient, ServerApiVersion } = require("mongodb");

let db;

const connectDB=async()=>{
    if(db) return db;


    try {
        const uri=process.env.NEXT_PUBLIC_MONGOBD_URL
        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
          db=client.db('next-hero')

          return db;

        } catch (error) {
        console.log("From mongo DB Error",error);
        
    }

}

export default connectDB



