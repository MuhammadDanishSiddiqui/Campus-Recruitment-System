import React, { useState,useEffect } from 'react'
import Header from '../../../src/components/Header'
import { useRouter } from "next/router"
import { getCompanyDetails } from "../../../src/functions/user"

function CompanyDetails() {
    const router = useRouter()
    const { companyId } = router.query
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))
    const [error,setError] =useState()
    const [loading, setLoading] = useState(false)
    const [company, setCompany] = useState(  {
        companyName: "",
        established: "",
        email: "",
        contact: "",
        username: "",
        description: "",
        imageUrl: ""
    })

    useEffect(() => {
        if (!user || user.role !== "student") {
            router.push("/")
        }
        if (user && companyId) {
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
                            imageUrl: data.imageUrl ? data.imageUrl : ""
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

    return (
        <>
            <Header />
            {loading ? <span className='mt-40 w-full flex justify-center items-center'><div className="loader"></div></span> : !error && !loading ?
                <div className='w-full mt-14 p-8 flex justify-center items-center'>
                    <div className='basis-2/5'>
                        <img className='w-80 m-auto h-80' src={company.imageUrl ? company.imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi22ZjrzDKBoHI3ELq2MYtkoP1oQwj-fDGSw&usqp=CAU"} />
                    </div>
                    <div className='basis-3/5'>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Company Name:</h2>
                            <p>{company.companyName}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Co Founder:</h2>
                            <p>{company.username}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Established:</h2>
                            <p>{company.established}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Email:</h2>
                            <p>{company.email}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Contact:</h2>
                            <p>{company.contact}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Description:</h2>
                            <p className='flex-1'>{company.description}</p>
                        </div>
                    </div>
                </div> 
             : error && !loading  && <h3 className='font-bold text-center mt-14'>{error}</h3>   
            }

        </>
    )
}

export default CompanyDetails
