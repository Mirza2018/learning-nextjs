import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export let authOptions={
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
    session:{
        strategy:"jwt",
        maxAge: 60*60
    },
    providers:[
        CredentialsProvider({
            credentials:{
                email:
                {
                    lable:"Email",
                    type:"text",
                    required:true,
                     placeholder:"Type Your Email"},
    
       password:{
                    lable:"User Password",type:"password",
                    required:true, placeholder:"Type Your Password"}
            },
             async authorize(credentials){
                const {email,password}=credentials
            if(!credentials){
                return null;
            }

            if(email){
                const checkEmail=users.find(u=>u.email===email)
                if(checkEmail){
               if(checkEmail.password===password){
                return checkEmail
               }
                }
            }


            return false;
        }
        })
    ],
    callbacks:{
        async jwt({account,token,user}){
    if(account){
    token.type=user.type
                }
         return token
        },
        async session({ session, token }) {
            session.user.type=token.type
 
        
            return session
          },
    }
        
    }

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}


const users=[
    {
        id:1,
        name:"Takibul",
        email:"a@gmail.com",
        password:"11111111",
        type:"admin"
    },
    {
        id:2,
        name:"Hasan",
        email:"b@gmail.com",
        password:"11111111",
        
    },
    {
        id:3,
        name:"Mirza",
        email:"c@gmail.com",
        password:"11111111",
   
    },
]