import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import { useRef } from "react"
import { singnUpStudent, singnUpCompany } from "../../src/functions/auth"

function SignUp() {
    const uploadImage = useRef(null)
    const router = useRouter()
    const { role } = router.query
    const [imagePreview, setImagePreview] = useState('')
    const [image, setImage] = useState(null)
    const [resume, setResume] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        contact: '',
        city: '',
        address: '',
        password: '',
    })

    const [company, setCompany] = useState({
        companyName: '',
        established: '',
        email: '',
        contact: '',
        username: '',
        description: '',
        password: '',
    })

    const handleImageUpload = (e) => {
        let selectedImage = e.target.files[0]
        console.log(selectedImage)
        var reader = new FileReader();
        reader.onload = function () {
            if (reader.readyState == 2) {
                setImagePreview(reader.result)
                setImage(selectedImage)
            }
        };
        reader.readAsDataURL(selectedImage)
    };

    const handleSubmit = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (role === "company") {
            setCompany((prev) => {
                return {
                    ...prev,
                    [name]: value
                }
            })
        }
        else {
            setStudent((prev) => {
                return {
                    ...prev,
                    [name]: value
                }
            })
        }

    }

    const handleSignUpStudent = async (student, image, resume) => {
        singnUpStudent(student, image, resume,
            () => {
                setLoading(true)
                setError(null)
            },
            (data) => {
                getUserDetail(data.uid,()=>{},(data)=>{
                    setLoading(false)
                    localStorage.setItem("currentUser",JSON.stringify(data))
                    if(data.role == "student")
                    {
                        router.push("/student")
                    }
                },(error)=>{
                    setLoading(false)
                    throw error
                })
            },
            (error) => {
                setLoading(false)
                setError(error)
            }
        )
    }

    const handleSignUpCompany = async (company, image) => {
        singnUpCompany(company, image,
            () => {
                setLoading(true)
                setError(null)
            },
            (data) => {
                setLoading(false)
                getUserDetail(data.uid,()=>{},(data)=>{
                    setLoading(false)
                    localStorage.setItem("currentUser",JSON.stringify(data))
                    if(data.role == "company")
                    {
                        router.push("/company")
                    }
                },(error)=>{
                    setLoading(false)
                    throw error
                })
            },
            (error) => {
                setLoading(false)
                setError(error)
            }
        )
    }


    if (role === "company") {
        return <div className='bg-blue-300 w-full min-h-screen p-8 flex justify-center items-center'>
            <div className='bg-white color-blue-300 w-2/4 p-3 rounded-md flex flex-col justify-center'>
                <h1 className='mb-8 text-3xl text-center'>Sign Up</h1>
                <div className='flex justify-center'>
                    <img src={imagePreview ? imagePreview : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg'} onClick={() => uploadImage.current && uploadImage.current.click()} className='w-20 h-20 mb-4 rounded-full' />
                    <input type="file" hidden ref={uploadImage} onChange={(e) => handleImageUpload(e)} />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Company Name:</span>
                    <input name="companyName" value={company.companyName} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Established:</span>
                    <input name="established" value={company.established} onChange={e => handleSubmit(e)} type="number" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Email:</span>
                    <input name="email" value={company.email} type="email" onChange={e => handleSubmit(e)} className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold alig text-left block w-40'>Contact:</span>
                    <input name="contact" value={company.contact} onChange={e => handleSubmit(e)} type="number" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Description:</span>
                    <textarea name="description" value={company.description} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1'></textarea>
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Username:</span>
                    <input name="username" value={company.username} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Password:</span>
                    <input name="password" value={company.password} onChange={e => handleSubmit(e)} type="password" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                {
                    error && <div className='w-full flex justify-around mb-4'>
                        <p className='text-red-500'>{error}</p>
                    </div>
                }

                <div className='w-full flex justify-around mb-4'>
                    <div className='w-40'></div>
                    <div className='flex-1'>
                        {
                            loading ? <div class="loader"></div> : <button onClick={() => handleSignUpCompany(company, image)} className='font-bold bg-green-300 px-7 py-2 mb-4 rounded-md'>Register</button>
                        }

                        <p>Already have an account ?  <Link href="/company/login"><a className='text-blue-300'>Login</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    }
    else {
        return <div className='bg-blue-300 w-full min-h-screen p-8 flex justify-center items-center'>
            <div className='bg-white color-blue-300 w-2/4 p-3 rounded-md flex flex-col justify-center'>
                <h1 className='mb-8 text-3xl text-center'>Sign Up</h1>
                <div className='flex justify-center'>
                    <img src={imagePreview ? imagePreview : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg'} onClick={() => uploadImage.current && uploadImage.current.click()} className='w-20 h-20 mb-4 rounded-full' />
                    <input type="file" hidden ref={uploadImage} onChange={(e) => handleImageUpload(e)} />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>First Name:</span>
                    <input name='firstName' value={student.firstName} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Last Name:</span>
                    <input name='lastName' value={student.lastName} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Gender:</span>
                    <div className='flex-1'>
                        <label htmlFor="male">Male: </label>
                        <input type="radio" value="Male" onChange={e => handleSubmit(e)} id="male" name="gender" className='mr-3' />
                        <label htmlFor="female">Female: </label>
                        <input type="radio" value="Female" onChange={e => handleSubmit(e)} id="female" name="gender" />
                    </div>
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold alig text-left block w-40'>Email:</span>
                    <input name='email' value={student.email} onChange={e => handleSubmit(e)} type="email" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Contact No:</span>
                    <input name='contact' value={student.contact} onChange={e => handleSubmit(e)} type="number" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>City:</span>
                    <input name='city' value={student.city} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Address:</span>
                    <input name='address' value={student.address} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Password:</span>
                    <input name="password" value={student.password} onChange={e => handleSubmit(e)} type="password" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Your Resume:</span>
                    <input type="file" onChange={e => setResume(e.target.files[0])} accept=".doc, .docx, .pdf, .odt" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                {
                    error && <div className='w-full flex justify-around mb-4'>
                        <p className='text-red-500'>{error}</p>
                    </div>
                }

                <div className='w-full flex justify-around mb-4'>
                    <div className='w-40'></div>
                    <div className='flex-1'>
                        {
                            loading ? <div class="loader"></div> : <button onClick={() => handleSignUpStudent(student, image, resume)} className='font-bold bg-green-300 px-7 py-2 mb-4 rounded-md'>Register</button>
                        }

                        <p>Already have an account ?  <Link href="/student/login"><a className='text-blue-300'>Login</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default SignUp