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
        <a href="https://github.com/yadurani/comic-app" target="blank">
          Comic - xkcd.
        </a>
      </div>
    </div>
  )
}

export default Layout
