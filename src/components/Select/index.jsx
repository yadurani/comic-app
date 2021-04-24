import React from 'react'

import { categories } from '../../constants/filters'
import '../../styles/select.scss'

const Select = ({ comic, onChange, deleteComic }) => {
  return (
    <div className="select">
      {!comic?.category ? (
        <select className="select__input" onChange={onChange}>
          <option value="">Select category</option>
          {categories.map((key) => (
            <option name={key} value={key} key={key}>
              {key}
            </option>
          ))}
        </select>
      ) : (
        <div className="select__badge">
          Added to {comic?.category}
          <div className="select__button" onClick={deleteComic(comic?.num)}>
            <i className="fa fa-trash"></i>
          </div>
        </div>
      )}
    </div>
  )
}

export default Select
