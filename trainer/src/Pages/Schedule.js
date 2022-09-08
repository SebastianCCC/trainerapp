import ScheduleCard from '../Components/Main/ScheduleCard'
import TrainerApi from '../Hooks/TrainerApiClass'

const Schedule = () => {
  const { classdata } = TrainerApi({})
  return (
    <div className="p-page">
      <section className="flex flex-col py-4">
        {classdata &&
          classdata.map(({ className, classDay, classTime, id }, i) => {
            return (
              <div key={i} className="even:py-4">
                <ScheduleCard title={className} decs={`${classDay} - ${classTime}`} id={id} />
              </div>
            )
          })}
      </section>
    </div>
  )
}

export default Schedule
