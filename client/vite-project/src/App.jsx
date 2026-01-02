import { useEffect, useState } from "react"

const App = () => {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/message`)
      .then(res => res.json())
      .then(data => {
        setMessage(data.message)
      })
      .catch(err => console.log(err))
  }, [])

  return <div>data {message}</div>
}

export default App
