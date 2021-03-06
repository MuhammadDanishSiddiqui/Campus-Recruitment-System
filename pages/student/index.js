import React , {useEffect} from 'react'
import Header from "../../src/components/StudentHeader"
import { useRouter } from "next/router"

function student() {
    const router = useRouter()
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))

    useEffect(() => {
     if(!user || user.role !== "student")
     {
        router.push("/")
     }
     if(user)
     {

     }
    }, [])
    

    return (
        <>
            <Header />
            <div className='w-full flex flex-col justify-center items-center mt-14'>
                <h1 className='text-3xl font-bold'>Welcome</h1>
                <p>{user && user.email}</p>
            </div>
        </>

    )
}

export default student
