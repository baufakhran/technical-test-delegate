import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetcher(url) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    axios({
      method: 'GET',
      url
    })
      .then(({ data }) => {
        setData(data)
      })
      .catch(err => {
        setError(err.response)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [url])
  return [error, isLoading, data]
}
