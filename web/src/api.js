import {API_BASE_URL} from './utils/constants'
// import homes from './demiData/homes.json'
import parseUrlQuery from './utils/parseUrlQuery'



async function editorChoice() {
  try {
    const editorChoice = await fetch(API_BASE_URL+'/editorchoice').then(res => res.json())
    return editorChoice
  } catch (error) {
    console.log('client api error editorChoice', error)
    return []
  }
}


async function queryHome(query) {
  try {
    const result = await fetch(
      `${API_BASE_URL}/home${query}`,
      {
        method: 'GET',
      })
    .then(res => res.json())
    
    return result
  } catch (error) {
    console.log('api error queryHome', error)
    return {}
  }
}


async function queryHomes(query) {
  
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


async function signUp(name, email, password) {
  console.log('fetch sign up', JSON.stringify({email, name, password}))
  
  try {
    const result = await fetch(
      `${API_BASE_URL}/auth/signup`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, name, password})
      })
    .then(res => res.json())
    
    return result
  } catch (error) {
    console.log('api error signUp', error)
    return {}
  }
}



export default {
  editorChoice,
  queryHome,
  queryHomes,
  signUp
}