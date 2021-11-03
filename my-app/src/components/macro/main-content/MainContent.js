import "./mainContent.css";
import "../../../assets/css/style.css";
import Sidebar from "../../template/sidebar-menu/Sidebar";
import Header from "../../template/header/Header";
import Footer from "../../template/footer/Footer";
import {Container} from 'react-bootstrap';
import React from "react";

function MainContent(props) {
    return ( 
        <>
            <Sidebar/>
            <Header/>
            <div className="main-content">
                <Container fluid className="content-top-gap">
                    {props.children}
                    <Footer/>
                </Container>
            </div>

        </>
    );
}

export default MainContent;