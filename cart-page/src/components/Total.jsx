import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTotals } from '../redux/CartSlice'

function Total() {
    let products = useSelector((state)=>state.cartpage.cart)
    let quantity = useSelector((state)=>state.cartpage.quantity)
    let totalItems = useSelector((state)=>state.cartpage.totalQuantity)
    let totalPrice = useSelector((state)=>state.cartpage.totalAmount)
    let dispatch = useDispatch()

    useEffect(()=>{
        const calculateTotal =() =>{
            let totalQty = 0
            let totalAmt = 0
    
            products.forEach((item)=>{
                if(quantity[item.id]){
                    totalQty = totalQty + quantity[item.id]
                    totalAmt = totalAmt + item.price * quantity[item.id]
                }
            })
            dispatch(setTotals({totalQuantity:totalQty, totalAmount:totalAmt}))
        }
        calculateTotal()
    },[products, quantity])
    
    

    return <>
        <div className="cart-summary mt-4">
            <div className="d-flex justify-content-between">
                <p>SUBTOTAL :</p>
                <p>{totalPrice}</p>
            </div>
            <div className="d-flex justify-content-between">
                <p>Total Quantity :</p>
                <p>{totalItems}</p>
            </div>
            <div className="d-flex justify-content-between total-row">
                <p>TOTAL :</p>
                <p>{totalPrice}</p>
            </div>
        </div>
    </>
}

export default Total