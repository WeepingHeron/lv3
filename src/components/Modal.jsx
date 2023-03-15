import React from "react";
import styled from "styled-components";

// const Modal = ({setModalOpen}) => {

//     // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
//     const closeModal = () => {
//         setModalOpen(false);
//     };    

//     // 모달 외부 클릭시 끄기 처리
//     // Modal 창을 useRef로 취득
//     const modalRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         // 이벤트 핸들러 함수
//         const handler = () => {
//             // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
//             if (modalRef.current && !modalRef.current.contains(event.target)) {
//                 setModalOpen(false);
//             }
//         };

//         // 이벤트 핸들러 등록
//         document.addEventListener('mousedown', handler);

//         return () => {
//             // 이벤트 핸들러 해제
//             document.removeEventListener('mousedown', handler);
//         };
//     });

//     return (
//         // 모달창을 useRef로 잡아준다.
//         <StContainer ref={modalRef}>
//             <StButton onClick={closeModal}>
//                 X
//             </StButton>
//             <p>모달창입니다</p>
//         </StContainer>
//     );
// }

const Modal = ({ closeHandler, children, closeLabel }) => {
    return (
    <>
        <Dimmed onClick={!closeLabel ? closeHandler : ()=>{}} />
        <StContainer className={'modal'}>
                <section>                    
                    <main>{children}</main>
                    <footer>
                        <StButton className="close" onClick={closeHandler}>
                        &times;
                        </StButton>
                        {closeLabel && 
                        <StButton2 className="close" onClick={closeHandler}>
                            {/* "모달 닫기" */}
                            {closeLabel}
                        </StButton2>}
                    </footer>
                </section>
        </StContainer>
        
        </>
        
    );
};

export default Modal

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  z-index: 1;
  opacity: 0.8;
`


const StContainer = styled.div`
    width: 500px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 12px;
    padding: 24px;
    z-index: 999;
`;

const StButton = styled.button`
    border: 1px solid #ddd;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    bottom: 12px;
    right: 12px;
    cursor: pointer;
    :hover {
        border: 1px solid #333;
    }
    position: absolute;
    top: 12px;
    right: 12px;
`;

const StButton2 = styled.button`
border: none;
cursor: pointer;
border-radius: 8px;
height: 40px;
width: 100px;
background-color: rgb(250, 177, 160);
margin: 5px;
color: rgb(214, 48,49);
bottom: 12px;
right: 117px;
position: absolute;
`;