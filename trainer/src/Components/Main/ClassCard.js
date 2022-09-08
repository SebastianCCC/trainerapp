import { Link } from 'react-router-dom'

const ClassCard = ({ title, img, id }) => {
  return (
    <article className="relative even:mx-4 min-w-[130px] min-h-[160px] rounded-l-2xl rounded-tr-2xl overflow-hidden">
      <Link to={`/class/${id}`}>
        <img className="w-full h-full object-cover" src={img} />
        <div className="absolute w-full h-[30%] bottom-0 p-2 px-3 bg-primary rounded-tr-3xl">
          <h2 className="font-bold text-sm">{title}</h2>
        </div>
      </Link>
    </article>
  )
}

export default ClassCard
