import { Link } from 'react-router-dom';

export default function Card({ product }) {
  return (
    <div className='bg-white rounded-md flex flex-col justify-center items-center'>
      <img src={product.avatar} alt='' className='rounded-t-md w-1/2 center' />

      <div className='card-body text-center py-3'>
        <Link to={`/${product.id}`} className='font-medium text-xl mb-3 block'>
          {product.name}
        </Link>
        <div id='price' className='font-medium'>
          $ {product.price}
        </div>
      </div>
    </div>
  );
}
