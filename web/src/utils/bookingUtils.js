import moment from 'moment' 


export function isValidBook(incomingBook, bookings) {
  
  let {checkIn, checkOut} = incomingBook
  if(!checkIn || !checkOut) return false
  if(!moment(checkIn, "DD-MM-YYYY").isValid()) return false
  if(!moment(checkOut, "DD-MM-YYYY").isValid()) return false
  
  checkIn = moment(checkIn, "DD-MM-YYYY").valueOf() // valueOf() return the date as miliseconds
  checkOut = moment(checkOut, "DD-MM-YYYY").valueOf()
  if(checkIn >= checkOut) return false


  
  for (const book of bookings) {
    const bookIn = moment(book.checkIn, "DD-MM-YYYY").valueOf()
    const bookOut = moment(book.checkOut, "DD-MM-YYYY").valueOf()
    
    if((checkIn >= bookIn && checkIn <= bookOut) ||
       (checkOut <= bookOut && checkOut >= bookIn) ||
       (bookIn >= checkIn && bookIn <= checkOut) )
       {
         return false
       }
  }
  return true
}