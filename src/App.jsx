import {Route, Routes} from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;
