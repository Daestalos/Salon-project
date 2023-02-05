import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const RequireAuth = ({children}) => {
    // получаем объект локации
    const location = useLocation();

    const {user} = useAuth();
    const loc = location.pathname;
    if (!Object.keys(user).length) {
        return <Navigate to='/login' state={{from: location}} />
    }
    if ((loc === '/admin' || loc === '/team/new' || loc === '/team/:id/edit' || loc === '/posts/:id/edit' || loc === '/posts/new' || loc === '/service/:id/edit' || loc === '/service/new') && user.isadmin !== 1) {
        return <Navigate to='/login' state={{from: location}} />
    } else {
        <Navigate to='/admin' state={{from: location}} />
    }

    return children;
}

export {RequireAuth}