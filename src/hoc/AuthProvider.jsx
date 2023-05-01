import { createContext, useState, useEffect} from "react";
import axios from "axios";


// контекст
export const AuthContext = createContext(null);

// hoc для обеспечения информацией всех страниц сайта
export const AuthProvider = ({children}) => {

    //const url = `http://localhost:8000`
    const url = `https://back.barstudio.by`


    // Email

    const [mail, setMail] = useState({});

    const sendMail = () => {
        if (mail.email && mail.tel && mail.text){
            axios.post(`${url}/email`, mail)
            .then(function(response){
                console.log(`respon`);
                console.log(response);
            }).catch(function(error) {
                console.log('err');
                console.log(error)
            });
        }
    }


    // Employees

    const [employeeData, setEmployee] = useState([]);
    useEffect(() => {
        function getEmployee () {
            axios.get(`${url}/team`)
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
            axios.get(`${url}/category`)
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
            axios.get(`${url}/service`)
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
            axios.get(`${url}/news`)
            .then(function(response) {
                setMediaData(response.data);
            })
            .catch(function(error) {
                console.log(error)
            });
            
        }
        getService();
    }, []);


    const value = {employeeData, categoryData, serviceData, mediaData, setMail, mail, sendMail}


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
