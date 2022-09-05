import { useLocation } from 'react-router-dom'
import NavTop from './Header/index'

const Layout = ({ children }) => {
  let { pathname } = useLocation()
  const title = pathname.replace('/', '').replace('home', 'popular classes')
  const displayTitle = !title.includes('class/')
  return (
    <div className="max-w-mobile">
      <header className="sticky top-0">
        {title && <NavTop title={title} displayTitle={displayTitle} />}
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
