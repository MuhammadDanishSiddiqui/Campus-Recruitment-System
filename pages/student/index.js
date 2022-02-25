import React from 'react'
import Header from "../../src/components/Header"

function student() {
    return (
        <>
            <Header />
            <div className='w-full flex flex-col justify-center items-center mt-14'>
                <h1 className='text-3xl font-bold'>Welcome</h1>
                <p>xyz@gmail.com</p>
            </div>
        </>

    )
}

export default student
