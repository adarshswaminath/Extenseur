import React from 'react'

function Box() {
    return (
        <div className=''>
            <div className="grid lg:flex ">
                {/* white box starts */}
                <div className="w-full p-20 bg-white lg:w-1/2 ">
                    
                </div>
                {/* white box ends */}
                {/* golden box starts */}
                <div className="p-20 w-full bg-golden lg:w-1/2 text-center justify-center">
                    
                </div>

                {/* golden box ends */}

            </div>
        </div>
    )
}

export default Box