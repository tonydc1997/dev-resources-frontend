import React from 'react';
import './mainSidebar.css';
import rusty from '../../images/rusty.png';
import rr from '../../images/rr.png';

const MainSidebar = ({changeRoute}) => {
    const isAuthed = () => {
        if(localStorage.getItem("uid") && localStorage.getItem("hoken")) return "Dashboard"
        else return "Login"
    }
    return (
        <nav className="main-menu">

            <div className="rustyHeader">
                <img className="ml-0 d-inline rustyImg" src={rusty} alt="Rusty"></img>
                <img className="ml-0 d-inline rustyTitle" src={rr} width={100} alt=""></img>
            </div>
            
            <hr className="mt-0 pt-0" />

            <ul>
                <li>
                    <button onClick={(r) => changeRoute("")}>
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                            Home
                        </span>
                    </button>
                </li>
                <li className="has-subnav">
                    <button onClick={(r) => changeRoute("about")}>
                        <i className="fa fa-laptop fa-2x"></i>
                        <span className="nav-text">
                            About
                        </span>
                    </button>
                </li>
                <hr ></hr>
                <li className="has-subnav">
                    <button onClick={(r) => changeRoute("top")}>
                        <i className="fa fa-trophy fa-2x"></i>
                        <span className="nav-text">
                            Top Resources
                        </span>
                    </button>
                    
                </li>
                <li className="has-subnav">
                    <button onClick={(r) => changeRoute("new")}>
                       <i className="fa fa-clock fa-2x"></i>
                        <span className="nav-text">
                            New Resources
                        </span>
                    </button>
                   
                </li>
                <li>
                    <button onClick={(r) => changeRoute("popular")}>
                        <i className="fa fa-eye fa-2x"></i>
                        <span className="nav-text">
                            Most Viewed
                        </span>
                    </button>
                </li>
            </ul>

            <ul className="dashboard">
                <li>
                    <button onClick={(r) => changeRoute("dashboard")}>
                         <i className="fa fa-user-circle fa-2x"></i>
                        <span className="nav-text">
                            {isAuthed()}
                        </span>
                    </button>
                </li>  
            </ul>
        </nav>
    )
};

export default MainSidebar;