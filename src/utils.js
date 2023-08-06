const cleanData = (dataObject ) => {
  
  const {  name, flags } = dataObject
 
  const officialName = name.official
  const altText = flags.alt
  const flagPng = flags.png
  const country = {
    id: officialName,
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