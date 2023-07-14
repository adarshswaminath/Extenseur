import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <div className="h-screen flex justify-center items-center">
            <form action="#" className="grid gap-3 border border-tealblue p-12 rounded-lg">
                <h3 className='text-2xl font-semibold text-center text-golden'>Admin Login</h3>
                <input type="text" name="user" id="user" className='px-8 rounded-lg' placeholder='Username...'/>
                <input type="password" name="password" id="password" className='px-8 rounded-lg' placeholder='Password...'/>
                <Link to="/admin-forgot" className='text-right'>Forgot Password ?</Link>
                <Link to="/pannel" className='bg-golden m-auto text-white px-6 py-2 rounded-lg hover:text-golden hover:bg-white border hover:border-golden transition-all duration-300'>Submit</Link>
            </form>
        </div>
    </div>
  )
}

export default Login