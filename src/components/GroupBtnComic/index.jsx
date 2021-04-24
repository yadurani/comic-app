import React from 'react'

import { maxNumberComic, minNumberComic } from '../../constants/filters'

const GroupBtnComic = ({ comic, handleRandom, handleNext, handlePrev }) => {
  return (
    <>
      <button
        className="btn"
        disabled={comic?.num === minNumberComic}
        onClick={handlePrev}>
        prev
      </button>
      <button className="btn" onClick={handleRandom}>
        random
      </button>
      <button
        className="btn"
        disabled={comic?.num === maxNumberComic}
        onClick={handleNext}>
        next
      </button>
    </>
  )
}

export default GroupBtnComic
