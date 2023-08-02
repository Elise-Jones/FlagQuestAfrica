const fetchAfricanCountries = () => {
  return fetch('https://restcountries.com/v3.1/region/Africa')
  .then((resp) => {
    if(resp.ok){
      return resp.json()
    } else {
      throw new Error("Sorry something went wrong")
    }
  })  
}
export { fetchAfricanCountries }