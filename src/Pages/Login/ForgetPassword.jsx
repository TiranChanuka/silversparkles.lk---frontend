import { useState } from 'react';
import { Form, Input } from "antd";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const ForgetPasswordForm = () => {
    const [formVisible, setFormVisible] = useState(true);
    const [form] = Form.useForm();

    const closeForgetPasswordForm = () => setFormVisible(false);

    if (!formVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50"
            transition={{ ease: "easeInOut", duration: 0.5 }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-75" onClick={closeForgetPasswordForm}></div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="relative bg-white p-6 rounded-lg z-10 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-h-[30rem] md:max-h-[35rem] overflow-y-auto"
            >
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                    onClick={closeForgetPasswordForm}
                >
                    <MdClose size={24} />
                </button>
                <h2 className="text-3xl font-bold mb-4">Forget Your Password ?</h2>
                <Form className="space-y-2" layout="vertical" form={form}>

                    <Form.Item
                        label="Email"
                        name="email"
                        className="mb-4 block text-gray-700 text-sm"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'The input is not valid E-mail!' },
                        ]}
                        hasFeedback
                    >
                        <Input
                            type="email"
                            placeholder="Email*"
                            className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                        />
                    </Form.Item>

                    <Form.Item>
                        <button className="w-full textButton p-2">
                            Send Reset Link
                        </button>
                    </Form.Item>
                </Form>
            </motion.div>
        </motion.div>
    );
};

export default ForgetPasswordForm;
