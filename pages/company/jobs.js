import React,{useState} from 'react'
import Link from 'next/link'
import Header from "../../src/components/Header"

function CompanyJobs() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <Header />
            <div className='w-full mt-4 px-8'>
                <h1 className='mb-8 text-3xl text-center'>Jobs</h1>
                <button onClick={() => setShowModal(true)} className='text-green-400 mb-2 font-bold'>Add a Job +</button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add a new Job
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                 <div className='w-full flex justify-around'>
                    <span className='block w-32'>Job Title:</span>
                    <select className='flex-1'>
                    <option value="Project Manager">Project manager</option>
                        <option value="Pern Developer">Mern Developer</option>
                        <option value="Graphic Designer">Graphic Designer</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                    </select>
                 </div>
                 <div className='w-full flex justify-around mt-2'>
                    <span className='block w-32'>Job Type:</span>
                    <select className='flex-1'>
                    <option value="Part Time">Part time</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Internship">Internship</option>
                    </select>
                 </div>
                 <div className='w-full flex justify-around mt-2'>
                    <span className='block w-32'>Description:</span>
                    <textarea className='border border-gray-700'/>
                 </div>
                 <div className='w-full flex justify-around mt-2'>
                    <span className='block w-32'>Salary:</span>
                    <input className='border border-gray-700 w-52 ' type="number"/>
                 </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}







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

export default CompanyJobs
