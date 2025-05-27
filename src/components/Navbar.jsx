import {
  Home, Book, Moon, Sun
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from './Context';
import { LiaLinkedin } from 'react-icons/lia';
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const navItems = [
    { type: 'link', to: '/', title: 'Home', icon: <Home size={28} /> },
    { type: 'link', to: '/blogs', title: 'Blogs', icon: <Book size={28} /> },
    { type: 'external', href:'https://linkedin.com/in/aswinmfullstack', title: 'LinkedIn', icon: <BsLinkedin size={26} /> },
    { type: 'external', href: 'https://github.com/AswinM1', title: 'GitHub', icon: <BsGithub size={26} /> },
    { type: 'external', href: 'https://twitter.com', title: 'Twitter', icon: <BsTwitterX size={22} /> },
    { type: 'external', href: 'mailto:aswinheria@gmail.com', title: 'Email', icon: <MdEmail size={26} /> },
    // { type: 'external', href: 'https://leetcode.com/AswinM1/', title: 'LeetCode', icon: <img src="https://leetcode.com/favicon.ico" alt="LeetCode" className="w-7 h-7 bg-white" /> },
    // { type: 'external', href: 'https://www.geeksforgeeks.org/user/aswin_m1/', title: 'GeeksforGeeks', icon: <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png" alt="GFG" className="w-6 h-6" /> },
  ];

  return (
    <nav className="fixed bottom-6 inset-x-0 z-50 flex justify-center">

      <div
        className={`flex items-end justify-center gap-6 px-3 py-2 rounded-lg shadow-xl backdrop-blur-md border w-fit
        transition-all duration-300
        ${darkMode ? 'bg-neutral-900/70 border-neutral-700 text-white' : 'bg-white/70 border-gray-300 text-black'}`}
      >
        {navItems.map((item, index) =>
         (
          (item.type==='link'?(
            <Link to={item.to} title={item.title} key={index} className="hover:scale-150 text-black dark:text-white transition-all duration-150  rounded-lg  ">
              {item.icon}
            </Link>
          ) :(
            <a href={item.href} className='hover:scale-150 text-black dark:text-white transition-all duration-150  rounded-lg '>
              {item.icon}
            </a>
          )
          
        )))}
  <button
          onClick={toggleDarkMode}
          title="Toggle Theme"
          className={`rounded-lg transition  
            ${darkMode ? ' text-white' : ' text-black'}`}
        >
          {darkMode ? <Sun size={27} /> : <Moon size={27} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
