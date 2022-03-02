import React from 'react'
import Link from 'next/link'
import { logoutUser } from "../functions/auth"
import { useRouter } from "next/router"

function StudentHeader() {
    const router = useRouter()
    const logOut = () =>
    {   
        logoutUser(()=>{
            localStorage.clear()
            router.push("/")
        },(error)=>{})
    }
    return (
        <div className='w-full flex justify-around bg-blue-300 p-8'>
            <Link href="/student/profile"><a className='text-white'>Profile</a></Link>
            <Link href="/student/companies"><a className='text-white'>Comapnies</a></Link>
            <Link href="/student/jobs"><a className='text-white'>Jobs</a></Link>
            <button className='text-white' onClick={logOut} >Logout</button>
        </div>
    )
}

export default StudentHeader
