import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    max-width: 530px;
    width: 100%;
    margin-top: 300px;
`;

export default function SignupSuccess() {
    return(
        <Container className="flex flex-col items-center">
            <div className="text-26px text-default-color font-montserrat font-bold text-center">
                Well done! <br />
                You’ve created an account <br />
                on Favvle!
            </div>

            <button className="btn btn-red mt-16">Continue</button>
        </Container>
    );
}