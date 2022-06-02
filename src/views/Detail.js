import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAppContext } from '../context/AppContext';

export default function Detail() {
  const { products } = useAppContext();
  let params = useParams();

  const foundItem = products.find((p) => p.id === params.id);

  if (!foundItem) {
    return (
      <>
        <Navbar />
        <main className='relative'>
          <div className='max-w-4xl mx-auto py-5'>
            <h1 className='font-bold text-4xl'>No Item Found!</h1>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className='relative px-4 md:px-0'>
        <div className='max-w-5xl mx-auto py-4 md:py-7'>
          <div
            id='top'
            className='flex flex-wrap border-b-2 border-black py-3 mb-8 gap-7'
          >
            <img
              src={foundItem.avatar}
              alt=''
              className='w-full md:max-w-xs rounded-md bg-white'
            />
            <div className='flex flex-col py-5'>
              <h1 className='text-4xl font-bold'>{foundItem.name}</h1>
              <div className='mt-auto text-2xl font-semibold'>
                $ {foundItem.price}
              </div>
            </div>
          </div>
          <div id='description'>
            <h3 className='font-bold text-xl'>Description</h3>
            <p>{foundItem.description}</p>
          </div>
        </div>
      </main>
    </>
  );
}
