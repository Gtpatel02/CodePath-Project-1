import React from "react";
import Restaurant from "./Restaurant";
import HalalGuys from "../Images/Halal.webp";


const Card = () => {
    return (
        <div className="Container">
            <div className="Restaurant">
            <Restaurant restaurant = 'Halal Guys' image = {HalalGuys} menu = 'https://thehalalguys.com/locations/95-8th-street-nw-atlanta/'
            type = 'Middle Eastern'/>
            </div>
            <div className="Restaurant">
            <Restaurant restaurant = 'The Varsity' image = 'https://lh3.googleusercontent.com/p/AF1QipPt3wEsU3Gaibz72BQFZmvbZcum_lRdACxDZJxG=s1360-w1360-h1020' 
            menu = 'https://thevarsity.com/' type = 'American'/>
            </div>
            <div className="Restaurant">
            <Restaurant restaurant = 'The Flying Biscuit' image = 'https://lh3.googleusercontent.com/p/AF1QipOYncSE7s8BKC9HCCM69Q_McaEEoIoBeNKISnpw=s1360-w1360-h1020'
            menu = 'https://www.flyingbiscuit.com/' type = 'American'/>
            </div>
            <div className="Restaurant">
            <Restaurant restaurant = 'RReal Tacos' image = 'https://lh3.googleusercontent.com/p/AF1QipOntQnK8rginnkZREduaQmtepP-guImqqB062bD=s1360-w1360-h1020'
            menu = 'https://rrealtacos.com/' type = 'Mexican'/>
            </div>
            <div className="Restaurant">
                <Restaurant restaurant = 'Nagomiya' image = 'https://lh3.googleusercontent.com/p/AF1QipNV2jNIEWz7E-YCW2idv2b9DHMpe7uu0vdGoFXQ=s1360-w1360-h1020'
                menu = 'https://www.nagomiyaatlanta.com/' type = 'Japanese'/>
            </div>
            <div className="Restaurant">
                <Restaurant restaurant = 'Ray&apos;s Pizza' image = 'https://lh3.googleusercontent.com/p/AF1QipNdwOzOLnNRFXCb-_Nt7HkG2GvjH12XYdCwPjTK=s1360-w1360-h1020'
                menu = 'https://www.raysnewyorkpizza.com/' type = 'Italian'/>
            </div>
            <div className="Restaurant">
                <Restaurant restaurant = 'Atwoods' image = 'https://lh3.googleusercontent.com/p/AF1QipO_Wl2O-0cnHJjeeHCIwh1OZ6svRKq60uCHcLet=s1360-w1360-h1020'
                menu = 'https://atwoodspizzacafe.com/' type = 'Pizza'/>
            </div>
            <div className="Restaurant">
                <Restaurant restaurant = 'PONKO Chicken' image = 'https://lh3.googleusercontent.com/p/AF1QipPdrApTCiCwSoCXkt8C9wJkWyYWO6LyAGup2NvT=s1360-w1360-h1020'
                menu = 'https://ponkochicken.com/' type = 'American'/>
            </div>
            <div className="Restaurant">
                <Restaurant restaurant = 'Sweet Hut' image = 'https://lh3.googleusercontent.com/p/AF1QipMuqZ3Y3G9UCqskr2cZ4DYFmXIg9xFAUIoJA2fm=s1360-w1360-h1020'
                menu = 'https://www.sweethutbakery.com/' type = 'Bakery'/>
            </div>
            <div className="Restaurant">
                <Restaurant restaurant = 'Tin Drum' image = 'https://lh3.googleusercontent.com/p/AF1QipOrasnKC4NoUzkLIcMUKmmImxGJb9i34h5P7t6M=s1360-w1360-h1020'
                menu = 'https://locations.tindrumasiankitchen.com/ll/US/GA/Atlanta/88-5th-Street' type = 'Asian'/>
            </div>
        </div>
    )
}

export default Card;