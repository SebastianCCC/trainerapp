import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon } from '../Components/Main/Assets'
import ClassCard from '../Components/Main/ClassCard'
import TrainerCard from '../Components/Main/TrainerCard'
import TrainerApi from '../Hooks/TrainerApiClass'
import TrainerApiTrainer from '../Hooks/TrainerApiTrainer'

const Search = () => {
  const [filteredClass, setFilteredClass] = useState([])
  const [searchValue, setsearchValue] = useState('')
  const { classdata } = TrainerApi({})
  const { trainerdata } = TrainerApiTrainer({})

  const ClassFilter = ({ target }) => {
    setsearchValue(target.value.toLocaleLowerCase())
    setFilteredClass(
      classdata.filter(
        (singleClass) =>
          singleClass.className.toLocaleLowerCase().includes(searchValue) ||
          singleClass.trainer.trainerName.toLocaleLowerCase().includes(searchValue) ||
          singleClass.classDay.toLocaleLowerCase().includes(searchValue) ||
          singleClass.classDescription.toLocaleLowerCase().includes(searchValue)
      )
    )
    console.log(filteredClass)
  }
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
          value={searchValue}
          onChange={ClassFilter}
        />
      </form>
      {searchValue !== '' && (
        <div className="relative">
          <section className="absolute left-0 top-0 w-full rounded-2xl bg-white z-10 p-page">
            {filteredClass.length > 0 ? (
              filteredClass.map(({ className, classDescription, asset, id }, i) => {
                return (
                  <div className="even:py-page" key={i}>
                    <Link to={`/class/${id}`}>
                      <div className="flex">
                        <div className="w-[80px] h-[80px] overflow-auto rounded-2xl">
                          <img className="h-full object-cover" src={asset.url} />
                        </div>
                        <div className="leading-none p-page">
                          <h2 className="font-semibold pb-2">{className}</h2>
                          <p>{classDescription.slice(0, 22) + '...'}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })
            ) : (
              <p className="font-semibold">
                Your search did not give any results. Try to search for something else.
              </p>
            )}
          </section>
        </div>
      )}
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
