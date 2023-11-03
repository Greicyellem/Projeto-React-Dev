import React,{ useContext, useEffect} from "react";
import { ThemeContext } from "@/app/contexts/ThemeContext"
import { TbChristmasTree } from "react-icons/tb"
import Link from "next/link";

function Appbar({onMenuToggle}) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log('atualiza appbar')
  }, [theme]);

  return (
    <div className={`flex justify-between items-center p-4
      ${theme === 'dark' ? 'bg-emerald-800' : 'bg-dark-red'}
    
    `}>
      <Link href='/'>
      <div className={`font-bold text-lg	 ${theme === 'dark' ? 'text-deep-gold' : 'text-deep-gold'}`}>
         Christmas Store
      </div>
      </Link>
      <button onClick={onMenuToggle}>
        <TbChristmasTree title='menu' className="w-8 h-8 text-deep-gold dark:deep-gold"> 
      </TbChristmasTree>
      </button>
    </div>
  )
}

export default Appbar;