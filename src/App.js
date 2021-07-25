

import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home'
import About from './components/About/About'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import PageNotFound from './components/PageNotFound/PageNotFound'


import TransactionForm from './components/TransactionForm/TransactionForm';
import { TransactionProvider } from './contexts/MyContext';
import Transactions from './components//Transactions/Transactions'
import classes from './App.module.css'
import { BrowserRouter, Route ,Switch } from 'react-router-dom';


function App() {
  return (
    <TransactionProvider>
      <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/about' component={About} />
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
       
      </BrowserRouter>
      
    </TransactionProvider>

  );
}

export default App;
