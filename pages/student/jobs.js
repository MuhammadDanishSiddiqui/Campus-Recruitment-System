import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Header from "../../src/components/StudentHeader"
import { getAllJobs } from "../../src/functions/user"
import { useRouter } from "next/router"
import moment from "moment"

function Companies() {
    const router = useRouter()
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))
    const [loading, setLoading] = useState(false)
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        if (!user || user.role !== "student") {
            router.push("/")
        }
            getAllJobs(
                () => {
                    setLoading(true)
                },
                (data) => {
                    setLoading(false)
                    setJobs(data)
                },
                (error) => {
                    setLoading(false)
                })

    }, [])

    return (
        <>
            <Header />
            {
                loading ? <span className='mt-40 w-full flex justify-center items-center'><div className="loader"></div></span> :
                    <div className='w-full mt-4 px-8'>
                        <h1 className='mb-8 text-3xl text-center'>Jobs</h1>
                        <table class="table-auto w-full">
                            <thead>
                                <tr className='text-center bg-black text-white'>
                                    <th>Id</th>
                                    <th>Category</th>
                                    <th>Job Type</th>
                                    <th>Post Date</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    jobs.map(job => {
                                        return <tr className='text-center'>
                                            <td>{job.id}</td>
                                            <td>{job.title}</td>
                                            <td>{job.type}</td>
                                            <td>{moment(job.createdAt).format("LL")}</td>
                                            <td><Link href={`/student/job/${job.id}`}><a className='text-blue-300'>View</a></Link></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
            }

        </>
    )
}

export default Companies
