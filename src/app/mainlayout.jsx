

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/navbar/Navbar";

export default function Layout({ children }) {
  return (
      
          <div>
         <div>
          <Navbar></Navbar>
        </div>
      <div className="flex">
      <div className="mt-[-110px] ">
        <Sidebar></Sidebar>
      </div>
       <div > 
       {children}
       </div>
      </div>
          </div>
       
  );
}

