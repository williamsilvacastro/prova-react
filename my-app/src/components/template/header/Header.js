import React from "react";
import "../../../assets/css/style.css";
import profileimg from "../../../assets/images/profileimg.jpg";
function Header() {
    return (
        <>
            <div className="header sticky-header">

                {/* <!-- notification menu start --> */}
                <div className="menu-right">
                    <div className="navbar user-panel-top">
                        <div className="search-box">
                            <form action="#search-results.html" method="get">
                                <input className="search-input" placeholder="Search Here..." type="search" id="search" />
                                <button className="search-submit" value=""><span className="fa fa-search"></span></button>
                            </form>
                        </div>
                        <div className="profile_details">
                            <ul>
                                <li >
                                    <a href="#" >
                                        <div className="profile_img">
                                            <img src={profileimg} className="rounded-circle" alt="" />
                                            
                                        </div>
                                    </a>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--notification menu end --> */}
        </>
    );
}

export default Header;