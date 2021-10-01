import React, { useState } from 'react';
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import SignupSocial from './SignupSocial';

import { useDispatch } from 'react-redux';
import { signupEmail } from '../../store/authSlice';

const Input = styled.input`
    box-shadow: 0px 4px 10px rgba(21, 87, 88, 0.5);
    border-radius: 5px;
`;

const SignupConfirmPopup = styled.div`
    position: absolute;
    bottom: 0px;
    width: 514px;
    margin-left: -257px;
    left: 50%;
    background: #EAF8F8;
    box-shadow: 0px 3px 10px 1px rgba(21, 106, 108, 0.5);
    border-radius: 23px;
    padding: 23px;
    text-align: center;
`;

const SignupConfirmPopupCloseBtn = styled.div`
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 2px 2px 6px rgba(21, 87, 88, 0.5);
    width: 22px;
    height: 22px;
    border-radius: 100%;
    position: absolute;
    right: 20px;
    top: 16px;
    color: #154A4E;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false); // Flag variable to show password or not
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Flag variable to show confirm password or not
    const [signupFailed, setSignupFailed] = useState(false); // Flag variable to set login failed or not
    const [showConfirmPopup, setShowConfirmPopup] = useState(false); // Flag variable to show confirm popup or not

    const dispatch = useDispatch();
    const history = useHistory();

    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
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

            // check if confirm password is correct
            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Not same as password';
            }

            return errors;
        },
        onSubmit: () => {
            setShowConfirmPopup(true);
        }
    });

    const onSignup = () => {
        dispatch(signupEmail({
            email: formik.values.email,
            password: formik.values.password
        }))
            .then(function (result) {
                let success = result.payload.success
                if (success) {
                    history.replace('/signup/success');
                } else {
                    setSignupFailed(true);
                }
            })
            .finally(() => formik.setSubmitting(false) );
    }

    return (
        <form className="lg:ml-28 flex flex-col items-center mt-32 xl:mt-40 w-full" onSubmit={formik.handleSubmit}>
            <h1 className="text-26px font-montserrat text-default-color font-bold opacity-70">Sign up</h1>

            <div className="text-22px font-helvetica text-default-color opacity-55 mt-4">Welcome</div>

            {/* Start Social sign up buttons */}
            <SignupSocial setSignupFailed={setSignupFailed} />
            {/* End Social sign up buttons */}

            <div className="text-15px font-helvetica opacity-55 text-default-color my-5">or</div>

            {/* Start normal signup inputs */}
            <div className="relative flex flex-col items-center">
                <Input type="email" placeholder="Email"
                    className={
                        `w-75 px-3 py-1 text-16px text-gray-500 focus:outline-none border 
                        ${((formik.touched.email && formik.errors.email) || signupFailed) ? 'border-red-500' : ''}`
                    }
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email} />

                <div className="relative w-full mt-6">
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className={
                            `w-75 pl-3 pr-8 py-1 text-16px text-gray-500 focus:outline-none border 
                            ${((formik.touched.password && formik.errors.password) || signupFailed) ? 'border-red-500' : ''}`
                        }
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

                <div className="relative w-full mt-6">
                    <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Password"
                        className={
                            `w-75 pl-3 pr-8 py-1 text-16px text-gray-500 focus:outline-none border 
                            ${((formik.touched.confirmPassword && formik.errors.confirmPassword) || signupFailed) ? 'border-red-500' : ''}`
                        }
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword} />

                    <FontAwesomeIcon
                        icon={faEye}
                        className={`absolute right-2 top-2 ${showConfirmPassword ? 'text-red-500' : 'text-gray-400'}`}
                        onMouseDown={() => setShowConfirmPassword(true)}
                        onMouseUp={() => setShowConfirmPassword(false)}
                        onMouseOut={() => setShowConfirmPassword(false)} />
                </div>

                <button type="submit" className="btn btn-red mt-12"
                    disabled={formik.isSubmitting}>
                    Sign up
                </button>

                <button type="button" className="btn btn-default mt-3"
                    disabled={formik.isSubmitting}>
                    Not now
                </button>

                <SignupConfirmPopup className={`${showConfirmPopup ? '' : 'invisible'}`}>
                    <SignupConfirmPopupCloseBtn>
                        <FontAwesomeIcon icon={faTimes} />
                    </SignupConfirmPopupCloseBtn>

                    <h1 className="font-bold font-montserrat text-xl text-default-color opacity-70 mt-3">Are you sure?</h1>

                    <div className="font-bold font-helvetica text-16px opacity-70 text-default-color mt-8">
                        You’ve reached the maximum of 5 lists for Free. <br />
                        Upgrade your Plan to go beyond the limits!
                    </div>

                    <div className="flex justify-center mt-12">
                        <button type="button"
                            className="btn btn-red mr-5"
                            onClick={onSignup}
                            disabled={formik.isSubmitting}>
                            Sign up
                        </button>

                        <button type="button"
                            className="btn btn-default"
                            onClick={setShowConfirmPopup(false)}>
                            Yes, Skip
                        </button>
                    </div>
                </SignupConfirmPopup>
            </div>
            {/* End normal signup inputs */}

            <Link to="/login" className="text-default-color font-helvetica text-16px opacity-55 underline mt-7">
                Already have an account?
            </Link>

            <div className={`text-red-500 text-16px whitespace-nowrap mt-4 ${signupFailed ? '' : 'invisible'}`}>
                Error, an account with this email already exists!
            </div>
        </form>
    );
}