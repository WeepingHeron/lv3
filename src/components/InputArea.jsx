import React, { useState } from "react";
import styled from "styled-components";
import Layout from "./Layout";

const InputArea = () => {

    const [content, setContent] = useState({
        title: '',
        price: 0
    });

    // {raw, format}
    // formatting 된 애 따로 관리하고
    // formatting 안 된애 따로 관리하고

    // 123456=> formating => 123,456

    // 순회를 돌아서 숫자 3개마다 찍어준다. 
    // 3번째 경우마다 반점을 찍어준다. -> 정규표현식으로 3번째 경우를 찾아줄 수 있습니다. 
    // 정규표현식 -> 패턴을 찾아줄 수 있습니다. 
    // email체크, 비밀번호 패턴 체크, 영소문자 16자이하 뭐 이런 패턴 찾을 때 많이 씁니다. 
    // 특정 글자 하이라이팅 해야 할 때도 쓰구요

    const onChangeHandler = (event) => {        
        const { name, value } = event.target;

        const foramtValue = (v)=> {
            // 세번째마다 찾아주는 정규식표현식으로 검색했습니다 => /\B(?=(\d{3})+(?!\d))/g
            return v.replaceAll(',', '').replaceAll(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        setContent({...content, [name]: name === 'price' ? foramtValue(value) : value}); 
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        
        // 메서드 한번 알아봐주세요 ~! Object.values, Object.keys, Object.entries
        Object.values(content).every((v) => v !== "")
      ?  alert(`{ name: ${content.title}, price: ${content.price} }`)
      : alert("이름과 가격 모두 입력해주세요.")
    };

    // string으로 보고 3자리 수마다 콤마 추가

    return (
        <>
            <h1>Input</h1>
            <StInputGroup onSubmit={onSubmitHandler}>
                <Layout gap={30}>
                    <div>                        
                    이름<StInput
                        type='text'
                        name='title'
                        value={content.title}
                        onChange={onChangeHandler}
                    /></div>
                    <div>
                    가격<StInput
                        type='text'
                        name='price'
                        value={content.price}
                        onChange={onChangeHandler}
                    /></div>
                    <StButton type="submit">저장</StButton>
                </Layout>
            </StInputGroup>
        </>
    );
};

export default InputArea

// div로 하면 submit 이벤트가 동작하지 않습니다. form태그를 사용해주세요 !
const StInputGroup = styled.form`
    display: flex;
    flex-direction: row;
    gap: 30px;
`;

const StInput = styled.input`
    border: 1px solid rgb(51, 51, 51);
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;
    &:focus-within {
        box-shadow: 0 0 0 1px #000;
    }
    margin-right: 40px;
`;

const StButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
`;