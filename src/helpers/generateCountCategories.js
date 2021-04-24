const getCountCategory = (list, category) =>
  list.filter((item) => item.category === category).length

export default getCountCategory
