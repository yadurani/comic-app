import React from 'react'

const CategoryItem = ({ category, deleteComic }) => {
  return (
    <article className="categories__item">
      <p className="categories__item__title">{category.title}</p>
      <img src={category.img} alt={category.alt} />
      <button
        type="button"
        className="categories__item__button"
        onClick={deleteComic(category.num)}>
        Delete to category
        <i className="fa fa-trash"></i>
      </button>
    </article>
  )
}

export default CategoryItem
