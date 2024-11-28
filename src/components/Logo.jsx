import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center h-[50px]">
 
      <div className="relative flex items-center justify-center bg-black text-white w-[120px] h-full">
        
        <div className="absolute  h-[3px] w-[35px] top-[18px] left-[5px] bg-orange-500" ></div>
      
        <div className="absolute  rounded-full w-[10px] h-[10px] top-[13px] left-[38px] bg-orange-500 opacity:5" ></div>
       
        <div className="flex items-center gap-[2px] relative top-[5px]">
          <span className="text-2xl font-bold">i</span>
          <span className="text-2xl font-bold">VF</span>
        </div>
      </div>

  
      <div className="flex items-center bg-white text-black px-4 h-full">
        <span className="text-xl font-semibold">Pulse</span>
      </div>
    </div>
  );
};

export default Logo;
