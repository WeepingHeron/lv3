import React from "react";
import styled from "styled-components";
import {AiFillBell} from 'react-icons/ai'

const App = () => {
  return (
    <>
      <StButtonGroup>
        <h1>Button</h1>
        <br />
        <StButton1
          onClick={() => alert('버튼을 만들어보세요')}>
          Large Primary Button
        </StButton1>
        <StButton2>Medium</StButton2>
        <StButton3>Small</StButton3>
        <br />
        <StButton4
          onClick={() => prompt('어렵나요?')}>
          Large Negative Button <AiFillBell />
        </StButton4>
        <StButton5
        background-color="rgb(250, 177, 160)"
        color='rgb(214, 48,49)'>
          Medium
          </StButton5>
        <StButton6
        background-color="rgb(250, 177, 160)"
        color='rgb(214, 48,49)'>
          Small
          </StButton6>
      </StButtonGroup>
      <StInputGroup>
        <h1>Input</h1>
        이름<StInput /> 가격<StInput />
        <StButton3 >저장</StButton3>
      </StInputGroup>
      <StModalGroup>
        <h1>Modal</h1>
        <br />
        <StButton3>open modal</StButton3>
        <StButton4>open modal</StButton4>
      </StModalGroup>
      <StSelectGroup>
        <h1>Select</h1>
        <br />
        <StDropdown /> <StDropdown />
      </StSelectGroup>
    </>
  );
};

export default App;

// //  <버튼>
// //  하나(알림) 둘 셋
// //  하나(알림+input) 둘 셋
// //  <인풋>
// //  이름 하나 갸격 둘 저장(name, price 보여주기)
// //  <모달>
// //  하나(확인 누르면 console에 on! 출력) 둘(외부 영역 닫기)
// //  <셀렉트>(테두리)
// //  드롭다운하나 둘(박스 안에서 잘림)
// //  (둘 다 리액트 selected)

const StInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

const StInput = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`

const StButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`

const StModalGroup = styled.div`
  
`

const StSelectGroup = styled.div`
  
`

const StButton1 = styled.button`
  cursor: pointer;
  border-radius: 8px;
  height: 50px;
  width: 200px;
  font-weight: 600;
  border: 3px solid rgb(85, 239, 196);
  background-color: #fff;
`

const StButton2 = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  height: 45px;
  width: 130px;
`

const StButton3 = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
`

const StButton4 = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: rgb(214, 48, 49);
  height: 50px;
  width: 200px;
  border: 3px solid rgb(250, 177, 160);
  background-color: #fff;
  font-weight: 600;
`

const StButton5 = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(250, 177, 160);
  color: rgb(214, 48,49);
  height: 45px;
  width: 130px;
`

const StButton6 = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(250, 177, 160);
  color: rgb(214, 48, 49);
  height: 40px;
  width: 100px;
`

const StDropdown = styled.div`
  
`