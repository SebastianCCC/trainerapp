import ClassCard from '../Components/Main/ClassCard'
import TrainerApi from '../Hooks/TrainerApiClass'
import TrainerApiTrainer from '../Hooks/TrainerApiTrainer'
import TrainerCard from '../Components/Main/TrainerCard'
import { SearchIcon } from '../Components/Main/Assets'

const Search = () => {
  const { classdata } = TrainerApi({})
  const { trainerdata } = TrainerApiTrainer({})
  return (
    <div className="p-page">
      <form className="flex items-center pl-3 my-4 border border-ternary rounded-full w-full">
        <div className="text-secondary">
          <SearchIcon />
        </div>
        <input
          className="placeholder:text-secondary w-full p-3 bg-transparent outline-none"
          placeholder="Search Classes"
          type="text"
        />
      </form>
      <h2 className="pt-page font-bold text-2xl">Popular classes</h2>
      <section className="flex overflow-auto py-4">
        {classdata &&
          classdata.map(({ className, asset, id }, i) => {
            return <ClassCard key={i} title={className} img={asset.url} id={id} />
          })}
      </section>
      <h2 className="pt-page font-bold text-2xl">Popular Trainers</h2>
      <section className="flex flex-col overflow-auto py-4">
        {trainerdata &&
          trainerdata.map(({ trainerName, asset }, i) => {
            return (
              <div key={i} className="even:py-page">
                <TrainerCard title={trainerName} img={asset.url} />
              </div>
            )
          })}
      </section>
    </div>
  )
}

export default Search
