import React from 'react';

function Box() {
  
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* white box starts */}
        <div className="p-8 bg-white">
          
        </div>
        {/* white box ends */}
        {/* golden box starts */}
        <div className="p-8 bg-golden">
          
        </div>
        {/* golden box ends */}
      </div>
    </div>
  );
}

export default Box;
