import React, { useContext } from 'react';
// icon
import {IoClose} from 'react-icons/io5';
// context
import { CartContext } from '../context/CartContext';
// components
import CartItem from '../components/CartItem';

const Cart = () => {
 const {setIsOpen, cart} = useContext(CartContext)
  return (
  <div className='w-full h-full px-4 text-white'>
    <div>
      {/* close icon */}
      <div
         onClick={() => setIsOpen(false)}
         className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'
         >
        <IoClose />
      </div>
      <div className='flex flex-col gap-y-10 px-2'>
        {cart.map(item => {
          return <CartItem key={item.id} item={item} />
        })}
      </div>
    </div>  
  </div>
)};

export default Cart;
