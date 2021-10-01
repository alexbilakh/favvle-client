import React, { useState } from 'react';
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import DescriptionImage from '../../assets/images/login-description-image.png';
import LoginSocial from './LoginSocial';

import { useDispatch } from 'react-redux';
import { signinEmail } from '../../store/authSlice';

const AuthContainer = styled.div`
    background: linear-gradient(167.69deg, #155A5A 8.4%, #157E75 43.21%, #5BC6B3 72.33%, #418F85 95.4%, #157E75 114.41%);
`;

const FormContainer = styled.form`
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.676956) 55.94%, rgba(255, 255, 255, 0.377568) 82.37%, rgba(255, 255, 255, 0.0001) 100%), linear-gradient(180deg, #155254 0%, #95D1CB 100%);
`;

const DescriptionContainer = styled.div`
    max-width: 530px;
    width: 100%;
`;

const DescriptionImg = styled.img`
    max-width: 540px;
    mix-blend-mode: normal;
    border-radius: 19.4245px;
`;

const Input = styled.input`
    box-shadow: 0px 4px 10px rgba(21, 87, 88, 0.5);
    border-radius: 5px;
`;

export default function Login() {
    const [showPassword, setShowPassword] = useState(false); // Flag variable to show password or not
    const [loginFailed, setLoginFailed] = useState(false); // Flag variable to set login failed or not
    
    const dispatch = useDispatch();

    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: values => {
            const errors = {};
            // Check if email is correct
            if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid Email';
            }

            // check if password inputed
            if (!values.password) {
                errors.password = 'Required';
            }

            return errors;
        },
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true);
            setLoginFailed(false);

            dispatch(signinEmail(values))
                .then(function (result) {
                    let success = result.payload.success
                    if (success) {
                        alert('Logged in successfully.');
                    } else {
                        setLoginFailed(true);
                    }
                })
                .finally(() => setSubmitting(false));
        }
    });

    return (
        <AuthContainer className="w-full h-full md:flex">
            <div className="flex-1 p-7 flex md:justify-end">
                <DescriptionContainer>
                    <img src={Logo} alt="logo" />

                    <div className="pl-10">
                        <div className="font-montserrat text-26px font-bold text-white mt-16 xl:mt-24">Create, share, rank, compare</div>

                        <div className="font-helvetica text-20px text-white mt-5 max-w-110">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>

                        <DescriptionImg src={DescriptionImage} alt="Description Image" className="mt-10 w-full" />
                    </div>
                </DescriptionContainer>
            </div>

            <FormContainer className="flex-1 md:rounded-l-3.5xl p-7 flex justify-center lg:justify-start" onSubmit={formik.handleSubmit}>
                <div className="w-75 lg:ml-28 flex flex-col items-center mt-32 xl:mt-40">
                    <h1 className="text-26px font-montserrat text-default-color font-bold opacity-70">Login</h1>

                    <div className="text-22px font-helvetica text-default-color opacity-55 mt-4">Welcome back</div>

                    {/* Start Social Login Buttons */}
                    <LoginSocial setLoginFailed={setLoginFailed} />
                    {/* End Social Login Buttons */}

                    <div className="text-15px font-helvetica opacity-55 text-default-color my-5">or</div>

                    {/* Start Normal Login inputs */}
                    <Input type="email" placeholder="Email"
                        className={`w-full px-3 py-1 text-16px text-gray-500 focus:outline-none border ${((formik.touched.email && formik.errors.email) || loginFailed) ? 'border-red-500' : ''}`}
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} />

                    <div className="relative w-full mt-6">
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className={`w-full pl-3 pr-8 py-1 text-16px text-gray-500 focus:outline-none border ${((formik.touched.password && formik.errors.password) || loginFailed) ? 'border-red-500' : ''}`}
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password} />

                        <FontAwesomeIcon
                            icon={faEye}
                            className={`absolute right-2 top-2 ${showPassword ? 'text-red-500' : 'text-gray-400'}`}
                            onMouseDown={() => setShowPassword(true)}
                            onMouseUp={() => setShowPassword(false)}
                            onMouseOut={() => setShowPassword(false)} />
                    </div>

                    <div className="flex justify-end w-full">
                        <a href="/" className="text-default-color font-helvetica text-16px opacity-55 underline mt-4">Forgot password?</a>
                    </div>

                    <div className={`text-red-500 text-16px whitespace-nowrap mt-6 ${loginFailed ? '' : 'invisible'}`}>
                        Error, we do not recognize the email or password!
                    </div>

                    <button type="submit"
                        className="btn btn-red mt-10"
                        disabled={formik.isSubmitting}>
                        {formik.isSubmitting &&
                            <FontAwesomeIcon icon={faSpinner} spin />
                        }
                        {!formik.isSubmitting && 'Login'}
                    </button>
                    {/* End Normal Login inputs */}

                    <Link to="/signup" className="text-default-color font-helvetica text-16px opacity-55 underline mt-7">
                        Don’t have an account yet?
                    </Link>
                </div>
            </FormContainer>
        </AuthContainer>
    );
}