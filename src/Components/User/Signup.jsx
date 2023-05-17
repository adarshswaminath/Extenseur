import React from 'react'

function Signup() {
  return (
    <div class="h-screen flex items-center justify-center">
    <form class="max-w-lg w-full bg-background p-8 md:p-12 rounded-lg">
        <h1 class="text-golden text-3xl md:text-4xl mb-6">Create Account</h1>
        {/* <!-- Names grid --> */}
        <div class="grid lg:grid-cols-2 gap-3">
            <input type="text" placeholder="First Name" class="w-full bg-white border-golden border-t-0 border-l-0 border-r-2 border-b-2 rounded-lg mb-4 px-4 py-2 text-lg md:text-xl" />
            <input type="text" placeholder="Last Name" class="w-full bg-white border-golden border-t-0 border-l-0 border-r-2 border-b-2 rounded-lg mb-4 px-4 py-2 text-lg md:text-xl" />
        </div>
        <input type="email" placeholder="Email" class="w-full bg-white border-golden border-t-0 border-l-0 border-r-2 border-b-2 rounded-lg mb-4 px-4 py-2 text-lg md:text-xl" />
        <input type="text" placeholder="Mobile No" class="w-full bg-white border-golden border-t-0 border-l-0 border-r-2 border-b-2 rounded-lg mb-4 px-4 py-2 text-lg md:text-xl" />
        <textarea rows="5" class="w-full bg-white border-golden border-t-0 border-l-0 border-r-2 border-b-2 rounded-lg mb-4 px-4 py-2 text-lg md:text-xl" placeholder="Description"></textarea>
        <button class="w-full bg-golden text-white py-3 rounded-full font-bold text-lg md:text-xl">Submit</button>
    </form>
</div>

  )
}

export default Signup