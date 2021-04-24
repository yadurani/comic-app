import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { categories } from '../../constants/filters'
import getNumberCategory from '../../helpers/generateCountCategories'
import '../../styles/aside.scss'
import { categoriesSelector } from '../../redux/selectors/selectors'

const Aside = ({ listCategories }) => {
  const listMenusAside = categories.map((category) => {
    const numberCategory = getNumberCategory(listCategories, category)
    return (
      <li key={category} className="sidebar__item">
        <NavLink
          exact
          to={category.toLowerCase()}
          activeClassName="sidebar__item--active">
          {category}
          <span>{numberCategory}</span>
        </NavLink>
      </li>
    )
  })
  return (
    <ul className="sidebar">
      <li className="sidebar__item">
        <NavLink exact to="/" activeClassName="sidebar__item--active">
          Inicio
        </NavLink>
      </li>
      {listMenusAside}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  listCategories: categoriesSelector(state),
})

export default connect(mapStateToProps, null)(Aside)
