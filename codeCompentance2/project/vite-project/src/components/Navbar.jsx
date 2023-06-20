import { useState, useEffect } from "react";

export default function Navbar() {
   //    const [isSticky, setIsSticky] = useState(false);

   //    useEffect(() => {
   //       const handleScroll = () => {
   //          if (window.scrollY >= 200) {
   //             setIsSticky(true);
   //          } else {
   //             setIsSticky(false);
   //          }
   //       };
   //       window.addEventListener("scroll", handleScroll);

   //       // Cleanup;
   //       return () => {
   //          window.removeEventListener("scroll", handleScroll);
   //       };
   //    }, []);
   return (
      <>
         <div className="mx-auto max-w-[1440px] flex justify-between items-center text-white py-3">
            <div className="text-xl font-bold">
               <span className="text-primary-green "> MEJO</span>
               DEV.
            </div>
            <div className="flex gap-5">
               <div>Home</div>
               <div>Portfolio</div>
               <div>About</div>
            </div>
         </div>
      </>
   );
}
