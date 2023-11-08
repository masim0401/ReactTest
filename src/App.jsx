import {Route, Routes} from 'react-router-dom';
import PrivateRoutes from './layouts/PrivateRoutes.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Users from './pages/Users.jsx';
import Layout from './layouts/Layout.jsx';

function App() {

  return (
    <>
      <Routes>
          <Route path="/login" element={<Layout/>}>
              <Route index element={<Login/>}/>
          </Route>


          <Route path="/" element={<PrivateRoutes/>}>
              <Route index element={<Home/>}/>
              <Route path="/users" element={<Users/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;
