import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from "next/router"

function HomePage() {
      const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))
      const router = useRouter()


    useEffect(()=>{
      if(user && user.role == "student")
      {
          router.push("/student/profile")
      }
      if(user && user.role == "company")
      {
          router.push("/company/profile")
      }

  },[user])


      return <div className="bg-blue-300 w-full h-screen text-white flex justify-center items-center flex-col">
            <h1 className="text-4xl">Welcome to Campus Recuritment System</h1>
            <p className="mt-4 text-lg">A platform that combines students and organizations together</p>
            <div className='w-full flex justify-center mt-4'>
                  <Link href="/admin/login">
                        <a className="bg-green-900 mr-2 p-2 pl-5 pr-5 rounded-lg hover:bg-white hover:text-blue-300">Admin Login</a>
                  </Link>
                  <Link href="/student/login" >
                        <a className="bg-green-900 mr-2 p-2 pl-5 pr-5 rounded-lg hover:bg-white hover:text-blue-300">Student Login</a>
                  </Link>
                  <Link href="/company/login" >
                        <a className="bg-green-900 p-2 pl-5 pr-5 rounded-lg hover:bg-white hover:text-blue-300">Company Login</a>
                  </Link>
            </div>

      </div>
}

export default HomePage