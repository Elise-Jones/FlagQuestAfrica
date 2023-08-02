import { countryData, oneCountry } from "./mockData"

const cleanData = (dataObject ) => {
  console.log("dataobject", dataObject)
  const {  name, flags, flag } = dataObject
 
  const officialName = name.official
  const altText = flags.alt
  const flagPng = flags.png
  const country = {
    id: Date.now,
    flagPic: flag,
    name: officialName,
    altText,
    flagPng
  }

  return country
}

const getRandomNumber = (data) => {
  const index = Math.floor(Math.random() * data.length)
  return data[index]
}


export { cleanData, getRandomNumber }