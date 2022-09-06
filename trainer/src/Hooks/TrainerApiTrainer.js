import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const TrainerApiTrainer = ({ id = '', method = 'GET' }) => {
  const [trainerdata, setTrainerData] = useState(null)

  const callback = (body) => {
    axios({
      method,
      url: `http://${process.env.REACT_APP_IP}/api/v1/trainers/${id ? id : ''}`,
      body: body || null,
    }).then((res) => {
      setTrainerData(res.data)
    })
  }

  useEffect(() => {
    callback()
  }, [id, method])

  return { trainerdata, callback }
}

export default TrainerApiTrainer
