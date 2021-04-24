import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import ListCategories from '../components/Categories/ListCategories'

const Category = ({ listCategories }) => {
  const categoryId = useParams().category
  const filterCategories = listCategories.filter(
    (category) => category.category.toLowerCase() === categoryId
  )

  return <ListCategories categories={filterCategories} />
}

const mapStateToProps = ({ Category }) => ({
  listCategories: Category.listSelected,
})

export default connect(mapStateToProps, null)(Category)
