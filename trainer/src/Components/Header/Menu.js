import { Link } from 'react-router-dom'
import { XIcon } from './Assets'
import { useContext } from 'react'
import { StateContext } from '../../Hooks/StateContext'

const Menu = ({ toggle }) => {
  const { token } = useContext(StateContext)

  const Navlinks = [
    {
      title: 'home',
      link: '/home',
      displayLink: true,
    },
    {
      title: 'search',
      link: '/search',
      displayLink: true,
    },
    {
      title: 'my schedule',
      link: '/my-schedule',
      displayLink: token,
    },
    {
      title: token ? 'log out' : 'log in',
      link: '/signup',
      displayLink: true,
    },
  ]
  return (
    <div className="absolute w-full h-screen bg-white p-page">
      <div className="flex justify-end text-secondary pb-[30px]">
        <div onClick={() => toggle(false)}>
          <XIcon />
        </div>
      </div>
      <nav className="text-center">
        <ul>
          {Navlinks.map(({ title, link, displayLink }, i) => {
            return (
              displayLink && (
                <li key={i} className="text-2xl py-page capitalize">
                  <Link onClick={() => toggle(false)} to={link}>
                    {title}
                  </Link>
                </li>
              )
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
