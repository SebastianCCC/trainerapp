import ClassCard from '../Components/Main/ClassCard'
import TrainerApi from '../Hooks/TrainerApiClass'

const array = [
  {
    title: 'hello',
  },
  {
    title: 'hello again',
  },
]

const Home = () => {
  const { classdata } = TrainerApi({})
  return (
    <div className="p-page">
      <h2 className="font-bold text-2xl">Classes for you</h2>
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
