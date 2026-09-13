import React from 'react';
import logo from "../assets/logo-text.png"
const Nav = () => {
    return (
      <nav className='fixed top-0 left-0 w-full z-50 border-b-[1px] border-[#f1f5f9FF] shadow-sm bg-white'>
            <div className='container flex justify-between px-[105px] py-[24px] text-[14px] text-[#475569FF] font-[500px]'>
                <img src={logo} alt="" />
            <div>
                <ul className='flex gap-[28px] py-[5px]'>
                   <li className='hover:text-[#c30065] cursor-pointer'>Home</li>
                   <li className='hover:text-[#c30065] cursor-pointer'>Technologies</li>
                   <li className='hover:text-[#c30065] cursor-pointer'>Project</li>
                   <li className='hover:text-[#c30065] cursor-pointer'>About</li>
                   <li className='hover:text-[#c30065] cursor-pointer'>Contact</li>
                </ul>
            </div>
            <div className='flex gap-[20px]'>
               <button className='rounded-4xl px-[20px] py-[10px] hover:bg-[#d91b7eFF] hover:text-white cursor-pointer'>Sign In</button>
               <button className='bg-[#d91b7eFF] text-white rounded-4xl px-[20px] py-[10px] hover:bg-[#c30065] cursor-pointer'>Sign Up</button>
            </div>
            </div>

      </nav>
    );
};

export default Nav;