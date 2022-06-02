import { useAppContext } from '../context/AppContext';
import Card from './Card';

export default function ProductList({ query, category }) {
  const { products } = useAppContext();

  const dataToShow = (() => {
    if (!query && !category) {
      return products;
    } else {
      return [...products].filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) &&
          p.category === category
      );
    }
  })();

  return (
    <div className='cards grid lg:grid-cols-4 md:grid-cols-3 max-w-4xl mx-auto gap-4'>
      {dataToShow.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
