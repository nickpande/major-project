import Trending from './components/Trending'
import { Route ,Routes } from 'react-router-dom'
import Home from './components/Home'
import Popular from './components/Popular'
import Movies from './components/Movie'
function App() {
  return (
    <>
      <div className='h-screen w-screen bg-[#1F1E24] flex'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} /> 
          <Route path='/popular' element={<Popular />} /> 
          <Route path='/movies' element={<Movies />} /> 
        </Routes>
    </div>
    </>
  )
}

export default App
