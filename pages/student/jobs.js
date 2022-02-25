import React from 'react'
import Link from 'next/link'
import Header from "../../src/components/Header"

function Companies() {
    return (
        <>
            <Header />
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
                        <tr className='text-center'>
                            <td>1</td>
                            <td>Web Developers</td>
                            <td>Full Time</td>
                            <td>22, june 2019</td>
                            <td><Link href="/company/detail"><a className='text-blue-300'>View</a></Link></td>
                        </tr>
                        <tr className='text-center'>
                            <td>1</td>
                            <td>Web Developers</td>
                            <td>Full Time</td>
                            <td>22, june 2019</td>
                            <td><Link href="/company/detail"><a className='text-blue-300'>View</a></Link></td>
                        </tr>
                        <tr className='text-center'>
                            <td>1</td>
                            <td>Web Developers</td>
                            <td>Full Time</td>
                            <td>22, june 2019</td>
                            <td><Link href="/company/detail"><a className='text-blue-300'>View</a></Link></td>
                        </tr>
                        <tr className='text-center'>
                            <td>1</td>
                            <td>Web Developers</td>
                            <td>Full Time</td>
                            <td>22, june 2019</td>
                            <td><Link href="/company/detail"><a className='text-blue-300'>View</a></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Companies
