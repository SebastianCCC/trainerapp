import { ArrowLeftIcon, MenuIcon } from './Assets'

const NavTop = ({ title, displayTitle, toggle }) => {
  return (
    <div className="flex justify-between items-center p-page">
      {displayTitle ? (
        <h1 className="text-3xl capitalize">{title}</h1>
      ) : (
        <div className="text-secondary">
          <ArrowLeftIcon />
        </div>
      )}
      <div onClick={() => toggle(true)} className="text-secondary">
        <MenuIcon />
      </div>
    </div>
  )
}

export default NavTop
