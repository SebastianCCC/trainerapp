import { Link } from 'react-router-dom'
import background from '../Assets/images/background.jpg'
import center from '../Assets/images/center.jpg'

const hero = [
  {
    title: 'Believe Yourself',
    decs: 'Train like a pro',
    img: background,
  },
  {
    title: 'Start Traning',
    link: 'home',
    img: center,
  },
]

const Welcome = () => {
  return (
    <>
      {hero.map(({ title, decs, link, img }, i) => (
        <div className="grid grid-rows-1 relative" key={i}>
          {!link ? (
            <div className="flex flex-col justify-end row-start-1 row-end-2 col-span-full z-10">
              <h1 className="text-primary font-bold text-5xl max-w-[25%] leading-none p-page px-11">
                {title}
              </h1>
              <div className="pb-8 flex items-center">
                <div className="w-[10%] h-[2px] bg-white"></div>
                <p className="text-white font-bold pl-2">{decs}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-end items-center row-start-1 row-end-2 col-span-full z-10 p-8">
              <Link to={link}>
                <div className="bg-primary px-8 py-3 rounded-full uppercase font-semibold text-base tracking-wide">
                  {title}
                </div>
              </Link>
            </div>
          )}
          <div className="row-start-1 row-end-2 col-span-full flex justify-center overflow-hidden">
            <img className="min-w-[1000px] h-[420px] object-cover" src={img} />
          </div>
        </div>
      ))}
    </>
  )
}

export default Welcome
