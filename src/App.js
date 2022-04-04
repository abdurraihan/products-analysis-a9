
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className=" ">
      <Header> </Header>

      <Routes>
        <Route path='/' element={<Home> </Home>} > </Route>
        <Route path='/home' element={<Home></Home>} ></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
