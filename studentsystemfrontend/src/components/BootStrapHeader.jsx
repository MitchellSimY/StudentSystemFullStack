import * as React from "react";
import { useState } from "react";
import { ArrowRight, MenuApp } from 'react-bootstrap-icons';
import SideBar from "./SideBar"


export default function Header() {
    
    const [showSideBar, setShowSideBar] = useState(false);

    function handleClick(e) {
        if (showSideBar) {
            setShowSideBar(false);
          } else {
            setShowSideBar(true);
          }
    }

    return (
        <div>
            {showSideBar ? <SideBar showSideBar={showSideBar} /> : ""}
            <nav class="navbar navbar-light justify-content-between" style={{backgroundColor: '#228c45'}}>
                <button><MenuApp onClick={handleClick}/></button>
 
                <a class="navbar-brand" style={{paddingLeft: '1em'}}>Navbar</a>

                <div class="form-inline" >
                    <div style={{ paddingRight: '1em' }}>
                        <p>Hello</p>
                    </div>

                </div>
            </nav>
            
        </div>
    );
}
