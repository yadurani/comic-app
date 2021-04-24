import React, { Fragment } from 'react'
import '../../styles/rate.scss'

const Rate = ({ comic, onChange }) => {
  const numberStars = [1, 2, 3, 4, 5]
  return (
    <div className="rate">
      <div className="rate__title">Rate:</div>
      <div className="rate__star">
        <input
          value={0}
          type="radio"
          onChange={onChange}
          checked={Number(comic) === 0}
          className="rate__input"
        />
        {numberStars.map((value) => (
          <Fragment key={value}>
            <label htmlFor={`value-${value}`} className={`rate__label`}>
              <i className="fa fa-star"></i>
            </label>
            <input
              value={value}
              type="radio"
              onChange={onChange}
              checked={Number(comic) === value || false}
              id={`value-${value}`}
              className="rate__input"
            />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Rate
