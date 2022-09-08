import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const TrainerApi = ({ id = '', method = 'GET' }) => {
  const [classdata, setClassData] = useState(null)

  const callback = (body) => {
    axios({
      method,
      url: `http://${process.env.REACT_APP_IP}/api/v1/classes/${id ? id : ''}`,
      body: body || null,
    }).then((res) => {
      setClassData(res.data)
    })
  }

  useEffect(() => {
    callback()
  }, [method])

  return { classdata, callback }
}

export default TrainerApi
