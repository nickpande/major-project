export {removeperson} from '../Reducers/peopleSlice'
import axios from "../../utils/axios"
import {loadperson} from "../Reducers/peopleSlice"



export const asyncloadperson = (id) => async (dispatch ,getState)=>{
  try {
    const detail =  await axios.get(`/person/${id}`);
    const externalid= await axios.get(`/person/${id}/external_ids`);
    const combinedCredits= await axios.get(`/person/${id}/combined_credits`);
    const movieCredits= await axios.get(`/person/${id}/movie_credits`);
    const tvCredits= await axios.get(`/person/${id}/tv_credits`);



    let theultimatedetails = {
        detail: detail.data,
        externalid: externalid.data,
        combinedCredits: combinedCredits.data,
        movieCredits: movieCredits.data,
        tvCredits: tvCredits.data, 
     
    }
    dispatch(loadperson(theultimatedetails))
  } catch (error) {
    console.log(error);
    
  }
}


