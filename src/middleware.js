
import { NextRequest, NextResponse } from "next/server"
export const middleware=(request)=>{

    if(request.nextUrl.pathname.startsWith('/blog/4')){
    return NextResponse.rewrite(new URL("/services",request.url))
}
}
// export const config ={
//     matcher:'/blog/4'
// }