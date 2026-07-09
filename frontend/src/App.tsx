import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function App() {
  const { data } = useQuery({
    queryKey: ['root'],
    queryFn: () => axios.get('/').then(res => res.data)
  })

  return (
    <div>
      <h1>Content Calendar CMS</h1>
      <p>{data?.message || 'Loading...'}</p>
    </div>
  )
}

export default App
