import React from 'react'

import CategoryItem from '../CategoryItem'
import { connect } from 'react-redux'
import { useParams } from 'react-router'

import { updateComic } from '../../../redux/actions/comicAction'
import { removeComic } from '../../../redux/actions/categoryAction'
import NotFound from '../../NotFound'
import '../../../styles/categories.scss'
import { categoriesSelector } from '../../../redux/selectors/selectors'

const ListCategories = ({ listCategories, updateComic, removeComic }) => {
  const categoryId = useParams().category
  const filterCategories = listCategories.filter(
    (category) => category.category.toLowerCase() === categoryId
  )

  const deleteComic = (id) => () => {
    updateComic(id, null)
    removeComic(id)
  }

  if (!filterCategories.length) return <NotFound />
  return (
    <section className="categories">
      {filterCategories.map((category) => (
        <CategoryItem
          key={category.num}
          category={category}
          deleteComic={deleteComic}
        />
      ))}
    </section>
  )
}

const mapStateToProps = (state) => ({
  listCategories: categoriesSelector(state),
})

const mapDispatchToProps = {
  updateComic,
  removeComic,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCategories)
