import { Component } from "react"
import { FaBars,FaRegHeart  } from "react-icons/fa"
import { LuLogIn } from "react-icons/lu"
import { IoMdContact } from "react-icons/io"
import { MdSmartphone,MdOutlineHeadphones  } from "react-icons/md"
import MenuToggoleContext from "../../contexts/MenuToggoleContext"
import './index.css'
import SearchInput from "../SearchInput"





class NavBar extends Component{

    state={
        isScrolled:false,
        isScrolledInput:false
    }

    componentDidMount() {
        console.log("didMOunt")
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        console.log("willUnmount");
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = () => {
        console.log("scrolling...");
    const isScrolled = window.scrollY > 5
    const isScrolledInput=window.scrollY>320 
    if (this.state.isScrolled !== isScrolled) {
        this.setState({ isScrolled: isScrolled });
    }
    if(this.state.isScrolledInput !==isScrolledInput ){
        this.setState({isScrolledInput:isScrolledInput})
    }
    };


    render(){
    return (
            <MenuToggoleContext.Consumer>
                {value=>{
                    const {isScrolled,isScrolledInput}=this.state
                    const {onMenuToggling}=value

                    console.log("scrolled:",isScrolled, isScrolledInput)
                    const onClickOfMenuBar=()=>{
                        onMenuToggling()
                    }

                    return(
                        <nav className={`navbar-main-bg ${isScrolled?"scrolled-navbar":null}`} >
                            
                            {isScrolledInput? <SearchInput/> : <h1 className="navbar-logo">amber</h1>}
                            <button onClick={onClickOfMenuBar} className="toggle-btn" type="button">
                                <FaBars className={`toggle-bars-icon ${isScrolled?"scrolled-change":null}`}/>
                            </button>
                            <ul className="navbar-items">
                                <li className="navbar-item">
                                    <MdSmartphone className={`navbar-item-icon ${isScrolled?"scrolled-change":null}`}/>
                                    <p className={` ${isScrolled?"scrolled-change":null}`}>Download App</p>
                                </li>
                                <li className="navbar-item">
                                    <MdOutlineHeadphones className={`navbar-item-icon ${isScrolled?"scrolled-change":null}`}/>
                                    <p className={` ${isScrolled?"scrolled-change":null}`}>Support</p>
                                </li>
                                <li className="navbar-item">
                                    <FaRegHeart className={`navbar-item-icon ${isScrolled?"scrolled-change":null}`}/>
                                    <p className={`${isScrolled?"scrolled-change":null}`}>Shortlist</p>
                                </li>
                                <li className={`navbar-item navbar-item-button ${isScrolled?"scrolled-change-button":null}`}>
                                    <button type="button" className={`navbar-button ${isScrolled?"scrolled-change":null}`}><LuLogIn className={`login-icon ${isScrolled?"scrolled-change":null}`}/> Login</button>
                                </li>
                                <li className={`navbar-item navbar-item-button ${isScrolled?"scrolled-change-button":null}`}>
                                    <button type="button" className={`navbar-button ${isScrolled?"scrolled-change":null}`}><IoMdContact className={`contact-icon ${isScrolled?"scrolled-change":null}`}/> <FaBars className="toggle-bars-icon"/></button>
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