import React from "react";
import {AiFillBell} from 'react-icons/ai'
import styled from "styled-components";
import Layout from "./Layout";

const ButtonArea = () => {
    return (
        <Layout row={false} gap={10}>
            <h1>Button</h1>
            <Layout gap={10}>
            <StLargeButton
                onClick={() => alert('버튼을 만들어보세요')}
                border='3px solid rgb(85, 239, 196)'>
                Large Primary Button
            </StLargeButton>
            <StMediumButton
                backgroundColor='rgb(85, 239, 196)'
                >Medium
            </StMediumButton>
            <StSmallButton
                backgroundColor='rgb(85, 239, 196)'
                >Small
            </StSmallButton>
            </Layout>
            <Layout>
            <StLargeButton
                onClick={() => prompt('어렵나요?')}
                color='rgb(214, 48, 49)'
                border='3px solid rgb(250, 177, 160)'
                >
                Large Negative Button <AiFillBell />
            </StLargeButton>
            <StMediumButton
                backgroundColor='rgb(250, 177, 160)'
                color='rgb(214, 48,49)'
                >Medium
            </StMediumButton>
            <StSmallButton
                backgroundColor='rgb(250, 177, 160)'
                color='rgb(214, 48,49)'
                >Small
            </StSmallButton>
            </Layout>
        </Layout>
    )
}

export default ButtonArea;

const StLargeButton = styled.button`
    cursor: pointer;
    border-radius: 8px;
    height: 50px;
    width: 200px;
    font-weight: 600;
    background-color: #fff;
    border: ${({border}) => border};
    color: ${({color}) => color};
    margin: 5px;
`

const StMediumButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    height: 45px;
    width: 130px;
    background-color: ${({backgroundColor}) => backgroundColor};
    margin: 5px;
    color: ${({color}) => color};
`;

// const StMediumButton2 = styled.button`
//     border: none;
//     cursor: pointer;
//     border-radius: 8px;
//     height: 45px;
//     width: 130px;
//     background-color: ${({backgroundColor}) => backgroundColor};
//     margin: 5px;
//     color: ${({color}) => color};
// `;

const StSmallButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    height: 40px;
    width: 100px;
    background-color: ${({backgroundColor}) => backgroundColor};
    margin: 5px;
    color: ${({color}) => color};
`;

// const StButtonGroup = styled.div`
//     display: flex;
//     flex-direction: row;
//     gap: 30px;
// `