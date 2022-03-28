import { useState } from 'react';
import './LeftNavbar.css'

export const Left = () => {



    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
        console.log("fss");
        // class={"fa fa-angle-left"}
    }

   
    return (
        <div id="sidebar"  class={`Sidbar ${isOpen == true ? 'active' : ''}`}>
            <div class="toggle-btn " onClick={()=>ToggleSidebar()}>
                <div class=" fa fa-angle-right"  id='icons'>
                </div>
                {/* <span class=" fa fa-angle-right"  id='icons'></span> */}
                {/* <span></span>
                <span></span> */}
            </div>

    
            <div class="list">
                <div class="item"><a href="" target="_blank">Pixover Lab</a></div>
                <div class="item">About us</div>
                <div class="item">Gallery</div>
                <div class="item">Contact us</div>
            </div>
        </div>
    )
};
