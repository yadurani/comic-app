import React from 'react'
import Aside from '../Aside'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="aside">
        <Aside />
      </div>
      <div className="main">{children}</div>
      <div className="copyright">
        Create by Yadu López 💛. Github
        <a href="" target="blank">
          Comic - xkcd.
        </a>
      </div>
    </div>
  )
}

export default Layout
