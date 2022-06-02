import { useState } from 'react';
import arrowIcon from '../assets/arrow-down.png';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { FormatPrice } from '../helper/priceFormat';

export default function Create() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [price, setPrice] = useState('');

  let navigate = useNavigate();
  const { categories } = useAppContext();

  function handleCategoryChange(categ) {
    setCategory(categ);
    setIsOpen(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      price: Number(price),
      category,
      description: desc,
      avatar: imgUrl,
      developerEmail: 'gkmenozkn@gmail.com',
    };

    const productUrl =
      'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products';

    if (name && price && category && desc && imgUrl) {
      axios
        .post(productUrl, data)
        .then((res) => {
          navigate('/');
          console.log(`Success: ${res}`);
        })
        .catch((err) => console.log(err));
    } else {
      alert('Fields cannot be empty!');
      return;
    }
  }

  function handlePriceInput(e) {
    const formatted = FormatPrice(e.target.value);
    setPrice(formatted);
  }

  return (
    <>
      <Navbar />
      <div className='relative py-10'>
        <div className='max-w-xl mx-auto'>
          <h1 className='font-bold text-4xl text-center mb-12'>
            Create Product
          </h1>
          <form onSubmit={handleFormSubmit} className='flex flex-col gap-5'>
            <input
              className='w-full p-3 outline-none rounded drop-shadow-md'
              type='text'
              placeholder='Product Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              rows='3'
              className='w-full p-3 outline-none rounded drop-shadow-md'
              placeholder='Description'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
            <input
              className='w-full p-3 outline-none rounded drop-shadow-md'
              type='text'
              placeholder='Image URL'
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              required
            />
            <div
              onClick={() => setIsOpen(!isOpen)}
              className='cursor-pointer flex justify-between items-center relative w-full p-3 bg-white rounded drop-shadow-md z-10'
            >
              <p className='text-gray-400'>
                {category ? category : 'Categories'}
              </p>
              <img className='w-3 h-3' src={arrowIcon} alt='' />
              {isOpen && (
                <ul className='drop-shadow-md rounded absolute bg-white w-full left-0 top-full p-3 mt-4 text-gray-400'>
                  {categories &&
                    categories.length > 0 &&
                    categories.map((c) => {
                      return (
                        <li
                          key={c.id}
                          onClick={() => handleCategoryChange(c.name)}
                          className='hover:bg-gray-200 cursor-pointer px-2 py-2'
                        >
                          {c.name}
                        </li>
                      );
                    })}
                </ul>
              )}
            </div>
            <input
              className='w-full p-3 outline-none rounded drop-shadow-md'
              type='text'
              placeholder='Price'
              value={price}
              onChange={handlePriceInput}
              required
            />
            <button
              type='submit'
              className='bg-blue-600 hover:bg-blue-500 text-white rounded py-3 uppercase font-medium'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
