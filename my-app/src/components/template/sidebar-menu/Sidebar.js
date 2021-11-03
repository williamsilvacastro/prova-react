import React from "react";
import "../../../assets/css/style.css";
import img from "../../../assets/images/logo.png";


function Sidebar() {
    const toggleMenu = () => {
        let body = document.querySelector("body");
        let hasCollapsed = body.classList.contains("sidebar-menu-collapsed");
        if (hasCollapsed) {
            body.classList.remove("sidebar-menu-collapsed");
            body.classList.add("noscroll");
        } else {
            body.classList.remove("noscroll");
            body.classList.add("sidebar-menu-collapsed");
        };
    }


    return (
        <>
            <div className="sidebar-menu sticky-sidebar-menu">

                {/* <!-- logo start --> */}
                <div className="logo">
                    <h1><a href="index.html">Collective</a></h1>
                </div>

                <div className="logo-icon text-center">
                    <a href="index.html" title="logo"><img src={img} alt="logo-icon" /> </a>
                </div>
                {/* <!-- //logo end --> */}

                <div className="sidebar-menu-inner">

                    {/* <!-- sidebar nav start --> */}
                    <ul className="nav nav-pills nav-stacked custom-nav">
                        <li><a href="index.html"><i className="fa fa-tachometer"></i><span> Dashboard</span></a>
                        </li>
                        <li><a href="cards.html"><i className="fa fa-cogs"></i> <span>Default cards</span></a></li>
                        <li><a href="pricing.html"><i className="fa fa-table"></i> <span>Pricing tables</span></a></li>
                        <li><a href="blocks.html"><i className="fa fa-th"></i> <span>Content blocks</span></a></li>
                        <li><a href="forms.html"><i className="fa fa-file-text"></i> <span>Forms</span></a></li>
                    </ul>
                    {/* <!-- //sidebar nav end -->
                    <!-- toggle button start --> */}
                    <a className="toggle-btn" onClick={toggleMenu}>
                        <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
                        <i className="fa fa-angle-double-right menu-collapsed__right"></i>
                    </a>
                    {/* <!-- //toggle button end --> */}
                </div>
            </div>
        </>
    );
}

export default Sidebar;