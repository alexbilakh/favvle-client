import React from 'react';
import PropTypes from 'prop-types';

import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useHistory } from "react-router-dom";

import GoogleLogo from '../../assets/images/google-logo.png';
import FacebookLogo from '../../assets/images/facebook-logo.png';

import { useDispatch } from 'react-redux';
import {
    signupGoogle,
    // signupFacebook
} from '../../store/authSlice';

function SignupSocial(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const googleSuccess = (response) => {
        dispatch(signupGoogle({
            email: response.profileObj.email,
            id: response.profileObj.googleId
        }))
            .then(function (result) {
                let success = result.payload.success
                if (success) {
                    props.setSignupFailed(false);
                    history.replace('/signup/success');
                } else {
                    props.setSignupFailed(true);
                }
            });
    }

    const facebookSuccess = (response) => {
        // dispatch(signupFacebook({
        //     email: response.profileObj.email,
        //     id: response.profileObj.googleId
        // }))
        //     .then(function (result) {
        //         let success = result.payload.success
        //         if (success) {
        //             props.setSignupFailed(false);
        //             history.replace('/signup/success');
        //         } else {
        //             props.setSignupFailed(true);
        //         }
        //     });
    }
    return (
        <React.Fragment>
            <GoogleLogin
                clientId="778955323517-aopjr1riifiej8dfu5mndpiu55pvnpnb.apps.googleusercontent.com"
                render={renderProps => (
                    <button
                        className="bg-white rounded-full flex justify-start items-center font-helvetica text-15px text-gray-700 w-60 h-7.5 px-8 mt-8"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        <img src={GoogleLogo} alt="Google Logo" className="w-4.5 h-4.5 mr-5" />
                        Sign up with Google
                    </button>
                )}
                buttonText="Login"
                onSuccess={googleSuccess}
                onFailure={(err) => { }}
                cookiePolicy={'single_host_origin'}
            />

            <FacebookLogin
                appId="199227962186913"
                autoLoad={false}
                callback={facebookSuccess}
                render={renderProps => (
                    <button
                        className="bg-white rounded-full flex justify-start items-center font-helvetica text-15px text-gray-700 w-60 h-7.5 px-8 mt-5 whitespace-nowrap"
                        onClick={renderProps.onClick}
                    >
                        <img src={FacebookLogo} alt="Facebook Logo" className="w-4.5 h-4.5 mr-5" />
                        Sign up with Facebook
                    </button>
                )}
            />
        </React.Fragment>
    );
}

SignupSocial.propTypes = {
    setSignupFailed: PropTypes.func
}

export default SignupSocial;