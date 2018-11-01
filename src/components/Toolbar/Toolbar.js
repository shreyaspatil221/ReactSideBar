import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => {
    return(
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="toolbar_logo"><a href="#">The Logo</a></div>
                <div className="spacer"/>
                <div className="toolbar_navigation_items">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
} 

export default Toolbar;