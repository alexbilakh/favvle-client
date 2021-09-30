import React from 'react';
import styled from "styled-components";

import {
    Route,
    Switch
} from 'react-router-dom';

import DescriptionContainer from './SignupDescriptionContainer';
import SignupForm from './SignupForm';
import SignupSuccess from './SignupSuccess';

const AuthContainer = styled.div`
    background: linear-gradient(167.69deg, #155A5A 8.4%, #157E75 43.21%, #5BC6B3 72.33%, #418F85 95.4%, #157E75 114.41%);
`;

const LeftContainer = styled.div`
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.676956) 55.94%, rgba(255, 255, 255, 0.377568) 82.37%, rgba(255, 255, 255, 0.0001) 100%), linear-gradient(180deg, #155254 0%, #95D1CB 100%);
    width: 550px;
`;

export default function Signup() {
    return (
        <AuthContainer className="w-full h-full md:flex">
            <LeftContainer className="flex-1 md:rounded-r-3.5xl py-7 flex justify-center lg:justify-end">
                {/* Start Routes for signup */}
                <Switch>
                    <Route path="/signup" exact component={SignupForm} />
                    <Route path="/signup/success" exact component={SignupSuccess} />
                </Switch>
                {/* End Routes for signup */}
            </LeftContainer>
        
            <div className="flex-1 py-7 flex">
                <DescriptionContainer />
            </div>
        </AuthContainer>
    );
}