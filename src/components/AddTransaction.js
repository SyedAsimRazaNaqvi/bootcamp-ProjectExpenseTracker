import React,{useState,useContext} from 'react'
import {GlobalContext} from './context/GlobalState'

export const AddTransaction = () => {
    
const [text, setText] = useState('')
const [amount, setAmount] = useState(0)

const { add } = useContext(GlobalContext)

const onSubmit = e =>{
    e.preventDefault();

    const newTransaction = {
        id: Math.floor(Math.random()+100000000),
        text,
        amount:+amount
    }
    add(newTransaction)
}

    return (
        <>
            <h3>Add New Transaction</h3>

            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Title</label>
                    <input type="text" value={text} required onChange={(e)=>setText(e.target.value)} id="text" placeholder="Enter Transaction Title"></input>
                </div>
                <div className="form-control">
                    <label htmlFor="text">Amount <br/> 
                    positive - Income, negative - Expense </label>
                    <input type="text" value={amount} required onChange={(e)=>setAmount(e.target.value)} id="text" placeholder="Enter Amount"></input>
                </div>

                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}
