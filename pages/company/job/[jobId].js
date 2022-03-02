import React, { useState,useEffect } from 'react'
import Header from '../../../src/components/CompanyHeader'
import { useRouter } from "next/router"
import { getJobDetails  } from "../../../src/functions/company"
import moment from "moment"

function JobDetails() {
    const router = useRouter()
    const { jobId } = router.query
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))
    const [error,setError] =useState()
    const [loading, setLoading] = useState(false)
    const [job, setJob] = useState({
        title: "",
        type: "",
        description: "",
        salary: null,
        companyId: "",
        companyName:"",
        email:"",
        createdAt:"",
        imageUrl:""
    })

    useEffect(() => {
        if (!user || user.role !== "company") {
            router.push("/")
        }
        if (user && jobId) {
            getJobDetails(jobId,
                () => setLoading(true),
                (data) => {
                    setJob(
                        {
                            title: data.title,
                            type: data.type,
                            description: data.description,
                            salary: data.salary,
                            companyId: data.companyId,
                            companyName:data.companyName,
                            email:data.email,
                            createdAt:data.createdAt,
                            imageUrl: data.imageUrl
                        }
                    )
                    setLoading(false)
                },
                (error) => { setLoading(false)
                setError(error)
                }
            )
        }
    }, [jobId])

    return (
        <>
            <Header />
            {loading ? <span className='mt-40 w-full flex justify-center items-center'><div className="loader"></div></span> : !error && !loading ?
                <div className='w-full mt-14 p-8 flex justify-center items-center'>
                    <div className='basis-2/5'>
                        <img className='w-80 m-auto h-80' src={job.imageUrl ? job.imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi22ZjrzDKBoHI3ELq2MYtkoP1oQwj-fDGSw&usqp=CAU"} />
                    </div>
                    <div className='basis-3/5'>
                         <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Company:</h2>
                            <p>{job.companyName}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Email:</h2>
                            <p>{job.email}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Job Title:</h2>
                            <p>{job.title}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Salary:</h2>
                            <p>{job.salary}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Job Type:</h2>
                            <p>{job.type}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Description:</h2>
                            <p>{job.description}</p>
                        </div>
                        <div className='flex border-b-2 border-gray p-2'>
                            <h2 className='font-bold w-40'>Post Date:</h2>
                            <p>{moment(job.createdAt).format("LL")}</p>
                        </div>
                    </div>
                </div> 
             : error && !loading  && <h3 className='font-bold text-center mt-14'>{error}</h3>   
            }

        </>
    )
}

export default JobDetails
