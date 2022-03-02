import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import Header from "../../src/components/StudentHeader"
import { useRouter } from "next/router"

function Profile() {
    const router = useRouter()
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))  
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        contact: '',
        city: '',
        address: '',
        imageUrl: "",
    })

    useEffect(() => {
     if(!user || user.role !== "student")
     {
        router.push("/")
     }
     if(user && !student.firstName)
     {
        setStudent({
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            email: user.email,
            contact: user.contact,
            city: user.city,
            address: user.address,
            imageUrl: user.imageUrl ? user.imageUrl : "",
        })
     }
    }, [user])

    const handleSubmit = (e) => {
        let name = e.target.name
        let value = e.target.value
        setStudent((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })

    }
    
    return (
        <>
            <Header />
            {
                !user ? <span className='mt-40 w-full flex justify-center items-center'><div className="loader"></div></span> :
                    <div className='w-full flex justify-center items-center'>
                        <div className='w-2/4 flex flex-col justify-center mt-4'>
                            <h1 className='mb-8 text-3xl text-center'>Profile</h1>
                            <div className='flex justify-center'>
                                <img src={student.imageUrl ? student.imageUrl : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg'} className='w-20 mb-4 rounded-full' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>First Name:</span>
                                <input disabled name="firstName" value={student.firstName} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>Last Name:</span>
                                <input disabled name="lastName" value={student.lastName} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>Gender:</span>
                                <input disabled name="established" value={student.gender} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>Email:</span>
                                <input disabled name="email" value={student.email} type="email" onChange={e => handleSubmit(e)} className='flex-1 border-solid border-blue-300 border-2 outline-none p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold alig text-left block w-40'>Contact:</span>
                                <input disabled name="contact" value={student.contact} type="number" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>City:</span>
                                <input disabled name="city" value={student.city} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>Address:</span>
                                <input disabled name="address" value={student.address} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <div className='w-40'></div>
                                <div className='flex-1'>
                                    <p><Link href="/student"><a className='text-blue-300'>Go Back</a></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default Profile
