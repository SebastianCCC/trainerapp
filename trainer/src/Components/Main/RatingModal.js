const RatingModal = ({ title, toggle }) => {
  return (
    <div className="fixed z-20 flex flex-col justify-center items-center top-0 h-screen bg-black/60 w-mobile">
      <div className="bg-white px-8 py-6 rounded-2xl w-[85%]">
        <h2 className="font-semibold text-base text-center">{title}</h2>
        <button
          onClick={() => toggle(false)}
          className="bg-primary mt-[15px] py-[12px] px-8 w-full font-semibold text-base tracking-wide uppercase rounded-full"
        >
          save rating
        </button>
      </div>
    </div>
  )
}

export default RatingModal
