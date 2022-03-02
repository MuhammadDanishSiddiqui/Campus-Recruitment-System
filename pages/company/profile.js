import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import Header from "../../src/components/CompanyHeader"
import { useRouter } from "next/router"

function CompanyProfile() {
    const router = useRouter()
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))  
    const [company, setCompany] = useState({
        companyName: '',
        established: '',
        email: '',
        contact: '',
        username: '',
        description: '',
        imageUrl : ""
    })

    useEffect(() => {
     if(!user || user.role !== "company")
     {
        router.push("/")
     }
     if(user && !company.companyName)
     {
        setCompany({
            companyName: user.companyName,
            established: user.established,
            email: user.email,
            contact: user.contact,
            username: user.username,
            description: user.description,
            imageUrl : user.imageUrl
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
                                <img src={company.imageUrl ? student.imageUrl : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg'} className='w-20 mb-4 rounded-full' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>Company Name:</span>
                                <input disabled name="companyName" value={company.companyName} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>Established:</span>
                                <input disabled name="established" value={company.established} onChange={e => handleSubmit(e)} type="number" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>Email:</span>
                                <input disabled name="email" value={company.email} onChange={e => handleSubmit(e)} type="email" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>Contact:</span>
                                <input disabled name="contact" value={company.contact} type="number" onChange={e => handleSubmit(e)} className='flex-1 border-solid border-blue-300 border-2 outline-none p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold alig text-left block w-40'>Username:</span>
                                <input disabled name="username" value={company.username} type="text" onChange={e => handleSubmit(e)} className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold alig text-left block w-40'>Description:</span>
                                <input disabled name="description" value={company.description} type="text" onChange={e => handleSubmit(e)} className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <div className='w-40'></div>
                                <div className='flex-1'>
                                    <p><Link href="/company"><a className='text-blue-300'>Go Back</a></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default CompanyProfile
