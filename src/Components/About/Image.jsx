import React from 'react'
import image from "../images/bussiness.jpg"
function Image() {
  return (
    <div>
        <div
                className="flex items-center justify-center h-96 bg-cover"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="text-center">
                    <h1 className="text-4xl font-bold spcl-font text-black mb-3">Associate & Grow With us</h1>
                    <h3 className="text-2xl spcl-font text-tealblue">Join Our team as a bussiness associate</h3>
                    <button className="bg-golden text-black rounded-full py-2 px-6 shadow-lg">JOIN NOW</button>
                </div>
            </div>
    </div>
  )
}

export default Image