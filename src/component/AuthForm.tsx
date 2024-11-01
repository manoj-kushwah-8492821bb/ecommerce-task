import { useState } from "react";
import { useManageAuth } from "../api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

interface AuthFormProps {
    isLogin: boolean;
}

interface FormValueInter {
    email: string;
    password: string;

}

const AuthForm = ({ isLogin }: AuthFormProps) => {
    const navigate = useNavigate()
    const [formValue, setFormValue] = useState<FormValueInter>({ email: "", password: "" })

    const handleInputeChange = (e: any) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    }

    const { mutate, isPending } = useManageAuth({ isLogin, formValue, callback: () => navigate('/') })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        mutate()
    };


    return (
        <div className="flex w-full min-h-screen mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <div
                className="hidden bg-cover lg:block lg:w-2/3"
                style={{
                    backgroundImage: `url(${isLogin ? "https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} )`,
                }}
            ></div>

            <form onSubmit={handleSubmit} className="w-full m-auto px-6 py-8 md:px-8 lg:w-1/3">
                <div className="flex justify-center mx-auto">
                    <h1 className="text-2xl font-bold text-gray-900">
                        ShopEase
                    </h1>
                </div>

                <p className="mt-3 text-xl text-center text-gray-600">{isLogin ? "Welcome back!" : "Become a member of ShopEase"}</p>

                <a
                    href="#"
                    className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg"
                >
                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>
                    <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                </a>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b lg:w-1/4"></span>
                    <a href="#" className="text-xs text-center text-gray-500 uppercase hover:underline">or {isLogin ? "login" : "signup"} with email</a>
                    <span className="w-1/5 border-b lg:w-1/4"></span>
                </div>

                <div className="mt-4">
                    <label htmlFor="LoggingEmailAddress" className="block mb-2 text-sm font-medium text-gray-600">
                        Email Address
                    </label>
                    <input
                        required
                        name="email"
                        value={formValue?.email}
                        onChange={handleInputeChange}
                        id="LoggingEmailAddress"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="email"
                    />
                </div>

                <div className="mt-4">
                    <div className="flex justify-between">
                        <label htmlFor="loggingPassword" className="block mb-2 text-sm font-medium text-gray-600">
                            Password
                        </label>
                    </div>
                    <input
                        required
                        name="password"
                        value={formValue?.password}
                        onChange={handleInputeChange}
                        id="loggingPassword"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="password"
                    />
                </div>

                <div className="mt-6">
                    <button disabled={isPending} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">

                        {isPending ? <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white-600" />
                        </div> :
                            `Sign ${isLogin ? "In" : "Up"}`}
                    </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b md:w-1/4"></span>
                    <Link to={isLogin ? "/auth/register" : "/auth/login"} className="text-xs text-gray-500 uppercase hover:underline">or sign {isLogin ? "up" : "in"}</Link>
                    <span className="w-1/5 border-b md:w-1/4"></span>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;
