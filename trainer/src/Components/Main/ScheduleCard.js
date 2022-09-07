import { Link } from 'react-router-dom'

const ScheduleCard = ({ title, decs, id }) => {
  return (
    <Link to={`/class/${id}`}>
      <article className="border border-ternary bg-additional rounded-xl px-[18px] pt-[18px] pb-2">
        <h2 className="font-semibold pb-[18px] text-xl">{title}</h2>
        <p className="font-medium">{decs}</p>
      </article>
    </Link>
  )
}

export default ScheduleCard
