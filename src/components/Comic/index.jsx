import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import '../../styles/comic.scss'
import {
  getComicById,
  rateComic,
  updateComic,
} from '../../redux/actions/comicAction'
import {
  addComicCategory,
  removeComic,
} from '../../redux/actions/categoryAction'
import Rate from '../Rate'
import GroupBtnComic from '../GroupBtnComic'
import generateNumber from '../../helpers/generateNumber'
import Select from '../Select'
import {
  currentComicSelector,
  comicsSelector,
} from '../../redux/selectors/selectors'

const Comic = ({
  current,
  getComicById,
  rateComic,
  addComicCategory,
  updateComic,
  removeComic,
}) => {
  useEffect(() => {
    !Object.keys(current).length && getComicById()
  }, [])

  const handleChangeRate = (e) => {
    const { value } = e.target
    rateComic(current.num, value)
  }

  const handleSelected = (e) => {
    const { value } = e.target
    updateComic(current.num, value)
    addComicCategory(value)
  }

  const deleteComic = (id) => () => {
    updateComic(current.num, null)
    removeComic(id)
  }

  const handleRandom = () => {
    const numberRandom = generateNumber()
    getComicById(numberRandom)
  }

  const handleNext = () => getComicById(current?.num + 1)
  const handlePrev = () => getComicById(current?.num - 1)

  return (
    <div className="comic">
      <h2 className="comic__title">
        {current?.title}
        <span className="comic__badge">{current?.rate}/5</span>
      </h2>
      <hr className="separator" />
      <div className="comic__img">
        <img
          className="comic__img--auto"
          src={current?.img}
          alt={current?.alt}
        />
      </div>
      <div className="comic__category">
        <Rate comic={current.rate} onChange={handleChangeRate} />
        <Select
          comic={current}
          onChange={handleSelected}
          deleteComic={deleteComic}
        />
      </div>
      <div className="comic__button">
        <GroupBtnComic
          comic={current}
          handleRandom={handleRandom}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  current: currentComicSelector(state),
  comics: comicsSelector(state),
})

const mapDispatchToProps = {
  getComicById,
  rateComic,
  addComicCategory,
  updateComic,
  removeComic,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comic)
