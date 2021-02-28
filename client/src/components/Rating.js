import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import PropTypes from 'prop-types'


const Rating = ({rating,reviewText}) => {
    return (
        <div className="my-2" >
            <span>
                <i style={{color : '#f8e825'}} className={ rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
            </span>
            <span>
                <i style={{color : '#f8e825'}} className={ rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
            </span>
            <span>
                <i  style={{color : '#f8e825'}} className={ rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
            </span>
            <span>
                <i style={{color : '#f8e825'}} className={ rating >= 4 ? 'fas fa-star' : rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
            </span>
            <span>
                <i style={{color : '#f8e825'}} className={ rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
            </span>
            <span> {reviewText && reviewText}</span>
        </div>
    )
}

Rating.propTypes ={
    rating : PropTypes.number.isRequired,
    reviewText : PropTypes.string.isRequired,

}

export default Rating
