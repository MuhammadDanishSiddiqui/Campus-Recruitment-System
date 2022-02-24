import Link from 'next/link'
function HomePage() {
  return <div className="bg-blue-300 w-full h-screen text-white flex justify-center items-center flex-col">
    <h1 className="text-4xl">Welcome to Campus Recuritment System</h1>
    <p className="mt-4 text-lg">A platform that combines students and organizations together</p>
    <div className='w-full flex justify-center mt-4'>

    <Link href=""> 
          <a className="bg-green-900 mr-2 p-2 pl-5 pr-5 rounded-lg hover:bg-white hover:text-blue-300">Admin Login</a>
    </Link>
    <Link href="" > 
          <a className="bg-green-900 mr-2 p-2 pl-5 pr-5 rounded-lg hover:bg-white hover:text-blue-300">Student Login</a>
    </Link>
    <Link href="" > 
          <a className="bg-green-900 p-2 pl-5 pr-5 rounded-lg hover:bg-white hover:text-blue-300">Company Login</a>
    </Link>
    </div>
  
  </div>
}

export default HomePage