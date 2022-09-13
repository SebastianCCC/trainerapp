import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LoadingSpinner } from '../Assets'
import { StateContext } from '../Util/StateContext'
import NavTop from './Header/index'
import Menu from './Header/Menu'

const Layout = ({ children }) => {
  const { loaded } = useContext(StateContext)
  const [showmenu, setShowMenu] = useState(false)
  let { pathname } = useLocation()
  const title = pathname.replace('/', '').replace('-', ' ').replace('home', 'popular classes')
  const displayTitle = !title.includes('class/')
  return (
    <div className="w-mobile">
      {loaded && (
        <div className="fixed flex flex-col justify-center items-center top-0 h-screen bg-additional/70 backdrop-blur-sm w-mobile text-primary">
          <LoadingSpinner />
        </div>
      )}
      <header className="fixed w-mobile top-0 z-20">
        {showmenu && <Menu toggle={setShowMenu} />}
        {title && title !== 'signup' && (
          <NavTop title={title} displayTitle={displayTitle} toggle={setShowMenu} />
        )}
      </header>
      <main className={`${displayTitle && title && 'mt-12'}`}>{children}</main>
    </div>
  )
}

export default Layout
