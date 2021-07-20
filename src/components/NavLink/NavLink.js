import React from 'react'
import classes from './NavLink.module.css'

const NavLink=({name})=> {
    // console.log(classes)
    return (
        <a href="#" className={classes.link}>{name}</a>
    )
}

export default NavLink
