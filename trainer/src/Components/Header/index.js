import { ArrowLeftIcon, MenuIcon } from './Assets'
import { useNavigate } from 'react-router-dom'

const NavTop = ({ title, displayTitle, toggle }) => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center p-page">
      {displayTitle ? (
        <h1 className="text-3xl capitalize">{title}</h1>
      ) : (
        <div
          onClick={() => navigate(-1)}
          className={`${displayTitle ? 'text-secondary' : 'text-white'}`}
        >
          <ArrowLeftIcon />
        </div>
      )}
      <div
        onClick={() => toggle(true)}
        className={`${displayTitle ? 'text-secondary' : 'text-white'}`}
      >
        <MenuIcon />
      </div>
    </div>
  )
}

export default NavTop
