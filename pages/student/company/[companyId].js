import React, { useState } from 'react'
import Header from '../../../src/components/Header'

function CompanyDetails() {
    const [company, setCompany] = useState({
        companyName: 'xyz',
        established: 1992,
        email: 'xyz@gmail.com',
        contact: 123456789,
        username: 'ABC',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imageUrl: ""
    })
    return (
        <>
            <Header />
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
        </>
    )
}

export default CompanyDetails
