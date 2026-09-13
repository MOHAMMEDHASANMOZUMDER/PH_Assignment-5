import { useState } from 'react';
import logo from "../assets/logo-text.png"
import hamburger from "../ui/hamburger.png"

const MobNav = () => {
    const[On,SetOn]=useState(false)
    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-white'>
            <div className='container flex justify-between px-[105px] py-[24px] text-[14px] text-[#475569FF] font-[500px]'>
                <button onClick={()=>SetOn(!On)} className='cursor-pointer p-[2px]'>
                 {On &&
                 <div className='absolute top-full bg-white'>
                <ul className='flex flex-col gap-4 p-5'>
                   <li>Home</li>
                   <li>Technologies</li>
                   <li>Project</li>
                   <li>About</li>
                   <li>Contact</li>
                </ul>
            </div>
                    
                 }   
            <img src={hamburger} alt="" />
          </button>
                <img src={logo} alt="" />
            <div className='flex gap-[20px]'>
               <button>Sign In</button>
               <button className='bg-[#d91b7eFF] text-white rounded-4xl px-[20px] py-[10px]'>Sign Up</button>
            </div>
            </div>

      </nav>
    );
};

export default MobNav;