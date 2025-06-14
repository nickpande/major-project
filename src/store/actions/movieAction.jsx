export {removemovie} from '../Reducers/movieSlice'
import axios from "../../utils/axios"
import {loadmovie} from "../Reducers/movieSlice"



export const asyncloadmovie = (id) => async (dispatch ,getState)=>{
  try {
    const detail =  await axios.get(`/movie/${id}`);
    const externalid= await axios.get(`/movie/${id}/external_ids`);
    const recommendations= await axios.get(`/movie/${id}/recommendations`);
    const similar=  await axios.get(`/movie/${id}/similar`);
    const videos=  await axios.get(`/movie/${id}/videos`);
    const translations=  await axios.get(`/movie/${id}/translations`); 
    const watchproviders= await axios.get(`/movie/${id}/watch/providers`);


    let theultimatedetails = {
        detail: detail.data,
        externalid: externalid.data,
        similar: similar.data,
        videos: videos.data.results.find(m => m.type === "Trailer"),
        recommendations: recommendations.data,
        watchproviders: watchproviders.data,
        translations: translations.data.translations.map((t)=>t.name),
    }
    dispatch(loadmovie(theultimatedetails))
  } catch (error) {
    console.log(error);
    
  }
}


