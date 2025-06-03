import Trending from './components/Trending'
import { Route ,Routes } from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
    <>
      <div className='h-screen w-screen bg-[#1F1E24] flex'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} /> 
        </Routes>
    </div>
    </>
  )
}

export default App
