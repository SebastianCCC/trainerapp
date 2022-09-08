import TrainerApi from '../Hooks/TrainerApiClass'
import { useParams } from 'react-router-dom'
import TrainerApiTrainer from '../Hooks/TrainerApiTrainer'
import TrainerCard from '../Components/Main/TrainerCard'
import { Link } from 'react-router-dom'

const ClassDetail = () => {
  const { id } = useParams()
  const { classdata } = TrainerApi({ id })
  const { trainerdata } = TrainerApiTrainer({ id: classdata && classdata.trainer.id })
  /*   console.log(classdata) */
  /*   console.log(!Array.isArray(trainerdata) && trainerdata) */
  return (
    <>
      {classdata && (
        <>
          <div className="relative min-h-[400px]">
            <div className="absolute z-[10] w-full h-full bg-gradient-to-t from-[#00000080]"></div>
            <div className="absolute bottom-0 z-10 p-page w-full">
              <h1 className="text-primary font-bold text-4xl max-w-[95%] leading-none">
                {classdata.className}
              </h1>
              <div className="flex justify-end pb-[22px] pt-page">
                <button className="border-2 border-primary py-[10px] px-8 font-semibold tracking-wide uppercase text-primary rounded-full">
                  rate
                </button>
              </div>
            </div>
            <img className="absolute w-full h-full object-cover" src={classdata.asset.url} />
          </div>
          <div className="p-page">
            <p className="font-medium pb-page">
              {classdata.classDay + ' - ' + classdata.classTime}
            </p>
            <p className="leading-tight pb-page">{classdata.classDescription}</p>
            <h2 className="text-2xl font-bold py-page">Trainer</h2>
            <TrainerCard title={classdata.trainer.trainerName} img={trainerdata?.asset?.url} />
            <Link to="/signup">
              <button className="bg-primary mt-[15px] py-[12px] px-8 w-full font-semibold text-base tracking-wide uppercase rounded-full">
                sign up
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  )
}

export default ClassDetail
