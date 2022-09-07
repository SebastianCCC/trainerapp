import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavTop from './Header/index'
import Menu from './Header/Menu'

const Layout = ({ children }) => {
  const [showmenu, setShowMenu] = useState(false)
  let { pathname } = useLocation()
  const title = pathname.replace('/', '').replace('-', ' ').replace('home', 'popular classes')
  const displayTitle = !title.includes('class/')
  return (
    <div className="w-mobile">
      <header className="fixed w-mobile top-0 z-20">
        {showmenu && <Menu toggle={setShowMenu} />}
        {title && <NavTop title={title} displayTitle={displayTitle} toggle={setShowMenu} />}
      </header>
      <main className={`${displayTitle && title && 'mt-12'}`}>{children}</main>
    </div>
  )
}

export default Layout
