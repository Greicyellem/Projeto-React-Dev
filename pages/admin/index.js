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
    // Faça a chamada para excluir o produto
    const success = await deleteProduct(productId);

    if (success) {
      // Atualize a lista de produtos após a exclusão
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);

      // Recarregue a página
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
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductContainer>
              <ProductImage src={product.image} width={200} />
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <CardButton onClick={() => handleDeleteProduct(product.id)}>
                Delete Product
              </CardButton>
              <Link href={`/admin/products/edit/${product.id}`}>
                <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Edit
                </button>
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