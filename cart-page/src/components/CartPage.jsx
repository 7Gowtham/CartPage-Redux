import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuantity, deleteProduct } from '../redux/CartSlice'

function CartPage() {
    const products = useSelector((state) => state.cartpage.cart)
    console.log(products)
    const quantity = useSelector((state) => state.cartpage.quantity)
    const dispatch = useDispatch()

    const handleQuantity = (itemId, itemQuantity) =>{
        dispatch(setQuantity({id: itemId, quantity: parseInt(itemQuantity)}))
    }

    const handleDelete = (id) =>{
        dispatch(deleteProduct({id: id}))
    }

    return <>
        {
            products.map((e)=>{
               return <div key={e.id} className="cart-item d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <img src={e.thumbnail} alt="Product Image"/>
                        <div className="ml-3">
                            <h5>{e.title}</h5>
                            <p>{e.description}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <div className="mb-2">
                            <select className="form-control" value={quantity[e.id] || ''} onChange={(event) => handleQuantity(e.id, event.target.value)}>
                                <option value="">Select quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="mb-2">{e.price}</div>
                        <div className="remove-btn" onClick={()=>handleDelete(e.id)}>REMOVE</div>
                    </div>
                </div>
            })
        }
    </>
}

export default CartPage