import React from 'react';
import './Header.css'


import {
    MDBContainer,
    MDBNavbar,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';

export const Header = () => {
    return (

        <MDBNavbar light id='navbarColour' >
            <MDBContainer fluid>
                <a className='navbar-brand'>N</a>
                <div className="search flex aic" id="inputdiv" >
                    <input id="input" placeholder="More..." className="query" />
                    <button className="fa fa-search ico s24 go cfff"></button>
                </div>
            </MDBContainer>
        </MDBNavbar>
    );
}