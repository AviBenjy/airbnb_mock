import {API_BASE_URL} from './utils/constants'
import homes from './demiData/homes'
import parseUrlQuery from './utils/parseUrlQuery'



async function editorChoice() {
  // try {
  //   const editorChoice = await fetch(API_BASE_URL+'/editorchoice').then(res => res.json())
  //   return editorChoice
  // } catch (error) {
  //   console.log('client api error editorChoice', error)
  //   return []
  // }

  try {
    return homes.slice(0, 10)
  } catch (error) {
    console.log('client api error editorChoice', error)
    return []
  }
}


async function querySearch(querySearch) {
  // const {country, guests, checkIn, checkOut} = filter
  // const q = `country=${country}&guests=${guests}&checkIn=${checkIn}&checkOut=${checkOut}`
  // console.log('fetch', `${API_BASE_URL}/houses/search?${q}`)
  // try {
  //   const result = await fetch(
  //     `${API_BASE_URL}/houses/search?${q}`,
  //     {
  //       method: 'GET',
  //     }
  //     )
  //   .then(res => res.json())
    
  //   return result
  // } catch (error) {
  //   console.log('api error getSearch', error)
  //   return []
  // }

  console.log('api query url', querySearch)
  const {country, guests, checkIn, checkOut, id} = parseUrlQuery(querySearch)
  if(id) return homes.find(h => h.id == id)

  try {
    const result = homes.filter(home => (
      home.address.country.includes(country) || (guests &&(home.spaceInfo.guests <= +guests))
    ))  
    
    return result
  } catch (error) {
    console.log('client api error querySearch', error)
    return []
  }
}


// export async function getHouses(filter) {
//   const {country} = filter
//   console.log('fetch', `${API_BASE_URL}/houses?country=${country}`)
  
//   try {
//     const houses = await fetch(
//       `${API_BASE_URL}/houses?country=${country}`
//       )
//     .then(res => res.json())
    
//     return houses
//   } catch (error) {
//     console.log('api error getHouses', error)
//     return []
//   }
// }

// export async function getHouse(_id) {
//   console.log('fetch', `${API_BASE_URL}/houses/house?_id=${_id}`)

//   try {
//     const house = await fetch(
//       `${API_BASE_URL}/houses/house?_id=${_id}`
//       )
//     .then(res => res.json())
    
//     return house
//   } catch (error) {
//     console.log('api error getHouse', error)
//     return {}
//   }
// }

// export async function getSearch(filter) {
//   const {country, guests, checkIn, checkOut} = filter
//   const q = `country=${country}&guests=${guests}&checkIn=${checkIn}&checkOut=${checkOut}`
//   console.log('fetch', `${API_BASE_URL}/houses/search?${q}`)

//   try {
//     const result = await fetch(
//       `${API_BASE_URL}/houses/search?${q}`,
//       {
//         method: 'GET',
//       }
//       )
//     .then(res => res.json())
    
//     return result
//   } catch (error) {
//     console.log('api error getSearch', error)
//     return []
//   }
// }


export default {
  editorChoice,
  querySearch
}