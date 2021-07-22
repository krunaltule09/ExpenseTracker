import React from 'react'
import classes from './NavItem.module.css'

const NavItem=({name})=> {
    // console.log(classes)
    return (
        <a href="#" className={classes.link}>{name}</a>
    )
}

export default NavItem
