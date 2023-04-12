import { createContext, useState, useEffect} from "react";
import axios from "axios";


// контекст
export const AuthContext = createContext(null);

// hoc для обеспечения информацией зарегистрирован пользователь или нет
export const AuthProvider = ({children}) => {

    const url = `http://localhost:8000/`
    // Employees

    const [employeeData, setEmployee] = useState([]);
    useEffect(() => {
        function getEmployee () {
            axios.get(`http://localhost:8000/team`)
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
    
    // Instagram posts

    const [mediaData, setMediaData] = useState([]);
    useEffect(() => {
        function getService () {
            axios.get('http://localhost:8000/news')
            .then(function(response) {
                console.log(response.data);
                setMediaData(response.data);
            })
            .catch(function(error) {
                console.log(error)
            });
            
        }
        getService();
    }, []);


    const value = {employeeData, categoryData, serviceData, mediaData}


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
