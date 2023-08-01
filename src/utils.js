import { countryData, oneCountry } from "./mockData"

const cleanData = (dataObject ) => {
  console.log("dataobject", dataObject)
  const {  name, flags, flag } = dataObject
 
  const officialName = name.official
  const altText = flags.alt
  const country = {
    id: Date.now,
    flagPic: flag,
    name: officialName,
    altText
  }

  return country
}
console.log(cleanData(oneCountry))

const getRandomNumber = (data) => {
  return Math.floor(Math.random() * data.length);
}

console.log(getRandomNumber(countryData))


export { cleanData, getRandomNumber }