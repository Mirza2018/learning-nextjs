
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
export const middleware=(request)=>{
    const token =cookies(request).get('next-auth.session-token')
  
    if(!token ){
            return NextResponse.redirect(new URL("/api/auth/signin",request.url))
    }
    
    // if(!token && request.nextUrl.pathname.startsWith('/meals')){
    //         return NextResponse.redirect(new URL("/api/auth/signin",request.url))
    // }
    

//     if(request.nextUrl.pathname.startsWith('/blog/4')){
//     return NextResponse.rewrite(new URL("/services",request.url))
// }
return NextResponse.next()
}
export const config ={
    matcher:['/meals','/contacts']
}