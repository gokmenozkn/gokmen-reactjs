import { useNavigate } from 'react-router-dom';

export default function Card({ product }) {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${product.id}`)}
      className='bg-white rounded-md flex flex-col justify-center items-center cursor-pointer'
    >
      <img
        src={product.avatar || ''}
        alt=''
        className='rounded-t-md w-1/2 center'
      />

      <div className='card-body text-center py-3'>
        <h4 className='font-medium text-xl mb-3 block'>{product.name}</h4>
        <div id='price' className='font-medium'>
          $ {product.price}
        </div>
      </div>
    </div>
  );
}
