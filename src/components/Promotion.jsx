import { useState } from 'react';

function Banner() {
  const [showBanner, setShowBanner] = useState(true);
  
  if (!showBanner) {
    return null;
  }
  
  return (
    <div className="bg-[#00a9e0] px-4 py-4 flex justify-evenly items-center h-18">
      <p className="text-gray-100 font-bold text-center">Online or Onsite | Sundays @ 10:30 am | 14313 NE 20th Ave, A104, Vancouver, WA 98686</p>
      <button className="text-gray-100 text-xl hover:text-gray-900" onClick={() => setShowBanner(false)}>&times;</button>
    </div>
  );
}

export default Banner;