import TrainerApi from '../Hooks/TrainerApiClass'
import { useParams } from 'react-router-dom'

const ClassDetail = () => {
  const { id } = useParams()
  const { classdata } = TrainerApi({ id })
  console.log(classdata)
  return (
    <>
      {classdata && (
        <>
          <div className="relative min-h-[400px]">
            <div className="absolute z-[10] w-full h-full bg-gradient-to-t from-[#00000080]"></div>
            <div className="absolute bottom-0 z-10 p-page">
              <h1 className="text-primary font-bold text-4xl max-w-[60%] leading-none">
                {classdata.className}
              </h1>
            </div>
            <img className="absolute w-full h-full object-cover" src={classdata.asset.url} />
          </div>
          <div className="p-page">
            <p className="font-medium pb-page">
              {classdata.classDay + ' - ' + classdata.classTime}
            </p>
            <p className="leading-tight pb-page">{classdata.classDescription}</p>
            <h2 className="text-2xl font-bold py-page">Trainer</h2>
          </div>
        </>
      )}
    </>
  )
}

export default ClassDetail
