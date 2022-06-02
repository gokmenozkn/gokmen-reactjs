import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import { useState } from 'react';
import plusIcon from '../assets/plus.png';
import arrowIcon from '../assets/arrow-down.png';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';

function CategoryList({ setCategory }) {
  const { categories } = useAppContext();
  return (
    <ul className='drop-shadow-md rounded absolute mt-4 bg-white w-full left-0 top-full p-3 text-gray-400'>
      {categories.map((c) => (
        <CategoryListItem key={c.id} category={c} setCategory={setCategory} />
      ))}
    </ul>
  );
}

function CategoryListItem({ category, setCategory }) {
  return (
    <li
      onClick={() => setCategory(category.name)}
      className='hover:bg-gray-200 cursor-pointer p-2'
    >
      {category.name}
    </li>
  );
}

export default function Home() {
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const { loading } = useAppContext();

  return (
    <>
      <Navbar />
      <div className='relative py-5 px-4 md:px-0 md:py-10'>
        {/* Search field */}
        <div className='search container mx-auto lg:px-2'>
          <div className='flex flex-wrap flex-col md:flex-row items-center justify-between'>
            <input
              className='p-3 mb-4 md:mb-0 rounded outline-none drop-shadow-lg w-full md:w-1/3'
              type='text'
              placeholder='Apple Watch, Samsung S21...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {/* Dropdown */}
            <div
              onClick={() => setDropdownDisplay(!dropdownDisplay)}
              className='relative p-3 cursor-pointer rounded drop-shadow-lg dropdown bg-white w-full md:w-1/3'
            >
              <div>
                <button className='text-gray-400 inline-flex items-center justify-between w-full'>
                  {category ? category : 'Categories'}
                  <img className='w-3 h-3' src={arrowIcon} alt='' />
                </button>
              </div>
              {dropdownDisplay && <CategoryList setCategory={setCategory} />}
            </div>
          </div>
        </div>

        {/* Cards */}
        {loading ? (
          <Spinner />
        ) : (
          <main className='mt-8'>
            <ProductList query={query} category={category} />
          </main>
        )}
        {/* Create icon */}
        <Link to={'/create'} className='fixed right-5 bottom-5'>
          <img className='w-14 h-14' src={plusIcon} alt='' />
        </Link>
      </div>
    </>
  );
}
