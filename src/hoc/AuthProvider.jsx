import { createContext, useState} from "react";
import { useNavigate } from 'react-router-dom';

// контекст
export const AuthContext = createContext(null);

// hoc для обеспечения информацией зарегистрирован пользователь или нет
export const AuthProvider = ({children}) => {

    const [user, setUsers] = useState({});
    const navigate = useNavigate();

    const signin = (newUser, cb) => {
        setUsers(newUser);
        cb();
    }

    const signout = (cb) => {
        setUsers({});
        navigate('/', {replace: true});
        cb();

    }

    const value = {user, signin, signout}


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
