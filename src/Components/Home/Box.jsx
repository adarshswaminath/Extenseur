import React from 'react';

function Box() {
  
  return (
    <div className="grid lg:flex">
        <div className="w-full lg:w-1/2 bg-background p-6"></div>
        <div className="w-full lg:w-1/2 bg-golden p-6"></div>

    </div>
  );
}

export default Box;
