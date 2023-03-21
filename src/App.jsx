
import { Routes, Route} from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Servicepage } from './pages/Servicepage';
import { Teampage } from './pages/Teampage';
import { Aboutpage } from './pages/Aboutpage';
import { Trainingpage } from './pages/Trainingpage';
import { Blogpage } from './pages/Blogpage';
import { Singlepage } from './pages/Singlepage';

import { Createpost } from './cruid/Createpost';
import { Editpost } from './cruid/Editpost';
import { Createmasters } from './cruid/Createmasters';
import { Editmasters } from './cruid/Editmasters';
import { Createservice } from './cruid/Createservice';
import { Editservice } from './cruid/Editservice';
import { Edituser } from './cruid/Edituser';
import { Createrecord } from './cruid/Createrecord';
import { Userpage } from './pages/Userpage';

import { Loginpage } from './pages/Loginpage';
import { Registerpage } from './pages/Registerpage';
import { Adminpage } from './pages/Adminpage';
import { Notfoundpage } from './pages/Notfoundpage';

import { Layout } from './components/Layout';

import { RequireAuth } from './hoc/RequireAuth';
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
            
            <Route path="about" element={<Aboutpage />}/>

            <Route path="posts/" element={<Blogpage />}/>
            <Route path="posts/:id" element={<Singlepage />}/>

            <Route path="team/new" element={<RequireAuth><Createmasters /></RequireAuth>}/>
            <Route path="team/:id/edit" element={<RequireAuth><Editmasters /></RequireAuth>}/>
            <Route path="posts/new" element={<RequireAuth><Createpost /></RequireAuth>}/>
            <Route path="posts/:id/edit" element={<RequireAuth><Editpost /></RequireAuth>}/>
            <Route path="service/:id/edit" element={<RequireAuth><Editservice /></RequireAuth>}/>
            <Route path="service/new" element={<RequireAuth><Createservice /></RequireAuth>}/>

            <Route path="user/:id/edit" element={<Edituser />}/>
            <Route path="user/:id" element={<RequireAuth><Userpage /></RequireAuth>}/>
            <Route path="regservice/new" element={<RequireAuth><Createrecord /></RequireAuth>}/>

            <Route path="login" element={<Loginpage />}/>
            <Route path="register" element={<Registerpage />}/>
            <Route path="admin" element={
            <RequireAuth>
              <Adminpage />
            </RequireAuth>
            }/>


            <Route path="*" element={<Notfoundpage />}/>

          </Route>
        </Routes>
      </AuthProvider>

  );
}

export default App;
