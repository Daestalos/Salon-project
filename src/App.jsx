
import { Routes, Route} from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Servicepage } from './pages/Servicepage';
import { Teampage } from './pages/Teampage';
import { Aboutpage } from './pages/Aboutpage';
import { Trainingpage } from './pages/Trainingpage';
import { Blogpage } from './pages/Blogpage';
import { Singlepage } from './pages/Singlepage';
import { Shoppage } from './pages/Shoppage';
import { Notfoundpage } from './pages/Notfoundpage';
import { Layout } from './components/Layout';
import { AuthProvider } from './hoc/AuthProvider';


function App() {
  return (
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />}/>
            <Route path="service" element={<Servicepage />}/>
            <Route path="team" element={<Teampage />}/>
            <Route path="training" element={<Trainingpage />}/>
            <Route path="shop" element={<Shoppage />}/>
            <Route path="about" element={<Aboutpage />}/>
            <Route path="posts/" element={<Blogpage />}/>
            <Route path="posts/:id" element={<Singlepage />}/>
            <Route path="*" element={<Notfoundpage />}/>
          </Route>
        </Routes>
      </AuthProvider>

  );
}

export default App;
