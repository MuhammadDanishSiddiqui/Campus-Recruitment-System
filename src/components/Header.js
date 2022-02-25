import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <div className='w-full flex justify-around bg-blue-300 p-8'>
            <Link href="/student/profile"><a className='text-white'>Profile</a></Link>
            <Link href="/student/companies"><a className='text-white'>Comapnies</a></Link>
            <Link href="/student/jobs"><a className='text-white'>Jobs</a></Link>
        </div>
    )
}

export default Header
