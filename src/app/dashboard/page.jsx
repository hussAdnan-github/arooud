'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
 export default function page() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the initial dashboard page
    router.push('/dashboard/users')
  }, [router])
  return (
  

    
    <>
   
    </>
  );
}
