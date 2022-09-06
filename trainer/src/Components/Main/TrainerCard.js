const TrainerCard = ({ title, img }) => {
  return (
    <div className="flex">
      <div className="w-[80px] h-[80px] overflow-auto rounded-2xl">
        {img ? <img src={img} /> : <div className="w-full h-full bg-secondary"></div>}
      </div>
      <h2 className="font-semibold p-page">{title}</h2>
    </div>
  )
}

export default TrainerCard
