import React from 'react';
import styled from "styled-components";

import Logo from '../../assets/images/logo.png';
import DescriptionImage from '../../assets/images/signup-description-image.png';


const DescriptionContainer = styled.div`
    max-width: 530px;
    width: 100%;
`;

const DescriptionList = styled.ul`
    line-height: 37.3px;
`;

const DescriptionImg = styled.img`
    max-width: 540px;
    mix-blend-mode: normal;
    border-radius: 19.4245px;
`;

export default function SignupDescriptionContainer() {
    return(
        <DescriptionContainer>
            <img src={Logo} alt="logo" />

            <div className="pl-10">
                <div className="font-montserrat text-26px font-bold text-white mt-8 xl:mt-14 ml-6">
                    Create, share, rank, compare
                </div>

                <DescriptionList className="font-helvetica text-20px text-white mt-8 whitespace-nowrap list-inside list-disc">
                    <li>Create beautiful rankings, with up to 25 items in each ranking</li>
                    <li>Use simple Drag & Drop functionality to rank your lists</li>
                    <li>Easily and quickly share your rankings on social media</li>
                    <li>Create and share a unique GIF-version of your ranking</li>
                    <li>Personalize your ranking with Favvle’s design tools</li>
                    <li>Save up to 10 unique rankings to your personal library</li>
                </DescriptionList>

                <DescriptionImg src={DescriptionImage} alt="Description Image" className="mt-9 w-full" />
            </div>
        </DescriptionContainer>
    );
}