import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from "../../../src/components/AdminHeader"
import { useRouter } from "next/router"
import { getCompanyDetails } from "../../../src/functions/user"
import { updateStudentDetails } from "../../../src/functions/admin"

function StudentProfile() {
    const router = useRouter()
    const { companyId } = router.query
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))
    const [loading, setLoading] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [company, setCompany] = useState({
        companyName: '',
        established: '',
        email: '',
        contact: '',
        username: '',
        description: '',
    })

    useEffect(() => {
        if (!user || user.role !== "admin") {
            router.push("/")
        }
        if(user && companyId)
        {
            getCompanyDetails(companyId,
                () => setLoading(true),
                (data) => {
                    setCompany(
                        {
                            companyName: data.companyName,
                            established: data.established,
                            email: data.email,
                            contact: data.contact,
                            username: data.username,
                            description: data.description,
                        }
                    )
                    setLoading(false)
                },
                (error) => { setLoading(false)
                setError(error)
                }
            )
        }

    }, [companyId])

    const updateStudent = ()=>{
        updateStudentDetails(student,studentId,
            ()=>{
            setLoading(true)},
            ()=>{
             setLoading(false)
             setIsEdit(false)
            },
            (error)=>{}
            )
    }
    
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
                loading ? <span className='mt-40 w-full flex justify-center items-center'><div className="loader"></div></span> :
                    <div className='w-full flex justify-center items-center'>
                        <div className='w-2/4 flex flex-col justify-center mt-4'>
                            <h1 className='mb-8 text-3xl text-center'>Profile</h1>
                            {/* <div className='flex justify-center'>
                                <img src={student.imageUrl ? student.imageUrl : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg'} className='w-20 mb-4 rounded-full' />
                            </div> */}
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>First Name:</span>
                                <input disabled={loading || !isEdit} name="firstName" value={student.firstName} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>Last Name:</span>
                                <input disabled={loading || !isEdit} name="lastName" value={student.lastName} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>Gender:</span>
                                <div className='flex-1 p-1'>
                                    <label htmlFor="male">Male: </label>
                                    <input required disabled={loading || !isEdit} checked={student.gender == "Male"} type="radio" value="Male" onChange={e => handleSubmit(e)} id="male" name="gender" className='mr-3' />
                                    <label htmlFor="female">Female: </label>
                                    <input required disabled={loading || !isEdit} checked={student.gender == "Female"} type="radio" value="Female" onChange={e => handleSubmit(e)} id="female" name="gender" />
                                </div>
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>Email:</span>
                                <input disabled={loading || !isEdit} name="email" value={student.email} type="email" onChange={e => handleSubmit(e)} className='flex-1 border-solid border-blue-300 border-2 outline-none p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold alig text-left block w-40'>Contact:</span>
                                <input disabled={loading || !isEdit} name="contact" value={student.contact} type="number" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>City:</span>
                                <input disabled={loading || !isEdit} name="city" value={student.city} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none p-1' />
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <span className='font-bold text-left block w-40'>Address:</span>
                                <input disabled={loading || !isEdit} name="address" value={student.address} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                            </div>
                            <div className='w-full flex mb-4'>
                                <div className='w-40'></div>
                                <div>
                                    {
                                        !isEdit ? <button onClick={()=>setIsEdit(true)} className='mr-2 bg-green-300 px-4 py-2 text-white hover:bg-green-700 hover:text-black'>Edit</button> : <button onClick={()=>setIsEdit(false)}  className='mr-2 bg-green-300 px-4 py-2 text-white hover:bg-green-700 hover:text-black'>Cancel</button>
                                    }
                                    {
                                        !isEdit ? <button className='mr-2 bg-red-300 px-4 py-2 text-white hover:bg-red-700 hover:text-black'>Delete</button> : <button onClick={updateStudent} className='mr-2 bg-red-300 px-4 py-2 text-white hover:bg-red-700 hover:text-black'>Update</button>
                                    }
                                    
                                </div>
                            </div>
                            <div className='w-full flex justify-around mb-4'>
                                <div className='w-40'></div>
                                <div className='flex-1'>
                                    <p><Link href="/admin"><a className='text-blue-300'>Go Back</a></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default StudentProfile
