import React from 'react'

import CategoryItem from '../CategoryItem'
import '../../../styles/categories.scss'
import { connect } from 'react-redux'
import { updateComic } from '../../../redux/actions/comicAction'
import { removeComic } from '../../../redux/actions/categoryAction'
import NotFound from '../../NotFound'

const ListCategories = ({ categories, updateComic, removeComic }) => {
  const deleteComic = (id) => () => {
    updateComic(id, null)
    removeComic(id)
  }

  if (!categories.length) return <NotFound />
  return (
    <section className="categories">
      {categories.map((category) => (
        <CategoryItem
          key={category.num}
          category={category}
          deleteComic={deleteComic}
        />
      ))}
    </section>
  )
}

const mapDispatchToProps = {
  updateComic,
  removeComic,
}
export default connect(null, mapDispatchToProps)(ListCategories)
