import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="notFound">
    Ups!!! You don't have comics saved
    <Link to="/">
      <span className="btn">Add Comics</span>
    </Link>
  </div>
)

export default NotFound
