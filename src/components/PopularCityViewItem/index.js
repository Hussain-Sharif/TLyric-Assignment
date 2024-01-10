
import './index.css'


const PopularCityViewItem=(props)=>{
    
    const {eachCity}=props
    const {img,cityName}=eachCity
    return(
        <li className='city-item'>
            <img src={img} alt={cityName}/>
            <button type='button' >{cityName}</button>            
        </li>
    )
}

export default PopularCityViewItem