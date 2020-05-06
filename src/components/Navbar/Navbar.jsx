import React, {Fragment} from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return(
    <Fragment>
    <nav className={styles.navbar}>
    <Link to='/'><h1>Fetch-A-Tab</h1></Link>
    <li><Link to='/artist'>Search By Artist</Link></li>
    <li><Link to='/song'>Search By Song</Link></li>
    </nav>
    </Fragment>
    
        
    )
}

export default Navbar