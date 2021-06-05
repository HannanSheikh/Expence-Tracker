import React, { createContext, useReducer } from 'react'
import transReducer  from './transReducer'

const initialtransaction = {
    transaction:[]
}


export const TransContext = createContext(initialtransaction)

 export const TransProvider = ({children})=>{

    const [state, dispatch] = useReducer(transReducer, initialtransaction)

    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }
    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    return(
        <TransContext.Provider value={{
            transaction:state.transaction,
            addTransaction,
            delTransaction
        }}>
            {children}
        </TransContext.Provider>
    )
 }


