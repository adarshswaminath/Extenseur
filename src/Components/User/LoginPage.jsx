import React from 'react'
import {Link,Route,Routes} from "react-router-dom"


function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
    <form className="max-w-md w-full bg-background p-8 md:p-12 rounded-lg">
        <h1 className="text-golden text-3xl md:text-4xl mb-6">Login</h1>
        <input type="text" placeholder="Username" class="w-full bg-white border-golden border-t-0 border-l-0 border-r-2 border-b-2 rounded-lg mb-4 px-4 py-2 text-lg md:text-xl" />
        <input type="password" placeholder="Password" class="w-full bg-white border-golden border-t-0 border-l-0 border-r-2 border-b-2  rounded-lg mb-4 px-4 py-2 text-lg md:text-xl" />
        <button class="w-full mb-3 bg-golden text-white py-3 rounded-full font-bold text-lg md:text-xl">Submit</button>
    </form>
</div>

  )
}

export default LoginPage