'use client'
import 'tailwindcss/tailwind.css'
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import React, {useContext, useEffect, useState} from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { fetchProducts, searchProducts } from '@/app/utils/api'
import { CartContext } from '@/app/contexts/CartContext';
import './products.css';
import { CardButton } from '@/app/styles/ProductsStyles';

const ProductsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const {addToCart} = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const results = await searchProducts(searchTerm);
      setSearchResults(results);
    };

    search();
  }, [searchTerm]);

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const { data: session } = useSession();
  const router = useRouter();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
        const productsData = await fetchProducts();
        setProducts(productsData);
    }
    getProducts();
  }, []);

  
  return (
    <main >
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>

      <div className="flex justify-center py-10">
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="bg-gray-200 border border-dark-red rounded-full p-4 w-80"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex justify-center ">

        <ul className='justify-center flex '>
          {searchResults.map((product) => (
            <li key={product.id} className="mb-4">
              <div className="bg-white p-4 shadow-md">
                <img src={product.image} alt={product.title} className="w-16 h-16 rounded-full" />
                <p className="mt-2">{product.title}</p>
              </div>
            </li>
          ))}
        </ul>
        </div>
        <div className='produtos-todos'> 
        <ul className='ul-produtos'>
        {products.map((product) =>(
            <li className='lista-produtos' key={product.id}>
                <img src={product.image} width={200} />
                <p>{product.title}</p>
                <p>{product.price}</p> 
                <p>{product.description}</p>
                <p>{product.category} </p>
                  <CardButton
               onClick={() => addToCart(product)}
              >
                Adicionar ao carrinho </CardButton>
                  
            </li>
        ))}
      </ul>
      </div>
  

      <Bottom></Bottom>
    </main>
  );

}
export default ProductsPage;