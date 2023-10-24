import React from 'react';
import CardItem from './CardItem';
import Pagination from './Pagination';

const data = [
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
  {
    img: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
    discount: 10,
    price: 100000,
    name: 'Name watch Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quiveniam explicabo quidem quaerat laudantium cum. Eos, atque mollitia recusandae officiis abcum? Explicabo at voluptas quos perspiciatis laborum!',
  },
];

function ListProduct() {
  const renderCartItem = () => {
    return data.map((item, i) => {
      return (
        <CardItem
          item={item}
          key={i}
        />
      );
    });
  };
  return (
    <div className='my-2'>
      <div className='grid grid-cols-12 gap-5 '>{renderCartItem()}</div>
      <div className='flex justify-center'>
        <Pagination />
      </div>
    </div>
  );
}

export default ListProduct;
