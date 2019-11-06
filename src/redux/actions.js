import { SET_PRODUCTS, SET_USERS, UPDATE_USER, SET_ORDERS, UPDATE_ORDER, SET_ORDERPRODUCTS, DELETE_ORDERPRODUCT, UPDATE_ORDERPRODUCT, ADD_ORDERPRODUCT, SET_ORDER_HISTORY, DELETE_USER, DELETE_PRODUCT, UPDATE_PRODUCT, DELETE_ORDER, ADD_PRODUCT } from './constants';

// ACTION CREATORS

/////////////////////////USERS ACTION CREATORS//////////////////////////
export const setProductsAction = products => ({ type: SET_PRODUCTS, products });
export const setUsersAction = users => ({ type: SET_USERS, users });

/////////////////////////ORDER ACTION CREATORS//////////////////////////
//SET
export const setOrdersAction = orders => ({ type: SET_ORDERS, orders });
export const setOrderProducts = orderProducts => ({ type: SET_ORDERPRODUCTS, orderProducts });
export const setOrderHistoryAction = orderHistory => ({ type: SET_ORDER_HISTORY, orderHistory });

//ADD
export const addOrderProduct = orderProduct => ({ type: ADD_ORDERPRODUCT, orderProduct });
export const addProductAction = (product) => ({ type: ADD_PRODUCT, product });

//UPDATE
export const updateOrder = (order) => ({ type: UPDATE_ORDER, order });
export const updateOrderProduct = orderProduct => ({ type: UPDATE_ORDERPRODUCT, orderProduct });
export const updateProductAction = (product) => ({ type: UPDATE_PRODUCT, product });
export const updateUserAction = (user) => {
  return {
    type: UPDATE_USER,
    id: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
    streetAddress: user.streetAddress,
    city: user.city,
    state: user.state,
    zipcode: user.zipcode,
    billStreetAddress: user.billStreetAddress,
    billCity: user.billCity,
    billState: user.billState,
    billZipcode: user.billZipcode
  };
};

//DELETE
export const deleteUserAction = (user) => ({ type: DELETE_USER, user });
export const deleteProductAction = (product) => ({ type: DELETE_PRODUCT, product });
export const deleteOrderAction = (order) => ({ type: DELETE_ORDER, order });
export const deleteOrderProducts = id => ({ type: DELETE_ORDERPRODUCT, id });





