import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { categories } from '../../constants/filters'
import '../../styles/aside.scss'
import {
  countCategoriesSelector,
} from '../../redux/selectors/selectors'

const Aside = ({ count }) => {
  return (
    <ul className="sidebar">
      <li className="sidebar__item">
        <NavLink exact to="/" activeClassName="sidebar__item--active">
          Inicio
        </NavLink>
      </li>
      {categories.map((category) => (
        <li key={category} className="sidebar__item">
          <NavLink
            exact
            to={category.toLowerCase()}
            activeClassName="sidebar__item--active">
            {category}
            <span>{count(category)}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  count: (category) => countCategoriesSelector(category)(state),
})

export default connect(mapStateToProps, null)(Aside)
