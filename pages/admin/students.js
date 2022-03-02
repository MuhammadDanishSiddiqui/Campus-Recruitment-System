import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from "../../src/components/AdminHeader"
import { useRouter } from "next/router"
import { getAllStudents } from "../../src/functions/company"

function Students() {
    const router = useRouter()
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!user || user.role !== "admin") {
            router.push("/")
        }
            getAllStudents(
                () => setLoading(true),
                (data) => {
                    setStudents(data)
                    setLoading(false)
                },
                (error) => { setLoading(false)}
            )
    }, [])



    return (
        <>
            <Header />
            {loading ? <span className='mt-40 w-full flex justify-center items-center'><div className="loader"></div></span> :
                <div className='w-full mt-4 px-8'>
                    <h1 className='mb-8 text-3xl text-center'>Students</h1>
                    <table className="table-auto w-full">
                        <thead>
                            <tr className='text-center bg-black text-white'>
                                <th>Id</th>
                                <th>Student Name</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student) => {
                                    return <tr className='text-center'>
                                        <td>{student.id}</td>
                                        <td>{student.firstName + " " + student.lastName}</td>
                                        <td>{student.contact}</td>
                                        <td>{student.email}</td>
                                        <td><Link href={`/admin/student/${student.id}`}><a className='text-blue-300'>View</a></Link></td>
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

export default Students
