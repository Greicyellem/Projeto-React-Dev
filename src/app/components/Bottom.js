import React,{useContext, useEffect} from "react";
import { ThemeContext } from '@/app/contexts/ThemeContext';
import Link from "next/link";

function Bottom() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        console.log("Bottom atualizou");
    }, [theme])

    return (
        <div 
            className={`fixed bottom-0 left-0 z-50 w-full h-16 
            ${theme === 'dark' ? 'bg-emerald-800' : 'bg-dark-red'}
            border-t border-gray-200`}
        >
        
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium ">
            <Link href='/' type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg className="w-5 h-5 mb-2 text-deep-gold group-hover:text-dark-green dark:group-hover:text-dark-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                <span className="text-sm text-deep-gold dark:text-dark-green group-hover:text-dark-green dark:group-hover:text-dark-green">Home</span>
            </Link>
            <Link href='/products' type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg className="w-5 h-5 mb-2 text-deep-gold group-hover:text-dark-green dark:group-hover:text-dark-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                </svg>
                <span className="text-sm text-deep-gold dark:text-dark-green group-hover:text-dark-green dark:group-hover:text-dark-green">Produtos</span>
            </Link>
            
            <Link href='/cart' type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-6 h-5 mb-2 text-deep-gold group-hover:text-dark-green dark:group-hover:text-dark-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                </svg>
                <span className="text-sm text-deep-gold dark:text-dark-green group-hover:text-dark-green dark:group-hover:text-dark-green">Carrinho</span>
            </Link>
            <Link href='/admin' type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg className="w-5 h-5 mb-2 text-deep-gold group-hover:text-dark-green dark:group-hover:text-dark-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                </svg>
                <span className="text-sm text-deep-gold dark:text-dark-green group-hover:text-dark-green dark:group-hover:text-dark-green">Editar</span>
            </Link>
            <Link href='/admin/products/create' type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg className="w-5 h-5 mb-2 text-deep-gold group-hover:text-dark-green dark:group-hover:text-dark-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                </svg>
                <span className="text-sm text-deep-gold dark:text-dark-green group-hover:text-dark-green dark:group-hover:text-dark-green">Criar</span>
            </Link>

            
        </div>
        </div>
    )
}
export default Bottom;
