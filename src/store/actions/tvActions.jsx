export {removetv} from '../Reducers/tvSlice'
import axios from "../../utils/axios"
import {loadtv} from "../Reducers/tvSlice"



export const asyncloadtv = (id) => async (dispatch ,getState)=>{
  try {
    const detail =  await axios.get(`/tv/${id}`);
    const externalid= await axios.get(`/tv/${id}/external_ids`);
    const recommendations= await axios.get(`/tv/${id}/recommendations`);
    const similar=  await axios.get(`/tv/${id}/similar`);
    const videos=  await axios.get(`/tv/${id}/videos`);
    const translations=  await axios.get(`/tv/${id}/translations`); 
    const watchproviders= await axios.get(`/tv/${id}/watch/providers`);


    let theultimatedetails = {
        detail: detail.data,
        externalid: externalid.data,
        similar: similar.data,
        videos: videos.data.results.find(m => m.type === "Trailer"),
        recommendations: recommendations.data,
        watchproviders: watchproviders.data,
        translations: translations.data.translations.map((t)=>t.name),
    }
    dispatch(loadtv(theultimatedetails))
  } catch (error) {
    console.log(error);
    
  }
}


