const fetchAfricanCountries = () => {
  return fetch('https://restcountries.com/v3.1/region/Africa')
  .then((resp) => {
    if(resp.ok){
      return resp.json()
    } else {
      throw new Error(`Server error: ${resp.status}`)
    }
  })  
}
export { fetchAfricanCountries }