import Link from 'next/link'
import { useRouter } from "next/router"
import { useRef } from "react"
function SignUp() {
    const uploadImage = useRef(null)
    const router = useRouter()
    const { role } = router.query
    if (role === "company") {
        return <div className='bg-blue-300 w-full h-screen flex justify-center items-center'>
            <div className='bg-white color-blue-300 w-2/4 p-3 rounded-md h-3/4 flex flex-col justify-center'>
                <h1 className='mb-8 text-3xl text-center'>Sign Up</h1>
                <div className='flex justify-center'>
                    <img onClick={uploadImage.current && uploadImage.current.click()} className='w-20 mb-4 rounded-full' src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg'/>
                    <input type="file" hidden ref={uploadImage}/>
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Company Name:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Established:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Email:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold alig text-left block w-40'>Contact:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Username:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Password:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <div className='w-40'></div>
                    <div className='flex-1'>
                        <button className='font-bold bg-green-300 px-7 py-2 mb-4 rounded-md'>Register</button>
                        <p>Already have an account ?  <Link href=""><a className='text-blue-300'>Login</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    }
    else {
        return <div className='bg-blue-300 w-full h-screen flex justify-center items-center'>
            <div className='bg-white color-blue-300 w-2/4 p-3 rounded-md h-3/4 flex flex-col justify-center'>
                <h1 className='mb-8 text-3xl text-center'>Sign Up</h1>
                <div className='flex justify-center'>
                    <img onClick={uploadImage.current && uploadImage.current.click()} className='w-20 mb-4 rounded-full' src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg'/>
                    <input type="file" hidden ref={uploadImage}/>
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>First Name:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Last Name:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Gender:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold alig text-left block w-40'>Email:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Contact No:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>City:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <span className='font-bold text-left block w-40'>Address:</span>
                    <input type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
                </div>
                <div className='w-full flex justify-around mb-4'>
                    <div className='w-40'></div>
                    <div className='flex-1'>
                        <button className='font-bold bg-green-300 px-7 py-2 mb-4 rounded-md'>Register</button>
                        <p>Already have an account ?  <Link href=""><a className='text-blue-300'>Login</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default SignUp