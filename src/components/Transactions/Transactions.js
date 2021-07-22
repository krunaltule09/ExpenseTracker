import React , { useState , useContext,useEffect } from 'react'
import {TransactionContext } from '../../contexts/MyContext'
import Transaction from '../Transaction/Tansaction'
import classes from './Transactions.module.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Transactions() {
    const [transactions,setTransactions,getStringDate]=useContext(TransactionContext)
    const [desc,setDesc]=useState(null);
    // const [startDate,setStartDate]=useState(null);
    // const [endDate,setEndDate]=useState(null);
    const [year,setYear]=useState(null);
    const [amount,setAmount]=useState(null);
    const [type,setType]=useState(null);
    const [category,setCategory]=useState(null);
    // console.log(typeof(year));
    
    const isDateInRange=(givenDate,filterYear)=>{
        // given date is in string format we need to convert it into date format to extract year from that
        const dateYear=new Date(givenDate).getFullYear();

        //filterYear is already date object
        filterYear=filterYear.getFullYear();

        if(dateYear>=filterYear){
            return true;
        }

        return false;

    }
    

    const applyFilter=(transactions)=>{
        let filteredTransactions=[...transactions];
        // filter by amount
        if(amount!==null && amount!==0 && amount!==""){
            filteredTransactions=transactions.filter(trans=>{
               return trans.amount>=amount;
            })
        }

        // filter by type
        if(type!=="" && type!=="both" && type!==null){
            filteredTransactions=filteredTransactions.filter(trans=>{
                return trans.type===type;
            })
        }

        // filter by category
        if(category!==null && category!=="" ){
            filteredTransactions=filteredTransactions.filter(trans=>{
                return trans.category===category;
            })
        }

        // filter by description
        if(desc!==null && desc!==""){
            filteredTransactions=filteredTransactions.filter(trans=>{
                return trans.desc.includes(desc);
            })
        }

        // filter by year

        if(year!==null && year!==""){
            filteredTransactions=filteredTransactions.filter(trans=>{
                // given date is in string format we need to convert it into date format to extract year from that
                const dateYear=new Date(trans.date).getFullYear();
                

                //filterYear is already date object
                const filterYear=year.getFullYear();
                console.log(`year ${dateYear} filter year ${filterYear}`)

                if(dateYear>=filterYear){
                    return true;
                }

                return false;
            })
        }




        return filteredTransactions;

        
         
    }

    const removeFilter=()=>{
        setDesc("");
        setAmount(null);
        setCategory("");
        setYear(null);
       
        
        
        
    }

    return (
        <div className={classes.transactions_container}>
            <div className={classes.filter_container}>
                
{/*                 
                <DatePicker 
                placeholderText="Choose a year" 
                closeOnScroll={true}  
                dateFormat='yyyy' 
                showYearPicker
                selected={year} 
                onChange={date=>{
                    setYear(date);
                }}/> */}
                {/* <label>to</label>
                <DatePicker 
                placeholderText="Choose a date" 
                closeOnScroll={true}  
                dateFormat='dd/MM/yyyy' 
                showYearDropdown 
                scrollableYearDropdown 
                selected={endDate} 
                onChange={date=>{
                    setEndDate(date);
                }}/>    */}

                <select  value={category} onChange={(e)=>{
                        setCategory(e.target.value);
                        
                    }}>
                        <option value="">None</option>
                        <option value="restaurant">restaurant</option>
                        <option value="travel">travel</option>
                        <option value="bill">bill</option>
                        <option value="Groceries">Groceries</option>
                        <option value="fees">fees</option>
                        <option value="rent">rent</option>
                        <option value="food">food</option>
                        <option value="other">other</option>
                    </select>  

                    
                    <input 
                    value={desc}
                    placeholder="enter desc"
                    onChange={(e)=>{
                        setDesc(e.target.value);
                    }}/>

                    

                    <button   onClick={()=>{
                        removeFilter();
                    }}>Clear</button> 
                
            
            </div>
            <Transaction isHeader={true}/>
           {applyFilter(transactions).map((tran,id)=>{
               
               return <Transaction key={id} pk={id} id={tran.id}  amount={tran.amount} date={tran.date} desc={tran.desc} category={tran.category} type={tran.type}/>
           })}
        </div>
    )
}

export default Transactions
