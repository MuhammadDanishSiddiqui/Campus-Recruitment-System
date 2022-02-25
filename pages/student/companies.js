import React from 'react'
import Link from 'next/link'
import Header from "../../src/components/Header"

function Companies() {
    return (
        <>
            <Header />
            <div className='w-full mt-4 px-8'>
                <h1 className='mb-8 text-3xl text-center'>Companies</h1>
                <table class="table-auto w-full">
                    <thead>
                        <tr className='text-center bg-black text-white'>
                            <th>Id</th>
                            <th>Company Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            <td>1</td>
                            <td>Bla bla</td>
                            <td>123456789</td>
                            <td>bla@gmail.com</td>
                            <td><Link href="/company/detail"><a className='text-blue-300'>View</a></Link></td>
                        </tr>
                        <tr className='text-center'>
                            <td>2</td>
                            <td>Bla bla</td>
                            <td>123456789</td>
                            <td>bla@gmail.com</td>
                            <td><Link href="/company/detail"><a className='text-blue-300'>View</a></Link></td>
                        </tr>
                        <tr className='text-center'>
                            <td>3</td>
                            <td>Bla bla</td>
                            <td>123456789</td>
                            <td>bla@gmail.com</td>
                            <td><Link href="/company/detail"><a className='text-blue-300'>View</a></Link></td>
                        </tr>
                        <tr className='text-center'>
                            <td>4</td>
                            <td>Bla bla</td>
                            <td>123456789</td>
                            <td>bla@gmail.com</td>
                            <td><Link href="/company/detail"><a className='text-blue-300'>View</a></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Companies
