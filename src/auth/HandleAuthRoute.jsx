/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from "../Pages/Login/Login"


const HandleAuthRoute = ({ children }) => {
    const [isLoginFormVisible, setLoginFormVisible] = useState(false);
    // const loggedToken = localStorage.getItem('token') || null;
    // const isAuthenticated = loggedToken !== null;
    // eslint-disable-next-line no-unused-vars

    // Api host domain 

    // get token from the Cookies 
    const loggedToken = Cookies.get('token');

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
