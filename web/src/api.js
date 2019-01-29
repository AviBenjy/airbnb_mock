import {API_BASE_URL} from './utils/constants'
// import homes from './demiData/homes.json'
import parseUrlQuery from './utils/parseUrlQuery'



async function editorChoice() {
  try {
    console.log('fetch', API_BASE_URL+'/editorchoice')
    const editorChoice = await fetch(API_BASE_URL+'/editorchoice').then(res => res.json())
    return editorChoice
  } catch (error) {
    console.log('client api error editorChoice', error)
    return []
  }
}


async function queryHome(query) {
  console.log('queryHome', query);
  
  try {
    const result = await fetch(
      `${API_BASE_URL}/home${query}`,
      {
        method: 'GET',
      }
      )
    .then(res => res.json())
    
    return result
  } catch (error) {
    console.log('api error queryHome', error)
    return {}
  }
}


async function queryHomes(query) {
  console.log('query homes', query);
  
  try {
    const houses = await fetch(
      `${API_BASE_URL}/homes${query}`
      )
    .then(res => res.json())
    
    return houses
  } catch (error) {
    console.log('api error queryHomes', error)
    return []
  }
}



export default {
  editorChoice,
  queryHome,
  queryHomes
}