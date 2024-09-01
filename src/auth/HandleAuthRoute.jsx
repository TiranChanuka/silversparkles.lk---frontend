/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from "../Pages/Login/Login"
import Cookies from 'js-cookie';


const HandleAuthRoute = ({ children }) => {
    const [isLoginFormVisible, setLoginFormVisible] = useState(false);
    // const loggedToken = localStorage.getItem('token') || null;
    let isAuthenticated =  null;
    // eslint-disable-next-line no-unused-vars

    // Api host domain 

    // get token from the Cookies 

    if (Cookies.get('token')) {
        const loggedToken = Cookies.get('token');
        isAuthenticated = loggedToken !== null;
        
    }else {
        isAuthenticated = null;
    }

    const location = useLocation();

    const handleCloseLoginForm = () => {
        setLoginFormVisible(false);
    };

    if (!isAuthenticated) {
        if (!isLoginFormVisible) {
            setLoginFormVisible(true);
        }
        return (
            <>
                {isLoginFormVisible && (
                    <LoginForm closeLoginForm={handleCloseLoginForm} />
                )}
            </>
        );
    }

    return children;
};

export default HandleAuthRoute;
