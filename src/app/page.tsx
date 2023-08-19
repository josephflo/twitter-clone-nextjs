import { createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import {cookies} from 'next/headers'

export default function Home() {
  const supabase = createServerComponentClient({cookies})
  const {data} = await supabase.from('posts')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hola devTTers!crypto worth at least 10 USDT
      <pre>
        JSON.stringify()
      </pre>
    </main>
  );
}
