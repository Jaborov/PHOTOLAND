import React, { createContext, useState } from 'react';

// create context
export const CartContext = createContext();
const CartProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // add to cart
  const addToCart = (item, id) => {
    const itemID = parseInt(id);
    const newItem = {...item[0], amount: 1}
    setCart([...cart, newItem ]);
    // check if item is already in the cart
    const cartItem = cart.find(item => {
      return item.id === itemID
    })
    
    if(cartItem) {
      const newCart = cart.map(item => {
        if(item.id === itemID) {
          setAmount(cartItem.amount +1)
          return {...item, amount: cartItem.amount + 1}
        } else {
          return item;
        }
      });
      setCart(newCart);
    }else {
      setCart([...cart, newItem])
    }
    // open the cart sidebar
    setIsOpen(true);
  };

  // remove from cart
  const removeFromCart = (id) => {
    console.log(`item ${id} removed`)
  }

return (
<CartContext.Provider value={{isOpen, setIsOpen, addToCart, cart, removeFromCart}}>
  {children}
</CartContext.Provider>
)};

export default CartProvider;