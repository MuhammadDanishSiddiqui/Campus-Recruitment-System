import React, { useState,useEffect } from 'react'
import Header from '../../../src/components/CompanyHeader'
import { useRouter } from "next/router"
import { getStudentDetails } from "../../../src/functions/company"

function StudentDetails() {
    const router = useRouter()
    const { studentId } = router.query
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))
    const [error,setError] =useState()
    const [loading, setLoading] = useState(false)
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        contact: '',
        city: '',
        address: '',
        password: '',
        imageUrl: "",
        resumeUrl:""
    })

    useEffect(() => {
        if (!user || user.role !== "company") {
            router.push("/")
        }
        if (user && studentId) {
            getStudentDetails(studentId,
                () => setLoading(true),
                (data) => {
                    setStudent(
                        {
                            firstName: data.firstName,
                            lastName: data.lastName,
                            gender: data.gender,
                            email: data.email,
                            contact: data.contact,
                            city: data.city,
                            address: data.address,
                            imageUrl: data.imageUrl,
                            resumeUrl:data.resumeUrl
                        }
                    )
                    setLoading(false)
                },
                (error) => { setLoading(false)
                setError(error)
                }
            )
        }
    }, [studentId])

    return (
        <>
            <Header />
            {loading ? <span className='mt-40 w-full flex justify-center items-center'><div className="loader"></div></span> : !error && !loading ?
                <div className='w-full mt-14 p-8 flex justify-center items-center'>
                    <div className='basis-2/5'>
                        <img className='w-80 m-auto h-80' src={student.imageUrl ? student.imageUrl : "https://cdn1.vectorstock.com/i/thumb-large/00/85/graduate-avatar-icon-vector-9780085.jpg"} />
                    </div>
                    <div className='basis-3/5'>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>First Name:</h2>
                            <p>{student.firstName}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Last Name:</h2>
                            <p>{student.lastName}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Gender:</h2>
                            <p>{student.gender}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Email:</h2>
                            <p>{student.email}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Contact:</h2>
                            <p>{student.contact}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>City:</h2>
                            <p>{student.city}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Address:</h2>
                            <p className='flex-1'>{student.address}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Resume:</h2>
                            <a href={`${student.resumeUrl}`} className='flex-1'>
                                Download
                            </a>
                        </div>
                    </div>
                </div> 
             : error && !loading  && <h3 className='font-bold text-center mt-14'>{error}</h3>   
            }

        </>
    )
}

export default StudentDetails
