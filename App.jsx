import './App.css'

import Blogs from './components/Blogs'
import Project from './components/Project'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Skills from './components/Skills'
import { Routes, Route } from 'react-router-dom'
import Hom from './components/Hom'
import Footer from './components/Footer'
import { Neko } from "neko-ts";
import { useRef,useEffect } from 'react'


function App() {
  const neko = useRef();
  const nekoRef = useRef(null);

useEffect(() => {
  if (!nekoRef.current) {
    nekoRef.current = new Neko({
      origin: { x: 100, y: 100 },
    });
  }

  return () => {
    // cleanup if needed (depends on library support)
    if (nekoRef.current) {
      nekoRef.current.destroy?.();
      nekoRef.current = null;
    }
  };
}, []);
  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white transition-colors duration-300">
      <div className='max-w-[600px] m-auto '>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hom />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/projects' element={<Project />} />
        </Routes>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default App
