import { NextResponse } from "next/server"


export function GET(){
    return NextResponse.json({
        user: "Amit",
        email:"amitrhar728@gmail.com"
    })
}

//  this is how we handle backend requests 
// not as we are handling in page.tsx
//  in that way we cannot return content fo backend 