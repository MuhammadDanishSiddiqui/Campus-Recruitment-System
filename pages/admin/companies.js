import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from "../../src/components/AdminHeader"
import { useRouter } from "next/router"
import { getAllCompanies } from "../../src/functions/user"

function Companies() {
    const router = useRouter()
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))
    const [companies, setCompanies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!user || user.role !== "admin") {
            router.push("/")
        }
        getAllCompanies(
            () => setLoading(true),
            (data) => {
                setCompanies(data)
                setLoading(false)
            },
            (error) => { setLoading(false) }
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
                                companies.map((company) => {
                                    return <tr className='text-center'>
                                        <td>{company.id}</td>
                                        <td>{company.companyName}</td>
                                        <td>{company.contact}</td>
                                        <td>{company.email}</td>
                                        <td><Link href={`/admin/company/${company.id}`}><a className='text-blue-300'>View</a></Link></td>
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
