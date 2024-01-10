import { Component } from "react"
import { FaBars,FaRegHeart  } from "react-icons/fa"
import { LuLogIn } from "react-icons/lu"
import { IoMdContact } from "react-icons/io"
import { MdSmartphone,MdOutlineHeadphones  } from "react-icons/md"
import MenuToggoleContext from "../../contexts/MenuToggoleContext"
import './index.css'





class NavBar extends Component{

    // state={
    //     tempClassName:"feel"
    // }

    // scrollFunction=()=> {
    //     this.setState((document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) ?
    //         {tempClassName:"scrolled-navbar"} : {tempClassName:"feels"})
    // }

    // setNavbar=()=>{
    //     window.onscroll = function() {this.scrollFunction()};
    // }


    render(){
    return (
            <MenuToggoleContext.Consumer>
                {value=>{
                    const {onMenuToggling}=value

                    const onClickOfMenuBar=()=>{
                        onMenuToggling()
                    }

                    // {this.setNavbar()}
                    return(
                        <nav className={`navbar-main-bg`} >
                            <h1 className="navbar-logo">amber</h1>
                            <button onClick={onClickOfMenuBar} className="toggle-btn" type="button">
                                <FaBars className="toggle-bars-icon"/>
                            </button>
                            <ul className="navbar-items">
                                <li className="navbar-item">
                                    <MdSmartphone className="navbar-item-icon"/>
                                    <p>Download App</p>
                                </li>
                                <li className="navbar-item">
                                    <MdOutlineHeadphones className="navbar-item-icon"/>
                                    <p>Support</p>
                                </li>
                                <li className="navbar-item">
                                    <FaRegHeart className="navbar-item-icon"/>
                                    <p>Shortlist</p>
                                </li>
                                <li className="navbar-item navbar-item-button">
                                    <button type="button" className="navbar-button"><LuLogIn className="login-icon"/> Login</button>
                                </li>
                                <li className="navbar-item navbar-item-button">
                                    <button type="button" className="navbar-button"><IoMdContact className="contact-icon"/> <FaBars className="toggle-bars-icon"/></button>
                                </li>
                            </ul>
                        </nav>
                    )
                }}
            </MenuToggoleContext.Consumer>
        )
            }
        }
export default NavBar