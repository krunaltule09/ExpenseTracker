import React from 'react'
import NavBarBrand from '../NavBarBrand/NavBarBrand'
import NavItem from '../NavItem/NavItem'
import classes from './NavBar.module.css'
import { BrowserRouter,NavLink } from 'react-router-dom'


const NavBar=() =>{
    return (
        <div className={classes.navbar}>
            <NavBarBrand />
                <div className={classes.nav_links}>
                    <NavLink exact={true} activeClassName={classes.active} to='/'><NavItem name="Home"/>  </NavLink>
                    <NavLink activeClassName={classes.active} to='/products'><NavItem name="Products"/> </NavLink>
                    <NavLink activeClassName={classes.active} to='/about'><NavItem name="About"/>  </NavLink>
                    <NavLink activeClassName={classes.active} to='/contact'><NavItem name="Contact"/>  </NavLink> 
                </div>
           

            
        </div>
    )
}

export default NavBar
