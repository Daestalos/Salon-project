import { createContext, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


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


    // headers for API
    const headers = {
        headers: {
        'authorization': '8tnetbafey7fsjchspfb',
        'Accept': "application/vnd.api.v2+json"
        }
    }


    // Employees

    const [employeeData, setEmployee] = useState([]);
    useEffect(() => {
         getEmployee();
    }, []);

    function getEmployee () {
        axios.get('https://api.yclients.com/api/v1/staff/325582', headers)
        .then(function(response) {
            setEmployee(response.data.data);
        })
        .catch(function(error) {
            console.log(error)
        });
        
    }

    
    // Category

    const [categoryData, setCategory] = useState([]);
    useEffect(() => {
        getCategory();
    }, []);

    function getCategory () {
        axios.get('https://api.yclients.com/api/v1/service_categories/325582', headers)
        .then(function(response) {
            console.log(response.data.data);
            setCategory(response.data.data);
        })
        .catch(function(error) {
            console.log(error)
        });
        
    }


        // Services

        const [serviceData, setService] = useState([]);
        useEffect(() => {
            getService();
        }, []);
    
        function getService () {
            axios.get('https://api.yclients.com/api/v1/services/325582', headers)
            .then(function(response) {
                console.log(response.data.data);
                setService(response.data.data);
            })
            .catch(function(error) {
                console.log(error)
            });
            
        }




    const value = {user, signin, signout, employeeData, categoryData, serviceData}


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
