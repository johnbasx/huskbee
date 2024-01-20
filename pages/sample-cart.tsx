import React, { useState } from 'react';

const itemsData = [
  {
    id: '1',
    name: 'Item 1',
    price: 9.99,
    quantity: 1,
  },
  {
    id: '2',
    name: 'Item 2',
    price: 19.99,
    quantity: 2,
  },
  {
    id: '3',
    name: 'Item 3',
    price: 29.99,
    quantity: 3,
  },
];
interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: Item[];
  onAdd: (item: Item) => void;
  onRemove: (item: Item) => void;
}

const Cart = ({ items, onAdd, onRemove }: CartProps) => {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className='rounded bg-black p-4 shadow-md'>
      <h2 className='mb-4 text-lg font-semibold'>Shopping Cart</h2>
      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.map((item) => (
        <div key={item.id} className='mb-2 flex items-center justify-between'>
          <div>
            <h3 className='text-sm font-medium'>{item.name}</h3>
            <p className='text-xs text-neutral-600'>${item.price.toFixed(2)}</p>
          </div>
          <div className='flex items-center'>
            <button
              type='button'
              onClick={() => onRemove(item)}
              className='rounded bg-red-500 px-2 py-1 text-xs font-medium text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300'
            >
              -
            </button>
            <span className='mx-2'>{item.quantity}</span>
            <button
              type='button'
              onClick={() => onAdd(item)}
              className='rounded bg-green-500 px-2 py-1 text-xs font-medium text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300'
            >
              +
            </button>
          </div>
        </div>
      ))}
      {items.length > 0 && (
        <>
          <hr className='my-4' />
          <div className='flex justify-between'>
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
};

const CartPage = () => {
  const [items, setItems] = useState<Item[]>(itemsData);
  const onAdd = (item: Item) => {
    const index = items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      const updatedItems = [...items];
      updatedItems[index].quantity += 1;
      setItems(updatedItems);
    }
  };

  const onRemove = (item: Item) => {
    const index = items.findIndex((i) => i.id === item.id);
    if (index !== -1 && items[index].quantity > 0) {
      const updatedItems = [...items];
      updatedItems[index].quantity -= 1;
      setItems(updatedItems);
    }
  };
  return <Cart items={items} onAdd={onAdd} onRemove={onRemove} />;
};
export default CartPage;
