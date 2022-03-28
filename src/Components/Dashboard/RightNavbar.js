import './RightNavbar.css'
import { useState } from 'react';

export const Right = () => {
    // function openNav() {
    //     document.getElementById("mySidenav").style.width = "250px";
    // }
    function Closs() {
        document.getElementById("mySidenav").style.width = "50px";
    }

    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        document.getElementById("mySidenav").style.width = "250px";
        // isOpen === true ? setIsopen(false) : setIsopen(true);
        console.log("fss");
        // class={"fa fa-angle-left"}
    }
    
    return (
        <div>
            <div id="mySidenav" class="sidenav">
                <button onClick={() => ToggleSidebar()}>Open</button>
                <span class="fa fa-angle-right" onClick={() => Closs()}>Close</span>
                {/* <a href="#">ITEM 1</a>
                <a href="#">ITEM 2</a>
                <a href="#">ITEM 3</a>
                <a href="#">ITEM 4</a> */}
            </div>
            {/*  */}





            {/* <!-- Use any element to open the sidenav --> */}
            <button onClick={() => Closs()}>close</button>
            {/* <span>Click me to get the right sidebar.</span> */}
            {/* <button onClick={() => ToggleSidebar()}>Open</button> */}

        </div>
    )
}