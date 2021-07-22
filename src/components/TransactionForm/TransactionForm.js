import React,{ useState,useContext,useEffect} from 'react'
import { TransactionContext } from '../../contexts/MyContext';
import classes from './TransactionForm.module.css';
import wallet from '../../assets/wallet.svg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const getRandomInt=(max)=> {
    return Math.floor(Math.random() * max);
  }

  const generateId=()=>{
      return `${getRandomInt(9)}${getRandomInt(9)}${getRandomInt(9)}${getRandomInt(9)}${getRandomInt(9)}${getRandomInt(9)}`
  }
  



const TransactionForm=()=> {

    const [transactions,setTransactions,getStringDate]=useContext(TransactionContext);
    const [amount,setAmount]=useState("");
    const [type,setType]=useState("debit");
    const [category,setCategory]=useState("other");
    const [desc,setDesc]=useState("");
    const [amountError,setAmountError]=useState(false);
    const [descError,setDescError]=useState(false);
    const [dateError,setDateError]=useState(false);
    const [date,setDate]=useState(new Date());
    const [showSubmitSuccessMessage,setShowSubmitSuccessMessage]=useState(false);
    


    
    
    useEffect(() => {        
        if(amount==="0" || amount==="" ){
            setAmountError(true);
        }else{
            setAmountError(false);
        }
        if(desc===""){
            setDescError(true);
        }else{
            setDescError(false);
        }

        if(date===null || date==="" || date===undefined){
            setDateError(true);
        }else{
            setDateError(false);
        }

      

        
        

  
    },[amount,desc,date])

    
    
    const clearForm=()=>{
        setTimeout(()=>{
            setAmount("");
            setDesc("");
            setCategory("other");
        },3000)

    }

    const submitDetails=()=>{
        console.log("submitting...")
        const newTrans={
            id:generateId(),
            type:type,
            amount:amount,
            category:category,
            desc:desc,
            date:getStringDate(date)
        }
        console.log(newTrans)
        
        if(!amountError && !descError && !dateError){
            setShowSubmitSuccessMessage(true);
            clearForm();

            setTimeout(()=>{
                setShowSubmitSuccessMessage(false);
            },3000)
            setTransactions([...transactions,newTrans])
        }
            
        else{
            console.log("error occured")
        }
        
    }
    const basicStyle={
        padding:"10px 15px",
        margin:"5px 0",
        width:"100%",
        fontSize:"15px",
        outline:"none"
        
    }

    const error={
       
        borderColor:"red"
       
    }
    
    
    return (
        <div >
            <form className={classes.transaction_form} onSubmit={(e)=>{e.preventDefault()}}>
                <div className={classes.form_img}>
                    <img className={classes.wallet} src={wallet} />
                </div>
                <div className={classes.form_control}>
                    
                    <input style={amountError?{...basicStyle,...error}:basicStyle}  type="number" placeholder="enter amount" value={amount}  onChange={(e)=>{
                        setAmount(e.target.value)
                        console.log(amount)
                    }}/>
                    
                </div>

                <div className={classes.form_control_2}>
                    <DatePicker  className={dateError?[classes.basicStyle,classes.error]:classes.basicStyle} placeholderText="Choose a date" closeOnScroll={true}  dateFormat='dd/MM/yyyy' showYearDropdown scrollableYearDropdown selected={date} onChange={date=>{
                            setDate(date);
                        }}/>
                    <div>
                        <input type="radio" value="debit" checked={type==="debit"} name="type" onChange={(e)=>{
                            setType(e.target.value);
                            
                        }}/>
                    <label>Debit</label>
                    </div>
                    <div>
                        <input type="radio" value="credit" checked={type==="credit"} name="type" onChange={(e)=>{
                        setType(e.target.value);
                        
                    }}/>
                    <label>Credit</label></div>
                </div>

                {/* <div className={classes.form_control}>
                    
                </div> */}
                
                <div className={classes.form_control}>
                    <select style={basicStyle} value={category} onChange={(e)=>{
                        setCategory(e.target.value);
                        
                    }}>
                        <option value="restaurant">restaurant</option>
                        <option value="income">income</option>
                        <option value="travel">travel</option>
                        <option value="bill">bill</option>
                        <option value="Groceries">Groceries</option>
                        <option value="fees">fees</option>
                        <option value="rent">rent</option>
                        <option value="food">food</option>
                        <option value="other" checked >other</option>
                    </select>
                </div>

                <div className={classes.form_control}>
                    <textarea rows="5" style={descError?{...basicStyle,...error}:basicStyle} value={desc} placeholder="enter comment" onChange={(e)=>{
                        setDesc(e.target.value);
                    }}/>
                </div>

                {amountError || descError || dateError?
                    <div className={classes.form_control}>
                        
                        <p className={classes.error}>Please enter medatory fields</p>
                    </div>
                    :null
                    }

                {showSubmitSuccessMessage?
                    <div className={classes.form_control}>
                        
                        <p className={classes.success}>Submitted Successfully</p>
                    </div>
                    :null
                    }    
                <div className={classes.form_control}>
                    <button className={classes.submit} type="submit" onClick={()=>{
                        submitDetails();
                    }}>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default TransactionForm
