import { RxCross2 } from "react-icons/rx"
import { FaRegHeart ,FaRegHandshake ,FaListOl} from "react-icons/fa"
import { IoPersonOutline,IoPeopleOutline ,IoMedalOutline } from "react-icons/io5";
import { MdOutlineHeadphones  } from "react-icons/md"
import { LuLogIn,LuBookMarked } from "react-icons/lu"
// import { FaBars  } from "react-icons/fa"
import MenuToggoleContext from "../../contexts/MenuToggoleContext"
import './index.css'


const MenuPopUp=()=>(
            <MenuToggoleContext.Consumer>
                {
                    value=>{
                        const {onMenuToggling}=value

                        const onClickOfCross=()=>{
                            onMenuToggling()
                        }

                        return(
                            <div className="Menu-main-bg">
                                <div>
                                <nav className="Menu-top">
                                    <h1>Menu</h1>
                                        <button
                                            onClick={onClickOfCross}
                                            className="toggle-btn" type="button"
                                            >
                                        <RxCross2 className="toggle-cross-icon"/>
                                    </button>
                                </nav>
                                <ul className="Menu-part">
                                    <li className="part-item">
                                        <MdOutlineHeadphones className="part-item-icon"/>
                                        <p>Support</p>
                                    </li>
                                    <li className="part-item">
                                        <FaRegHeart className="part-item-icon"/>
                                        <p>Shortlist</p>
                                    </li>
                                </ul>
                                <ul className="Menu-part">
                                    <li className="part-item login-item">
                                        <button>Login to Continue</button>
                                    </li>
                                    
                                    <li className="part-item">
                                        <IoPersonOutline className="part-item-icon"/>
                                        <p>My Profile</p>
                                    </li>
                                    <li className="part-item">
                                        <LuBookMarked className="part-item-icon"/>
                                        <p>Bookings</p>
                                    </li>

                                </ul>
                                
                                <ul className="Menu-part">
                                    <li className="part-item">
                                        <IoPeopleOutline  className="part-item-icon"/>
                                        <p>Group Bookings</p>
                                    </li>
                                    <li className="part-item">
                                        <IoMedalOutline className="part-item-icon"/>
                                        <p>Refer a Friend</p>
                                    </li><li className="part-item">
                                        <FaRegHandshake className="part-item-icon"/>
                                        <p>Partner with Us</p>
                                    </li>
                                    <li className="part-item">
                                        <FaListOl className="part-item-icon"/>
                                        <p>List with Us</p>
                                    </li>
                                </ul>
                                </div>
                                <div className="login-button-contianer">
                                    <button type="button" className="login-button"><LuLogIn className="login-icon"/> Login</button>
                                </div>
                            </div>
                        )
                    }
                }
            </MenuToggoleContext.Consumer>
)

export default MenuPopUp