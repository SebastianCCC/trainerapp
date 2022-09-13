import { useContext } from 'react'
import ScheduleCard from '../Components/Main/ScheduleCard'
import TrainerApiUser from '../Hooks/TrainerApiUser'
import { StateContext } from '../Util/StateContext'

const Schedule = () => {
  const { token, userId } = useContext(StateContext)
  const { userData } = TrainerApiUser({ id: userId, token })
  return (
    <div className="p-page">
      <section className="flex flex-col py-4">
        {userData?.classes.length ? (
          userData.classes.map(({ className, classDay, classTime, id }, i) => {
            return (
              <div key={i} className="even:py-4">
                <ScheduleCard title={className} decs={`${classDay} - ${classTime}`} id={id} />
              </div>
            )
          })
        ) : (
          <p className="font-semibold">No classes to be found. Try signing up to class first.</p>
        )}
      </section>
    </div>
  )
}

export default Schedule
