import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createServer } from "http";
import {cookies} from 'next/headers'
import AuthButtonClient from "./auth-button-client";
export default async function AuthButtonServer() {
    const supabase = createServerComponentClient({ cookies})
    const {data: {session}} = await supabase.auth.getSession();
    
    return <AuthButtonClient session ={session}/>
}
 