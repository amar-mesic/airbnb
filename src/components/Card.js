import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/card.css'

export default function Card({key, imgSrc, rating, reviewCount, country, lesson, price, spotsOpen}) {
    return(
        <div className='card' key={key}>
            {spotsOpen === 0 ? <div className='card-badge'>SOLD OUT</div> : <></>}
            <img src={imgSrc} alt='amar mesic'/>
            <div className='card-rating card-text'>
                <FontAwesomeIcon className='button-icon' icon={icon({ name: 'star', style: 'solid' })} />
                {rating} <span style={{color: 'grey'}}>({reviewCount}) {country}</span>
            </div>
            <p className='card-text'>{lesson}</p>
            <p className='card-text'><span style={{fontWeight: 'bold'}}>From ${price}</span> / person</p>
        </div>
    )
}