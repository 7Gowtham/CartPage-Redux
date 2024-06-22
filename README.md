# CartPage - Redux

## Contents
- [Description](#description)
- [Features](#features)
- [Functionalities Used](#functionalities-used)

### Description
This project demonstrates how to create a cart page utilizing React Redux to manage per-item price, quantity, total quantity, and total amount

### Features
1. Displays images of the mobiles and their details.
2. Includes a dropdown to select product quantity, with price shown for a single product.
3. Has a "Remove" button to delete a product.
4. Shows Subtotal, Total Quantity, and Total Price of selected products.

### Functionalities Used
1. Utilized `React Redux` for functionality.
2. In Redux, a store and a slice are created.
3. The slice contains `initialState`, `name`, and `reducers`.
4. Reducers contain actions. In this project, the actions `setQuantity`, `deleteProduct`, `setTotals` are defined.
5. Utilized `useSelector` to extract data from the Redux store state.
6. Utilized `useDispatch` to create functions that dispatch actions.
7. Utilized `useState` and `useEffect` to manage quantity and total amount calculations.
