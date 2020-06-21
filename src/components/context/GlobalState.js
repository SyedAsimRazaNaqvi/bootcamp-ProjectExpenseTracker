import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
const initialTranaction = {
    transactions: []
}

export const GlobalContext = createContext(initialTranaction);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialTranaction)

//Here is the Actions
function del(id){
dispatch({
    type: 'DELETE_TRANSACTION',
    payload:id
});
}

function add(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload:transaction
    });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            del,
            add
        }} > {children}</GlobalContext.Provider >)
}