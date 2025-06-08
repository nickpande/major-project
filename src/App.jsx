import Trending from './components/Trending'
import { Route ,Routes } from 'react-router-dom'
import Home from './components/Home'
import Popular from './components/Popular'
import Movies from './components/Movie'
import TvShows from './components/TvShows'
import People from './components/People'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'
import MovieDetails from './components/MovieDetails'
import TvDetails from './components/TvDetails'
import PeopleDetails from './components/PeopleDetails'


function App() {
  return (
    <>
      <div className='h-screen w-screen bg-[#1F1E24] flex'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} /> 
          <Route path='/popular' element={<Popular />} /> 
          <Route path='/movies' element={<Movies />} />
          <Route path='/movie/details/:id' element={<MovieDetails />} />
          <Route path='/tvshows' element={<TvShows/>} /> 
          <Route path='/tvshows/details/:id' element={<TvDetails />} />
          <Route path='/person' element={<People/>} /> 
          <Route path='/person/details/:id' element={<PeopleDetails />} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<ContactUs/>} />

        </Routes>
    </div>
    </>
  )
}

export default App
