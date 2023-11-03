'use client'
import 'tailwindcss/tailwind.css'
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import React, {useContext, useEffect, useState} from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { fetchProducts, deleteProduct } from '@/app/utils/api'
import { CartContext } from '@/app/contexts/CartContext';
import { ProductContainer, ProductImage, CardButton } from '@/app/styles/ProductsStyles'
import '../products/products.css';


const AdminPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const {addToCart} = useContext(CartContext);

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const { data: session } = useSession();
  const router = useRouter();

  const [products, setProducts] = useState([]);

  const handleDeleteProduct = async (productId) => {
    const success = await deleteProduct(productId);

    if (success) {
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);

      router.reload();
    }
  };

  useEffect(() => {
    const getProducts = async () => {
        const productsData = await fetchProducts();
        setProducts(productsData);
    }
    getProducts();
  }, []);

  
  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <h1 className="text-2xl font-bold text-dark-green m-8">Alteração de Produtos</h1>
      <ul className='ul-produtos'>
        {products.map((product) => (
          <li className='lista-produtos' key={product.id}>
            <ProductContainer>
              <ProductImage className='img-produtos' src={product.image} width={200} />
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <CardButton onClick={() => handleDeleteProduct(product.id)}>
                Deletar produto
              </CardButton>
              <Link href={`/admin/products/edit/${product.id}`}>
               <CardButton>
                  Editar produto
                </CardButton>
              </Link>
            </ProductContainer>
          </li>
        ))}
      </ul>
      <Bottom></Bottom>
    </main>
  );

}
export default AdminPage;