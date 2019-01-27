export default function parseUrlQuery(urlWithQuery) {
  if(!urlWithQuery) return ''
  const query = {}

  urlWithQuery = urlWithQuery.slice(1, urlWithQuery.length)

  urlWithQuery = urlWithQuery.split('&')
  urlWithQuery.forEach(element => {
    let q = element.split('=')
    query[q[0]] = q[1]
  })
  
  return query
}