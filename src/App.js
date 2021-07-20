

import NavBar from './components/Navbar/NavBar';
import NavLink from './components/NavLink/NavLink';
import TransactionForm from './components/TransactionForm/TransactionForm';
import { TransactionProvider } from './contexts/MyContext';
import Transactions from './components//Transactions/Transactions'
import classes from './App.module.css'


function App() {
  return (
    <TransactionProvider>
      
      <NavBar />
      <div className={classes.grid}>
        <div  className={classes.item1}>
          <TransactionForm/>
        </div>
        
        <div className={classes.item2}>
          <Transactions className={classes.item2}/> 
        </div>
      </div>
    </TransactionProvider>

  );
}

export default App;
