import { Link } from 'react-router-dom'
import { Navlinks } from '../links'
import { XIcon } from './Assets'

const Menu = ({ toggle }) => {
  return (
    <div className="absolute w-full h-screen bg-white p-page">
      <div className="flex justify-end text-secondary pb-[30px]">
        <div onClick={() => toggle(false)}>
          <XIcon />
        </div>
      </div>
      <nav className="text-center">
        <ul>
          {Navlinks.map(({ title, link }, i) => {
            return (
              <li key={i} className="text-2xl py-page capitalize">
                <Link onClick={() => toggle(false)} to={link}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
