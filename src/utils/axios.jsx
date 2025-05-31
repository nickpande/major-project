import axios from 'axios';



const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDRlODQ5ZjE2MGZhMTMzYjYyMTQ5MDcyNmY2YzkzOSIsIm5iZiI6MTY4MjA4NzM1MS44MDgsInN1YiI6IjY0NDI5ZGI3ZmNlYzJlMDQzOWQ5OGM0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6OHWf3VrWW2xrpEKFzka0-GgSoOpMU_M55brZ3z2YFY'
  }
})


export default instance
