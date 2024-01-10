import {Component} from 'react'
import { MdOutlineVerified ,MdOutlineHeadphones} from "react-icons/md"
import { CiMoneyBill } from "react-icons/ci"
import NavBar  from '../NavBar'
import SearchInput from '../SearchInput'

import './index.css'

class NavHeader extends  Component{


    render(){
        return (
            <div className='nav-section'>
            <NavBar/>
            <div className='nav-main'>
                <h1>Home away from home!</h1>
                <p>Book student accommodations near top universities and cities across the globe.</p>
                <ul className='nav-garantee-section'>
                    <li className='nav-garantee-item'>
                        <MdOutlineVerified className='nav-garantee-icon'/>
                        <p>Verified Properties</p>
                    </li>
                    <li className='nav-garantee-item'>
                        <MdOutlineHeadphones className='nav-garantee-icon'/>
                        <p>24x7 Assistance</p>
                    </li>
                    <li className='nav-garantee-item'>
                        <CiMoneyBill className='nav-garantee-icon'/>
                        <p>Price  Match Guarantee</p>
                    </li>
                </ul>
                <SearchInput/>
            </div>
        </div>
        )
    }
}

export default NavHeader