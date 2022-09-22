import TrainerApi from '../Hooks/TrainerApiClass'
import { useParams } from 'react-router-dom'
import TrainerApiTrainer from '../Hooks/TrainerApiTrainer'
import TrainerCard from '../Components/Main/TrainerCard'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { StateContext } from '../Util/StateContext'
import { useNavigate } from 'react-router-dom'
import TrainerApiUser from '../Hooks/TrainerApiUser'
import RatingModal from '../Components/Main/RatingModal'

const ClassDetail = () => {
  const [showRatingModal, setShowRatingModal] = useState(false)
  const { token, userId } = useContext(StateContext)
  const { id } = useParams()
  const { classdata } = TrainerApi({ id })
  const { trainerdata } = TrainerApiTrainer({ id: classdata && classdata.trainer.id })
  const { userData } = TrainerApiUser({ id: userId, token })
  const SignedUp = userData && userData.classes.some((classes) => classes.id == id)
  let navigate = useNavigate()

  const SignUpClass = () => {
    fetch(`http://${process.env.REACT_APP_IP}/api/v1/users/${userId}/classes/${id}`, {
      method: SignedUp ? 'DELETE' : 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    })
      .then((response) => (SignedUp ? response.text() : response.json()))
      .then(() => {
        navigate('/my-schedule', { replace: true })
      })
      .catch(() => {})
  }
  return (
    <>
      {classdata && (
        <>
          {token && showRatingModal && (
            <RatingModal
              title={`Rate the ${classdata.className} class`}
              toggle={setShowRatingModal}
            />
          )}
          <div className="relative min-h-[400px]">
            <div className="absolute z-[10] w-full h-full bg-gradient-to-t from-[#00000080]"></div>
            <div className="absolute bottom-0 z-10 p-page w-full">
              <h1 className="text-primary font-bold text-4xl max-w-[95%] leading-none">
                {classdata.className}
              </h1>
              <div className="flex justify-end pb-[22px] pt-page">
                {token && (
                  <button
                    onClick={() => setShowRatingModal(true)}
                    className="border-2 border-primary py-[10px] px-8 font-semibold tracking-wide uppercase text-primary rounded-full"
                  >
                    rate
                  </button>
                )}
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
            {token ? (
              <button
                onClick={SignUpClass}
                className="border-2 border-primary mt-[15px] py-[12px] px-8 w-full font-semibold text-base text-primary tracking-wide uppercase rounded-full"
              >
                {SignedUp ? 'cancel class appointment' : 'sign up for class'}
              </button>
            ) : (
              <Link to="/signup">
                <button className="bg-primary mt-[15px] py-[12px] px-8 w-full font-semibold text-base tracking-wide uppercase rounded-full">
                  sign in
                </button>
              </Link>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default ClassDetail
