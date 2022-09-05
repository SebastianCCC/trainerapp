import { ArrowLeftIcon, MenuIcon } from './Assets'

const NavTop = ({ title, displayTitle, toggle }) => {
  return (
    <div className="flex justify-between items-center p-page">
      {displayTitle ? (
        <h1 className="text-3xl capitalize">{title}</h1>
      ) : (
        <div className={`${displayTitle ? 'text-secondary' : 'text-white'}`}>
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
