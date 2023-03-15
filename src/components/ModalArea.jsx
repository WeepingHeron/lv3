import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Layout from "./Layout";

const ModalArea = () => {
    const [modalAOpen, setModalAOpen] = useState(false)
    const [modalBOpen, setModalBOpen] = useState(false)

    const closeModalA = () => setModalAOpen(false)
    const closeModalB = () => setModalBOpen(false)

    return (
        <>
            <h1>Modal</h1>
            <Layout gap={10}>
                <StSmallButton onClick={()=>setModalAOpen(true)}>open modal</StSmallButton>
                    {modalAOpen && 
                    <Modal closeHandler={closeModalA} closeLabel="닫기">
                        닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
                        <StFakeButton>확인</StFakeButton>
                    </Modal>}
                    

                <StLargeButton onClick={()=>setModalBOpen(true)}>open modal</StLargeButton>
                    {modalBOpen && 
                    <Modal closeHandler={closeModalB}>
                            닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.
                    </Modal>}
                    
            </Layout>
        </>
    );
};

export default ModalArea

const StSmallButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
    margin: 5px;
`;

const StLargeButton = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(214, 48, 49);
    height: 50px;
    width: 200px;
    border: 3px solid rgb(250, 177, 160);
    background-color: #fff;
    font-weight: 600;
    margin: 5px;
`;

const StFakeButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    height: 40px;
    width: 100px;
    background-color: rgb(85, 239, 196);
    margin: 5px;
    bottom: 12px;
    right: 12px;
    position: absolute;
`;