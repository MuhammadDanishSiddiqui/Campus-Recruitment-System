import React from 'react'
import Link from 'next/link'
import { logoutUser } from "../functions/auth"
import { useRouter } from "next/router"

function Header() {
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))  
    const router = useRouter()
    const logOut = () =>
    {   
        localStorage.clear()
        logoutUser(()=>router.push("/"))
    }
    return (
        user && user.role == "student" ? 
        <div className='w-full flex justify-around bg-blue-300 p-8'>
            <Link href="/student/profile"><a className='text-white'>Profile</a></Link>
            <Link href="/student/companies"><a className='text-white'>Comapnies</a></Link>
            <Link href="/student/jobs"><a className='text-white'>Jobs</a></Link>
            <button className='text-white' onClick={logOut} >Logout</button>
        </div> : user && user.role == "company" && <div className='w-full flex justify-around bg-blue-300 p-8'>
            <Link href="/company/profile"><a className='text-white'>Profile</a></Link>
            <Link href="/company/students"><a className='text-white'>Students</a></Link>
            <Link href="/company/jobs"><a className='text-white'>Jobs Posted</a></Link>
            <button className='text-white' onClick={logOut} >Logout</button>
        </div>
    )
}

export default Header
