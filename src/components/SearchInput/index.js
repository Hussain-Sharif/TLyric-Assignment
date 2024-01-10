import { MdOutlineSearch } from "react-icons/md";
import './index.css'

const SearchInput=()=>(
    <div className="search-container">
        <input className="search-input" type="text" placeholder="Search by City, University or Property"/>
        <button type="button" className="search-button" >
            <MdOutlineSearch className="search-icon"/>
        </button>
    </div>
)

export default SearchInput