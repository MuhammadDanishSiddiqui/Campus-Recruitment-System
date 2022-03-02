import React , {useEffect} from 'react'
import Header from "../../src/components/CompanyHeader"
import { useRouter } from "next/router"

function Company() {
    const router = useRouter()
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))

    useEffect(() => {
     if(!user || user.role !== "company")
     {
        router.push("/")
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

export default Company
