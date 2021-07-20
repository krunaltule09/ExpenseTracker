import React from 'react'
import NavBarBrand from '../NavBarBrand/NavBarBrand'
import NavLink from '../NavLink/NavLink'
import classes from './NavBar.module.css'

const NavBar=() =>{
    return (
        <div className={classes.navbar}>
            <NavBarBrand />
            <div className={classes.nav_links}>
                <NavLink name="Home"/>
                <NavLink name="Products"/>
                <NavLink name="About"/>
                <NavLink name="Contact"/>
            </div>
        </div>
    )
}

export default NavBar
