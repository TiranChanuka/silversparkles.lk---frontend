import { useState } from "react";
import { Form, Input } from "antd";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from 'react-router-dom';
import { MdClose } from "react-icons/md";



// import cookies library 
import Cookies from 'js-cookie';
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const api = import.meta.env.VITE_API_URL;

const LoginForm = ({ closeLoginForm, openRegisterForm, onLoginSuccess, openForgetPasswordForm }) => {
    const [form] = Form.useForm();
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const location = useLocation();
    const [formVisible, setFormVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);


    console.log("Domain :", api)

    const onFinish = (values) => {
        setIsLoading(true);

        axios.post(`${api}/api/user/login`, {
            email: values.email,
            password: values.password
        }).then((response) => {
            console.log(response.data.status)
            setIsLoading(false);
            if (response.data.status === "success") {
                toast.success("Login Success", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                Cookies.set('token', response.data.accessToken,{ expires : 1/24});
                Cookies.set('userId', response.data.userId,{ expires : 1/24});
                Cookies.set('username',values.email,{ expires : 1/24});
                
                const from = location.state?.from?.pathname;
                setFormVisible(false);
                closeLoginForm();
                onLoginSuccess(values.email);
                navigate(from, { replace: true });
            }


        }).catch((error) => {
            console.log(error)
            setIsLoading(false);
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleRegisterClick = () => {
        openRegisterForm();
    };

    const handleForgetPasswordClick = () => {
        openForgetPasswordForm();
    };

    if (!formVisible) return null;

    return (
        <>
            <ToastContainer />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 flex items-center justify-center z-50"
                transition={{ ease: "easeInOut", duration: 0.5 }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-75" onClick={closeLoginForm}></div>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="relative bg-white p-6 rounded-lg z-10 w-[90%] md:w-[50%] lg:w-[40%]"
                >
                    <button
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                        onClick={closeLoginForm}
                    >
                        <MdClose size={24} />
                    </button>
                    <h2 className="text-3xl font-bold mb-4">Login</h2>
                    <h3 className="mb-4 font-semibold">Not a Member? <button type="button" onClick={handleRegisterClick} className="text-[#0a6550] hover:underline">Register</button></h3>
                    <Form
                        layout="vertical"
                        form={form}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        className="space-y-4"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input
                                placeholder="Username"
                                className="p-3 border border-gray-400 rounded-md w-full"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                { required: true, message: 'Please input your password!' },
                                { min: 6, message: 'Password must be at least 6 characters long!' },
                                { max: 12, message: 'Password must be at most 12 characters long!' },
                                { pattern: /[!@#$%^&*(),.?":{}|<>]/, message: 'Password must have at least one special character' },
                                { pattern: /[A-Z]/, message: 'Password must have at least one capital letter' },
                                { pattern: /[0-9]/, message: 'Password must have at least one number' },
                            ]}
                        >
                            <Input.Password
                                placeholder="Password"
                                className="p-3 border border-gray-400 rounded-md w-full"
                            />
                        </Form.Item>

                        <Form.Item>
                            <button className="w-full textButton p-2">
                                {isLoading ? "Login in...." : "Sign In"}
                            </button>
                        </Form.Item>


                    </Form>
                    <div className="flex justify-end text-sm">
                        <button type="button" onClick={handleForgetPasswordClick} className="text-[#0a6550] hover:underline">
                            Forgot Password?
                        </button>
                    </div>

                    <div className="text-center">
                        By logging in you agree to Privacy Policy and Terms of Use
                        Copyright © {currentYear} Silver Sparkles.
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

LoginForm.propTypes = {
    closeLoginForm: PropTypes.func.isRequired,
    openRegisterForm: PropTypes.func.isRequired,
    openForgetPasswordForm: PropTypes.func.isRequired,
    onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginForm;
