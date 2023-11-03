import Link from "next/link";
import React, {useContext} from "react";
import { ThemeContext } from '@/app/contexts/ThemeContext'
import { FiSettings } from "react-icons/fi";
import { AiFillHome, AiFillShopping, AiOutlineCloseCircle, AiOutlineLogin, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonPlus } from "react-icons/bs";


const Drawer = ({ isOpen, onClose }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const drawerStyle = {
        transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    }

    return(
    <div
        className={`fixed top-0 left-0 h-full w-84 ${theme === 'dark' ? 'bg-dark-red' : 'bg-emerald-800 text-black'} p-4`}
        style={drawerStyle}
    >
        <label className="relative inline-flex items-center cursor-pointer">
        <input 
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={toggleTheme}
            checked={theme === 'dark'}
        ></input>

        <div 
            className={`w-11 h-6 ${theme === 'dark' ? 
            'bg-dark-red peer-checked:bg-dark-green ':
            'bg-dark-green peer-checked:white '} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-dark-green dark:peer-focus:ring-dark-red rounded-full peer dark:bg-dark-red peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}>
        </div>

        <span
            className="ml-3 text-sm font-medium"
        >    
            {theme === 'dark' ? 'Alterar tema' : 'Alterar tema'}
        </span>

        </label>

        <h5 id="drawer-navigation-label" className="text-base font-semibold text-deep-gold uppercase m-4 pt-4 ">Menu</h5>
            <button onClick={onClose} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-black bg-transparent hover:bg-dark-red hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
           
            <span title='fechar menu' className="text-deep-gold"> <AiOutlineCloseCircle> </AiOutlineCloseCircle></span>
        </button>
        <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">

                <li>
                    <Link href={"/"}>
                        <div className="flex items-center p-2 text-deep-gold rounded-lg dark:text-white hover:bg-dark-green dark:hover:bg-gray-700 grouSignp">
                        <AiFillHome> </AiFillHome>
                        <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href={"/products"}>
                        <div className="flex items-center p-2 text-deep-gold rounded-lg dark:text-white hover:bg-dark-green dark:hover:bg-gray-700 group">
                        <AiFillShopping> </AiFillShopping>
                        <span className="flex-1 ml-3 whitespace-nowrap">Produtos</span>
                        </div>
                    </Link>
                </li>
                <li>
                <Link href={"/cart"}>
                    <div className="flex items-center p-2 text-deep-gold rounded-lg dark:text-white hover:bg-dark-green dark:hover:bg-gray-700 group">
                   <AiOutlineShoppingCart></AiOutlineShoppingCart>
                    <span className="flex-1 ml-3 whitespace-nowrap">Carrinho</span>
                    </div>
                    </Link>
                </li>
                <li>
                <Link href={"/login"}>
                    <div className="flex items-center p-2 text-deep-gold rounded-lg dark:text-white hover:bg-dark-green dark:hover:bg-gray-700 group">
                    <AiOutlineLogin> </AiOutlineLogin>
                    <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
                    </div>
                </Link>
                </li>
                <li>
                <Link href={"/"}>
                    <div className="flex items-center p-2 text-deep-gold rounded-lg dark:text-white hover:bg-dark-green dark:hover:bg-gray-700 group">
                    <BsPersonPlus> </BsPersonPlus>
                    <span className="flex-1 ml-3 whitespace-nowrap">Cadastre-se</span>
                    </div>
                </Link>
                </li>

                <li>
                <Link href={"/admin/products/create"}>
                    <div className="flex items-center p-2 text-deep-gold rounded-lg dark:text-white hover:bg-dark-green dark:hover:bg-gray-700 group">
                    <FiSettings> </FiSettings>
                    <span className="flex-1 ml-3 whitespace-nowrap">Área do admin.: Criar produtos</span>
                    </div>
                    
                    </Link>
                </li>

                <li>
                <Link href={"/admin"}>

                    <div className="flex items-center p-2 text-deep-gold rounded-lg dark:text-white hover:bg-dark-green dark:hover:bg-gray-700 group">
                    <FiSettings> </FiSettings>
                    <span className="flex-1 ml-3 whitespace-nowrap">Área do admin.: Excluir/editar produtos</span>
                    </div>
                    </Link>
                </li>
            </ul>
        </div>

    </div>

    )
}
export default Drawer;