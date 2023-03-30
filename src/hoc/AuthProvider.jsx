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
        function getEmployee () {
            axios.get('http://localhost:8000/team')
            .then(function(response) {
                setEmployee(response.data);
            })
            .catch(function(error) {
                console.log(error)
            });
        }
        getEmployee();
    }, []);



    
    // Category

    const [categoryData, setCategory] = useState([]);
    useEffect(() => {
        function getCategory () {
            axios.get('http://localhost:8000/category')
            .then(function(response) {
                setCategory(response.data);
            })
            .catch(function(error) {
                console.log(error)
            });
        }
        getCategory();
    }, []);

    //old request
    // const [categoryData, setCategory] = useState([]);
    // useEffect(() => {
    //     function getCategory () {
    //         axios.get('https://api.yclients.com/api/v1/service_categories/325582', headers)
    //         .then(function(response) {
    //             setCategory(response.data.data);
    //         })
    //         .catch(function(error) {
    //             console.log(error)
    //         });
    //     }
    //     getCategory();
    // }, []);



    // Services

    const [serviceData, setService] = useState([]);
    useEffect(() => {
        function getService () {
            axios.get('http://localhost:8000/service')
            .then(function(response) {
                setService(response.data);
            })
            .catch(function(error) {
                console.log(error)
            });
            
        }
        getService();
    }, []);
    





    const value = {user, signin, signout, employeeData, categoryData, serviceData}


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
