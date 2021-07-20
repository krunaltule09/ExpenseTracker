import React,{useState} from 'react'

export const TransactionContext=React.createContext();




export const  TransactionProvider=(props)=>{

    const getStringDate=(date)=>{
    
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const todays_date=`${day}/${month}/${year}`
        return todays_date
    }

    const [transactions,setTransactions] =useState([
        {
            id:233443,
            type:"debit",
            amount:10000,
            category:"other",
            desc:"given to friend",
            date:"12/09/2013"
        },
        {
            id:287443,
            type:"credit",
            amount:50000,
            category:"other",
            desc:"salary",
            date:"30/10/2013"
        },
        {
            id:765354,
            type:"debit",
            amount:5000,
            category:"other",
            desc:"restaurant",
            date:"30/10/2013"
        }
    ])

    return (
        <TransactionContext.Provider value={[transactions,setTransactions,getStringDate]}>
            {props.children}
        </TransactionContext.Provider>
    )
}
