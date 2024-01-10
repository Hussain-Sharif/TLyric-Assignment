import './index.css'

const PopularCountryTabsItem=(props)=>{
    const {eachCountry,selectTab,isTabSelected}=props
    const {id,img,countryName}=eachCountry
    
    const onClickTab=()=>{
        selectTab(id)
    }

    const selectedTabStyle=isTabSelected?"tab-item-selected":null
    console.log("ssdvsv",selectedTabStyle)

    return(
        <li className={`tab-item ${selectedTabStyle}`}>
            <button className='tab-button' type='button' onClick={onClickTab}>
            <img alt={countryName} src={img}/>
            <p>{countryName}</p>
            </button>
            
        </li>
    )
}

export default PopularCountryTabsItem