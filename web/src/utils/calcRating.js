export function calcRating(reviews) {
  if(!reviews) return 3
  
  let sum = 0
  for (const review of reviews) {
    sum += review.rating
  }
  return Math.ceil(sum / reviews.length)
}

