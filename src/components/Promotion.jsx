import { useState } from 'react';

function Banner() {
  const [showBanner, setShowBanner] = useState(true);
  
  if (!showBanner) {
    return null;
  }
  
  return (
    <div className="bg-[#00a9e0] px-4 py-4 flex justify-evenly items-center h-18">
      <p className="text-gray-100 font-bold text-center">Online or onsite | Sundays @ 9:30am |  16 Mafukachuma Road , Zengeza 2</p>
      <button className="text-gray-100 text-xl hover:text-gray-900" onClick={() => setShowBanner(false)}>&times;</button>
    </div>
  );
}

export default Banner;