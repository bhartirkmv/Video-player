
import axios from 'axios';
// Capitalized variables means that this is a constant value 
// and should not be changed unless stated otherwise.
const KEY = 'AIzaSyCVAl_mjvjAA3tQ_ZVYLhs3m2_LdfYGASI';



export default axios.create({
  // The below URL does not have an ending slash.
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});