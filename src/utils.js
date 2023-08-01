const cleanData = (dataObject ) => {
  const { name, flags } = dataObject
  const officialName = name.official
  return {
    id: Date.now,
    name: officialName,
    flags
  }
}

const getRandomNumber = (data) => {
  return Math.floor(Math.random() * data.length);
}


export { cleanData, getRandomNumber }