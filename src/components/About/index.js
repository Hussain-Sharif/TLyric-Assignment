import './index.css'
const aboutDetails=[
    {
        id:1,
        imgUrl:"https://prod-static-assets.amberstudent.com/images/homepage-beds.svg",
        mainText:"1 M+ Beds",
        text:"Book your perfect place from an extensive list of options."
    },
    {
        id:2,
        imgUrl:"https://prod-static-assets.amberstudent.com/images/homepage-universities.svg",
        mainText:"800+ Universities",
        text:"Find the best student homes near prestigious universities."
    },
    {
        id:3,
        imgUrl:"https://prod-static-assets.amberstudent.com/images/homepage-cities.svg",
        mainText:"250+ Global Cities",
        text:"We operate in major cities around the world."
    },
    {
        id:4    ,
        imgUrl:"https://prod-static-assets.amberstudent.com/images/trustpilot-rating.svg",
        mainText:"4.8/5 on Trustpilot",
        text:"4000+ students have rated us excellent for our services."
    }
]

const About=()=>(
    <ul className="about-main-bg">
        {aboutDetails.map(eachDetails=>(<li className="details-item" key={eachDetails.id}>
            <img src={eachDetails.imgUrl} alt={eachDetails.mainText}/>
            <h1>{eachDetails.mainText}</h1>
            <p>{eachDetails.text}</p>
        </li>))}
    </ul>
)

export default About