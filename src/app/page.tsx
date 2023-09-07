import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButtonServer from "./auth-button-server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: {session}} = await supabase.auth.getSession() ;
  if(!session){
    redirect("/login")
  }
  const { data: posts } = await supabase.from("posts").select();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <AuthButtonServer />
        <pre>{JSON.stringify(posts, null, 2)}</pre> 
      </div>
    </>
  );
}

