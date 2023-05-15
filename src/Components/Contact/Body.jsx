import React from 'react'

function Body() {
  return (
    <div>
        {/* first grid opens */}
        <div className="grid lg:flex gap-4">
            {/* top first box */}
            <div className="min-h-screen bg-background w-full lg:w-1/2 p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col items-center justify-center">
                {/* contact form */}
                <form className='text-center justify-center grid gap-2'>
                    <div className="grid gap-2 lg:flex ">
                     <input type="text" className='border-none rounded-lg text-center' placeholder="First Name"/>
                     <input type="text" className='border-none rounded-lg text-center' placeholder="Last Name"/>
                    </div>
                    <input type="email" className='border-none rounded-lg text-center' placeholder="Email"/>
                    <textarea cols="30" rows="10" className='border-none rounded-lg text-center' placeholder='Description'></textarea>
                    <button className='mt-3 p-3 bg-golden text-white rounded-full'>Submit</button>
                </form>
            </div>
            {/* top second box */}
            <div className="min-h-screen bg-red-500 w-full lg:w-1/2">
            <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158.08927057927058!2d-0.11809236418380122!3d51.50986587070846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1621008000000!5m2!1sen!2sus"
            allowFullScreen
            className="h-full w-full"
            loading="lazy"
          ></iframe>
            </div>

        </div>
        {/* first grid close */}
        {/* second grid opens */}
        <div className="grid lg:flex gap-4">
            {/* bottom first box */}
            <div className="min-h-screen bg-golden w-full lg:w-1/2 p-4 md:p-8 lg:p-12 xl:p-16">
                <div className="justify-center items-center flex flex-col h-screen text-white">
                    <h2 className="text-3xl">Hello Welcome</h2>
                    <p className='mt-6'>Pariatur Lorem magna consectetur ex labore culpa. Minim qui nisi non et ullamco irure nostrud. Ex cupidatat eu et sit sunt culpa adipisicing. Id magna culpa et eu ipsum tempor dolore officia reprehenderit esse nulla. In consectetur et enim ea ea exercitation quis ut aliqua irure ea non duis. Eu mollit magna elit veniam in sint magna nisi tempor. Consequat voluptate eu irure nulla.</p>
                </div>
            </div>
            {/* bottom second box */}
            <div className="min-h-screen bg-red-500 w-full lg:w-1/2">
            <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158.08927057927058!2d-0.11809236418380122!3d51.50986587070846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1621008000000!5m2!1sen!2sus"
            allowFullScreen
            className="h-full w-full"
            loading="lazy"
          ></iframe>
            </div>

        </div>
        {/* second grid close */}
    </div>
  )
}

export default Body