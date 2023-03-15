import React, { useState } from "react";
import styled from "styled-components";

const DUMMY_LIST = ['리액트', '자바', '스프링']

const SelectArea = () => {
    const [droppedDown, setDroppedDown] = useState(false);
    const [current, setCurrent] = useState(DUMMY_LIST[0])

    const onSetCurrent = (value) => () => {
        setDroppedDown(false)
        setCurrent(value)
    }

    const [droppedDown2, setDroppedDown2] = useState(false);
    const [current2, setCurrent2] = useState(DUMMY_LIST[0])

    const onSetCurrent2 = (value) => () => {
        setDroppedDown2(false)
        setCurrent2(value)
    }

    return (
        <StSelectGroup>
            <h1>Select</h1>
            {/* <button onClick={() => setDroppedDown(!droppedDown)}>
                {
                    droppedDown ? 'Close' : 'Open'
                }
            </button> */}
            <DropDownGroup>
                <DropDownWrap>
                    <div onClick={() => setDroppedDown(!droppedDown)}>{current}<div>▼</div></div>
                    {droppedDown && <ul>
                    {DUMMY_LIST.map((item) => <li onClick={onSetCurrent(item)}>{item}</li>)}
                    </ul>}
                </DropDownWrap>

                <DropDownWrap2>
                    <div onClick={() => setDroppedDown2(!droppedDown2)}>{current2}<div>▼</div></div>
                    {droppedDown2 && <ul>
                    {DUMMY_LIST.map((item) => <li onClick={onSetCurrent2(item)}>{item}</li>)}
                    </ul>}
                </DropDownWrap2>
            </DropDownGroup>




            {/* <Dropdown down={droppedDown}>                
                <ul>                    
                    <li>리액트</li>
                    <li>자바</li>
                    <li>스프링</li>
                    <li>리액트</li>
                </ul>
            </Dropdown>

            <button onClick={event => setDroppedDown(!droppedDown)}>
                {
                    droppedDown ? 'Close' : 'Open'
                }
            </button>
            <Dropdown down={droppedDown}>                
                <ul>                    
                    <li>리액트</li>
                    <li>자바</li>
                    <li>스프링</li>
                    <li>리액트</li>
                </ul>
            </Dropdown> */}
        </StSelectGroup>
    );
};

export default SelectArea

const DropDownWrap = styled.div`
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    ul {
        display: flex;
        flex-direction:column;
        justify-content: center;
        padding: 0;
    }
    li {
        font-size: 12px;
        display: flex;
        align-items: center;
        padding-left: 12px;
        height: 40px;

        :hover {
            background-color: #eee;
        }
        /* display: flex;
        justify-content:flex-start;
        align-items:center;
        padding-left: 8px;
        width: 100px;
        height: 30px;
        border: 1px solid black;
        text-decoration: none;
        cursor:pointer; */
    }
    div {
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 28px;
    }
`

const DropDownWrap2 = styled.div`
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    overflow: hidden;
    ul {
        display: flex;
        flex-direction:column;
        justify-content: center;
        padding: 0;
    }
    li {
        font-size: 12px;
        display: flex;
        align-items: center;
        padding-left: 12px;
        height: 40px;

        :hover {
            background-color: #eee;
        }
        /* display: flex;
        justify-content:flex-start;
        align-items:center;
        padding-left: 8px;
        width: 100px;
        height: 30px;
        border: 1px solid black;
        text-decoration: none;
        cursor:pointer; */
    }
    div {
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 28px;
    }
`



const StSelectGroup = styled.div`
  border: 3px solid #ddd;
  height: 200px;
  position: relative;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DropDownGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`