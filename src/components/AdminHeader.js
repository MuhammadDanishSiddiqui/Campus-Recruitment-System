import React from 'react'
import Link from 'next/link'
import { logoutUser } from "../functions/auth"
import { useRouter } from "next/router"

function AdminHeader() {
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
            <Link href="/admin/students"><a className='text-white'>Students</a></Link>
            <Link href="/admin/companies"><a className='text-white'>Comapnies</a></Link>
            <button className='text-white' onClick={logOut} >Logout</button>
        </div>
    )
}

export default AdminHeader
