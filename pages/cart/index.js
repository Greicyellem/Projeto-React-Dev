import 'tailwindcss/tailwind.css'
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import React, {useContext, useState} from 'react';
import { CartContext } from '@/app/contexts/CartContext';
import { ProductContainer, ProductImage, CardButton } from '@/app/styles/ProductsStyles'
import '../products/products.css'
import { BsCart2 } from 'react-icons/bs';

const CartPage = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <h1 className="text-2xl font-bold m-8 text-dark-green">Carrinho de Compras <BsCart2> </BsCart2></h1>

        <ul className='ul-produtos'>
          {cartItems.map((item) => (
            <li className='lista-produtos' key={item.id}>
              <ProductContainer>
              <ProductImage src={item.image}/>
                <p>{item.title}</p>
                <p>Preço: {item.price}</p>
                <p>Quantidade: {item.quantity}</p>
                
                <CardButton onClick={() => removeFromCart(item.id)}>Remover do carrinho</CardButton>
              </ProductContainer>
            </li>
          ))}
        </ul>

      <Bottom></Bottom>
    </main>
  );

}
export default CartPage;