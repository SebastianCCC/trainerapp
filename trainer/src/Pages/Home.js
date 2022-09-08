import ClassCard from '../Components/Main/ClassCard'
import TrainerApi from '../Hooks/TrainerApiClass'
import { Link } from 'react-router-dom'

const Home = () => {
  const { classdata } = TrainerApi({})
  const randomClass = classdata && Math.floor(Math.random() * classdata.length)
  return (
    <div className="p-page">
      {classdata && (
        <div className="relative rounded-2xl overflow-hidden min-h-[400px] mb-[15px]">
          <Link to={`/class/${classdata[randomClass].id}`}>
            <img
              className="absolute w-full h-full object-cover"
              src={classdata[randomClass].asset.url}
            />
            <div className="absolute w-[70%] h-[17%] bottom-0 p-2 px-3 bg-primary rounded-tr-[40px]">
              <h2 className="font-semibold">{classdata[randomClass].className}</h2>
            </div>
          </Link>
        </div>
      )}
      <h2 className="pt-page font-bold text-2xl">Classes for you</h2>
      <section className="flex overflow-auto py-4">
        {classdata &&
          classdata.map(({ className, asset, id }, i) => {
            return <ClassCard key={i} title={className} img={asset.url} id={id} />
          })}
      </section>
    </div>
  )
}

export default Home
