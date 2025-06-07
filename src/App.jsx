import Trending from './components/Trending'
import { Route ,Routes } from 'react-router-dom'
import Home from './components/Home'
import Popular from './components/Popular'
import Movies from './components/Movie'
import TvShows from './components/TvShows'
import People from './components/People'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'


function App() {
  return (
    <>
      <div className='h-screen w-screen bg-[#1F1E24] flex'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} /> 
          <Route path='/popular' element={<Popular />} /> 
          <Route path='/movies' element={<Movies />} /> 
          <Route path='/tvshows' element={<TvShows/>} /> 
          <Route path='/person' element={<People/>} /> 
          <Route path='/portfolio' element={<Portfolio/>} />
           <Route path='/contact' element={<ContactUs/>} />

        </Routes>
    </div>
    </>
  )
}

export default App
