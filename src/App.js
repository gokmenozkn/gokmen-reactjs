import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Create from './views/Create';
import Detail from './views/Detail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path=':id' element={<Detail />} />
      <Route path='/create' element={<Create />} />
    </Routes>
  );
}

export default App;
