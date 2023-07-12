import React from 'react'
import LoginPage from './LoginPage'
import { Top } from '../../App'
import Navbar from '../Navbar'

function User() {
  return (
    <div>
       <Top />
        <hr className="w-full bg-gray-400 h-px" />
        <Navbar style={{ zIndex: 100 }}/>
        <LoginPage/>
    </div>
  )
}

export default User