import { createSlice } from "@reduxjs/toolkit";

const modules = createSlice({
    name: 'TEST',
    reducers: {
        module1: (action) => {
            alert ('버튼을 만들어보세요')
        },

        module2: (action) => {
            alert ('여기에 입력창 넣기')
        },

        module3: (action) => {

        }
        }
    }
)

export default modules;
//