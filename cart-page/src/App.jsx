import React from 'react'
import CartPage from './components/CartPage'
import Total from './components/Total'

function App() {
  return <>
    <h2 className='mt-3 text-center'>Shopping Cart</h2>
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <CartPage />
          <Total />
        </div>
      </div>
    </div>
  </>
}

export default App