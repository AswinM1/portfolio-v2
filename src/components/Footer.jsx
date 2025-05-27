import { Book, BookA, Twitter, X } from 'lucide-react'
import React from 'react'
import { BsTwitterX, } from 'react-icons/bs'
import { FaGit, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTheme } from './Context'
import { Sun,Moon } from 'lucide-react'

function Footer() {
  const{toggleDarkMode,darkMode}=useTheme()
  return (
    <div className=' pb-28 border-t border-dotted w-full text-black bg-white dark:bg-neutral-900 dark:text-white'>
      <div className='flex justify-center items-center gap-4 py-4'>
      
        
      <a href='https://leetcode.com/u/ASWIN__M/' className='cursor-pointer'>
        <p>Leetcode</p>
        </a>
      <a href='https://www.geeksforgeeks.org/user/aswin_m1/' className='cursor-pointer'>
        <p>GFG</p>
        </a>
       
       <a href="https://github.com/AswinM1">
            <FaGithub size={20} className='cursor-pointer'></FaGithub>
            </a>
            <a href="https://x.com/__pseudocode__">
         <BsTwitterX className='cursor-pointer'/ >
         </a>
        
        
        <button
          onClick={toggleDarkMode}
          title="Toggle Theme"
          className={`rounded-lg transition  
            ${darkMode ? 'bg-neutral-900 text-white' : 'bg-white text-black'}`}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  )
}

export default Footer
