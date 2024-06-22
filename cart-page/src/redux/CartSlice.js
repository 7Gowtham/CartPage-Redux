import { createSlice } from "@reduxjs/toolkit";
import { findIndexById } from "../utils/Helper";
import { act } from "react";

export const cartSlice = createSlice({
    initialState: {
        cart: [
            {
                id: 1,
                title: "iPhone 9",
                description: "An apple mobile which is nothing like apple",
                price: 549,
                thumbnail: "https://i.pinimg.com/736x/84/ee/48/84ee48dbb18b783a991c2a22103b5649.jpg"
            },
            {
                id: 2,
                title: "iPhone X",
                description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip",
                price: 899,
                thumbnail: "https://th.bing.com/th?id=OIP.xHi_nB-IzpN1kNKYya0K8QHaHv&w=244&h=255&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
            },
            {
                id: 3,
                title: "Samsung Universe 9",
                description: "Samsung's new variant which goes beyond Galaxy to the Universe",
                price: 1249,
                thumbnail: "https://th.bing.com/th/id/OIP._pSIL7q_1_56Ro83yoFNVwHaFp?w=235&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
            },
            {
                id: 4,
                title: "OPPOF19",
                description: "OPPO F19 is officially announced on April 2021.",
                price: 280,
                thumbnail: "https://th.bing.com/th/id/OIP.C2C5AbU6Ls7yQguLe91HiwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=2&pid=1.7"
            },
            {
                id: 5,
                title: "Huawei P30",
                description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany.",
                price: 1249,
                thumbnail: "https://th.bing.com/th/id/OIP.dT4kQV_ybb5SvIO4ObC9DQHaHa?w=190&h=190&c=7&r=0&o=5&dpr=2&pid=1.7"
            }],
            quantity: {},
            totalQuantity: 0,
            totalAmount: 0

    },
    name: 'cartpage',
    reducers: {
        setQuantity: (state, action) => {
            console.log(action.payload.id, action.payload.quantity)
            state.quantity[action.payload.id] = action.payload.quantity
        },
        deleteProduct: (state, action) =>{
            const index = findIndexById(state.cart, action.payload.id);
            console.log(index)
            state.cart.splice(index, 1);
        },
        setTotals: (state, action) => {
            state.totalQuantity = action.payload.totalQuantity;
            state.totalAmount = action.payload.totalAmount;
        }
    }
})

export const {setQuantity, deleteProduct, setTotals} = cartSlice.actions

export default cartSlice.reducer

