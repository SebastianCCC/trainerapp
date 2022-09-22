import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LoadingSpinner } from '../Assets'
import { StateContext } from '../Util/StateContext'
import NavTop from './Header/index'
import Menu from './Header/Menu'
import { Detector } from 'react-detect-offline'
import { OfflineIcon } from './Header/Assets'
import { motion } from 'framer-motion'

const Layout = ({ children }) => {
  const { loaded } = useContext(StateContext)
  const [showmenu, setShowMenu] = useState(false)
  let { pathname } = useLocation()
  const title = pathname.replace('/', '').replace('-', ' ').replace('home', 'popular classes')
  const displayTitle = !title.includes('class/')
  return (
    <div className="w-mobile">
      <Detector
        render={({ online }) => (
          <>
            {!online && (
              <motion.div
                initial={{ opacity: 0, y: '-100vh' }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-page absolute w-mobile z-30"
              >
                <div className="flex justify-center items-center bg-primary py-[12px] px-8 rounded-full w-[90%] m-auto">
                  <OfflineIcon />
                  <h2 className="font-semibold text-base tracking-wide uppercase text-center pl-4">
                    Your offline
                  </h2>
                </div>
              </motion.div>
            )}
          </>
        )}
      />
      {loaded && (
        <div className="fixed flex flex-col justify-center items-center top-0 h-screen bg-additional/70 backdrop-blur-[2px] w-mobile">
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
