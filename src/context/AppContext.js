import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const productURL =
  'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/';
const categoryURL =
  'https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/';

export function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  let location = useLocation();

  useEffect(() => {
    function fetchProducts() {
      setLoading(true);
      axios
        .get(productURL)
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }

    function fetchCategories() {
      axios
        .get(categoryURL)
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => console.log(err));
    }

    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    function fetchProducts() {
      setLoading(true);
      axios
        .get(productURL)
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }

    fetchProducts();
  }, [location]);

  const value = {
    products,
    categories,
    loading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
