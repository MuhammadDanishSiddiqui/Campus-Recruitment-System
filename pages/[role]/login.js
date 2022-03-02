import { useState,useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import { loginUser } from "../../src/functions/auth"
import { getUserDetail } from "../../src/functions/user"

function Login() {
    const user = JSON.parse(typeof window !== "undefined" && localStorage.getItem("currentUser"))
    const router = useRouter()
    const { role } = router.query
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    useEffect(()=>{
        if(user && user.role == "student")
        {
            router.push("/student/profile")
        }
        if(user && user.role == "company")
        {
            router.push("/company/profile")
        }

    },[user])

    const handleSubmit = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUserData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleLogin = async (user) => {
        loginUser(user,
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
                    else if(data.role == "company")
                    {
                        router.push("/company")
                    }
                    else if(data.role == "admin")
                    {
                        router.push("/admin")
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
    return <div className='bg-blue-300 w-full h-screen flex justify-center items-center'>
        <div className='bg-white color-blue-300 w-2/4 p-3 rounded-md h-3/4 flex flex-col justify-center'>
            <h1 className='mb-8 text-3xl text-center'>Login</h1>
            <div className='w-full flex justify-around mb-4'>
                <span className='font-bold text-left block w-40'>Email:</span>
                <input name="email" value={userData.email} onChange={e => handleSubmit(e)} type="text" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
            </div>
            <div className='w-full flex justify-around mb-4'>
                <span className='font-bold text-left block w-40'>password:</span>
                <input name="password" value={userData.password} onChange={e => handleSubmit(e)} type="password" className='flex-1 border-solid border-blue-300 border-2 outline-none	p-1' />
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
                        loading ? <div class="loader"></div> :  <button onClick={() => handleLogin(userData)} className='font-bold bg-green-300 px-7 py-2 mb-4 rounded-md'>Login</button>
                    }
                   
                    {
                        role === "admin" ? null : <p>Don't have an account ?  <Link href={`/${role}/signup`}><a className='text-blue-300'>Register</a></Link></p>
                    }
                </div>
            </div>
        </div>
    </div>

}

export default Login